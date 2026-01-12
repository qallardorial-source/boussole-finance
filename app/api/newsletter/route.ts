import { NextRequest, NextResponse } from 'next/server';

/**
 * API route pour l'inscription à la newsletter
 *
 * Cette API peut être connectée à différents services d'emailing :
 * - Brevo (ex-Sendinblue) - Gratuit jusqu'à 300 emails/jour
 * - Mailchimp - Gratuit jusqu'à 500 contacts
 * - SendGrid - Gratuit jusqu'à 100 emails/jour
 * - ConvertKit - Pour créateurs de contenu
 *
 * Configuration requise dans .env :
 * - NEWSLETTER_SERVICE : 'brevo' | 'mailchimp' | 'sendgrid' | 'log-only'
 * - NEWSLETTER_API_KEY : Votre clé API
 * - NEWSLETTER_LIST_ID : ID de votre liste (si applicable)
 */

interface NewsletterRequest {
  email: string;
}

// Validation email simple
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Intégration Brevo (ex-Sendinblue)
async function subscribeBrevo(email: string): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.NEWSLETTER_API_KEY;
  const listId = parseInt(process.env.NEWSLETTER_LIST_ID || '1');

  if (!apiKey) {
    return { success: false, error: 'Configuration manquante' };
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email: email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (response.ok || response.status === 201) {
      return { success: true };
    }

    // Si le contact existe déjà, c'est OK
    if (response.status === 400) {
      const data = await response.json();
      if (data.message && data.message.includes('already exists')) {
        return { success: true };
      }
    }

    return { success: false, error: 'Erreur lors de l\'inscription' };
  } catch (error) {
    console.error('Brevo API error:', error);
    return { success: false, error: 'Erreur serveur' };
  }
}

// Intégration Mailchimp
async function subscribeMailchimp(email: string): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.NEWSLETTER_API_KEY;
  const listId = process.env.NEWSLETTER_LIST_ID;
  const datacenter = apiKey?.split('-')[1]; // Extract datacenter from API key

  if (!apiKey || !listId) {
    return { success: false, error: 'Configuration manquante' };
  }

  try {
    const response = await fetch(
      `https://${datacenter}.api.mailchimp.com/3.0/lists/${listId}/members`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
      }
    );

    if (response.ok || response.status === 200) {
      return { success: true };
    }

    // Si l'email existe déjà
    if (response.status === 400) {
      const data = await response.json();
      if (data.title === 'Member Exists') {
        return { success: true };
      }
    }

    return { success: false, error: 'Erreur lors de l\'inscription' };
  } catch (error) {
    console.error('Mailchimp API error:', error);
    return { success: false, error: 'Erreur serveur' };
  }
}

// Intégration SendGrid
async function subscribeSendGrid(email: string): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.NEWSLETTER_API_KEY;
  const listId = process.env.NEWSLETTER_LIST_ID;

  if (!apiKey || !listId) {
    return { success: false, error: 'Configuration manquante' };
  }

  try {
    const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        list_ids: [listId],
        contacts: [
          {
            email: email,
          },
        ],
      }),
    });

    if (response.ok) {
      return { success: true };
    }

    return { success: false, error: 'Erreur lors de l\'inscription' };
  } catch (error) {
    console.error('SendGrid API error:', error);
    return { success: false, error: 'Erreur serveur' };
  }
}

// Mode log-only pour développement/test
async function subscribeLogOnly(email: string): Promise<{ success: boolean; error?: string }> {
  console.log('📧 Newsletter subscription (LOG-ONLY MODE):', email);
  console.log('⚠️  Pour activer la newsletter, configurez NEWSLETTER_SERVICE dans .env');
  return { success: true };
}

export async function POST(request: NextRequest) {
  try {
    // Parse le body
    const body: NewsletterRequest = await request.json();
    const { email } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email requis' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Détecte le service à utiliser
    const service = process.env.NEWSLETTER_SERVICE || 'log-only';

    let result: { success: boolean; error?: string };

    switch (service) {
      case 'brevo':
        result = await subscribeBrevo(email);
        break;
      case 'mailchimp':
        result = await subscribeMailchimp(email);
        break;
      case 'sendgrid':
        result = await subscribeSendGrid(email);
        break;
      case 'log-only':
      default:
        result = await subscribeLogOnly(email);
        break;
    }

    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          message: 'Inscription réussie ! Vérifiez votre boîte mail pour confirmer.'
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: result.error || 'Erreur lors de l\'inscription' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

// OPTIONS pour CORS (si nécessaire)
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Allow': 'POST, OPTIONS',
      },
    }
  );
}

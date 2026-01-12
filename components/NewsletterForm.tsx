"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setEmail("");

        // Reset le statut après 5 secondes
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Une erreur est survenue");

        // Reset le statut d'erreur après 5 secondes
        setTimeout(() => {
          setStatus("idle");
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setStatus("error");
      setErrorMessage("Erreur de connexion. Veuillez réessayer.");

      // Reset le statut d'erreur après 5 secondes
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-secondary to-accent rounded-xl p-8 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-3">
          Recevez nos conseils finance
        </h2>
        <p className="text-white/90 mb-6">
          Inscrivez-vous à notre newsletter pour recevoir nos meilleurs articles et conseils directement dans votre boîte mail.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            required
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            disabled={status === "loading" || status === "success"}
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? "Inscription..." : status === "success" ? "Inscrit !" : "S'inscrire"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-white/90 text-sm">
            ✅ Merci pour votre inscription ! Vous allez recevoir un email de confirmation.
          </p>
        )}

        {status === "error" && errorMessage && (
          <p className="mt-4 text-red-100 text-sm bg-red-500/20 px-4 py-2 rounded">
            ❌ {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}

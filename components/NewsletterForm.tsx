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
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left side - Benefits */}
        <div className="bg-gradient-to-br from-secondary to-accent p-8 text-white flex flex-col justify-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            Newsletter Finance Gratuite
          </h2>
          <p className="text-white/90 mb-6">
            Rejoignez des milliers de lecteurs qui optimisent leurs finances grâce à nos conseils hebdomadaires.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span>
              <span className="text-white/90">1 article exclusif par semaine</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span>
              <span className="text-white/90">Astuces pour économiser et investir</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span>
              <span className="text-white/90">Nouveaux calculateurs en avant-première</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span>
              <span className="text-white/90">Désinscription en 1 clic</span>
            </li>
          </ul>
        </div>

        {/* Right side - Form */}
        <div className="p-8 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="prenom@example.com"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-secondary transition-colors"
                disabled={status === "loading" || status === "success"}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 shadow-md hover:shadow-lg"
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" ? "Inscription en cours..." : status === "success" ? "✓ Inscrit !" : "Recevoir les conseils gratuits"}
            </button>
          </form>

          {status === "success" && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm font-medium">
                🎉 Merci pour votre inscription ! Consultez votre boîte mail pour confirmer.
              </p>
            </div>
          )}

          {status === "error" && errorMessage && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm font-medium">
                ❌ {errorMessage}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

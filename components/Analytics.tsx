"use client";

import Script from "next/script";
import { analytics } from "@/lib/analytics";

export function PlausibleAnalytics() {
  if (!analytics.plausible.enabled) return null;

  return (
    <Script
      defer
      data-domain={analytics.plausible.domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}

export function GoogleAnalytics() {
  if (!analytics.googleAnalytics.enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${analytics.googleAnalytics.measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${analytics.googleAnalytics.measurementId}');
        `}
      </Script>
    </>
  );
}

"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function ScriptLoader() {
  useEffect(() => {
    // Inicialización condicional de librerías si es necesario
    if (typeof window !== "undefined") {
      // Ejemplo de inicialización de WOW.js
      const WOW = require("wow.js");
      new WOW().init();
    }
  }, []);

  return (
    <>
      {/* Scripts externos */}
      <Script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />

      {/* Librerías locales */}
      <Script src="/lib/wow/wow.min.js" strategy="beforeInteractive" />
      <Script src="/lib/easing/easing.min.js" strategy="beforeInteractive" />
      <Script
        src="/lib/waypoints/waypoints.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/lib/owlcarousel/owl.carousel.min.js"
        strategy="beforeInteractive"
      />

      {/* Script principal del template */}
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}

"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function ScriptLoader() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Para WOW.js, espera hasta que los scripts estén cargados
      const initWow = setTimeout(() => {
        const WOW = require("wow.js");
        new WOW().init();
      }, 500);
      
      return () => clearTimeout(initWow);
    }
  }, []);

  return (
    <>
      {/* Scripts externos críticos */}
      <Script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      
      {/* Librerías locales */}
      <Script 
        src="/lib/wow/wow.min.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="/lib/easing/easing.min.js" 
        strategy="lazyOnload"
      />
      <Script 
        src="/lib/waypoints/waypoints.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/lib/owlcarousel/owl.carousel.min.js"
        strategy="afterInteractive"
      />
      
      {/* Script principal del template */}
      <Script 
        src="/js/main.js" 
        strategy="afterInteractive"
      />
    </>
  );
}
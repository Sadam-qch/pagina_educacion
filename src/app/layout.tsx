import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navegation from "../components/navegation";
import Footer from "../components/Footer";
import ScriptLoader from "@/components/ScriptLoader";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ciencias de la Educación",
  description: "Sitio Web de la Carrera de Ciencias de la Educación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Íconos y hojas de estilo externas */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        />

        {/* Librerías de animación y carousel */}
        <link rel="stylesheet" href="/lib/animate/animate.min.css" />
        <link
          rel="stylesheet"
          href="/lib/owlcarousel/assets/owl.carousel.min.css"
        />

        {/* Hojas de estilo de Bootstrap y personalizadas */}
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <ScriptLoader />
      </body>
    </html>
  );
}

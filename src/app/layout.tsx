import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import "@public/lib/animate/animate.min.css";
import "@public/lib/owlcarousel/assets/owl.carousel.min.css";
import "@public/css/bootstrap.css";
import "@public/css/style.css";
import Footer from "../components/Footer";
import ScriptLoader from "@/components/ScriptLoader";
import { Navbar } from "@/components/Navbar";
import BackToTopButton from "@/components/BackToTopButton";

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
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        />
      </head>
      <body className={`antialiased`}>
        <header>
          <Navbar />
        </header>

        {children}

        <BackToTopButton />
        <Footer />
        <ScriptLoader />
      </body>
    </html>
  );
}

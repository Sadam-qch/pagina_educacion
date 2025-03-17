"use client";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation"; // Obtener la ruta actual

export default function Header() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [logo, setLogo] = useState("Cargando...");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activePath, setActivePath] = useState(""); // Ruta activa

  const pathname = usePathname(); // Obtener la ruta actual

  useEffect(() => {
    setActivePath(pathname); // Actualizar la ruta activa al cambiar de página
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsSubmenuOpen(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch(
          "https://serviciopagina.upea.bo/api/InstitucionUPEA/12"
        );
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const result = await response.json();

        const tempLogoDiv = document.createElement("div");
        tempLogoDiv.innerHTML =
          result?.Descripcion?.institucion_logo || "No se encontró información.";
        setLogo(
          tempLogoDiv.textContent ||
            tempLogoDiv.innerText ||
            "No se encontró información."
        );
      } catch (error) {
        setLogo("No encontramos el Logo...");
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  return (
    <>
      {/* Menú fijo sobre la imagen */}
      <nav className="fixed left-0 w-full h-[5rem] bg-[#f56224] bg-opacity-100 z-20">
        <div className="flex items-center justify-between max-w-6xl px-6 mx-auto">
          {[
            {
              logo: loading ? "Cargando..." : DOMPurify.sanitize(logo),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-y-0 sm:space-x-6"
            >
              <div className="flex flex-col items-center">
                <img
                  src={`https://serviciopagina.upea.bo/InstitucionUpea/${item.logo}`}
                  alt="Logo"
                  className="object-contain w-20 "
                />
              </div>
            </div>
          ))}

          {/* Menú de navegación */}
          <ul className="hidden space-x-6 text-lg text-white md:flex">
            {[
              { name: "INICIO", path: "/" },
              { name: "SOBRE LA CARRERA", path: "/about" },
              { name: "TRÁMITES", path: "/tramites" },
              { name: "BIBLIOTECA", path: "/biblioteca" },
            ].map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className={` items-center hover:text-zinc-600 px-2 py-1 rounded-lg ${
                    activePath === item.path
                      ? "border-2 border-black text-black font-bold"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Submenú Unidad Psicopedagógica */}
            <li className="relative">
              <button
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                className={`flex items-center px-4 hover:text-zinc-600 transition-all rounded-lg ${
                  activePath.includes("/unidad_psicopedagogica")
                    ? "border-2 border-black text-black font-bold"
                    : ""
                }`}
              >
                UNIDAD PSICOPEDAGÓGICA <ChevronDown size={18} className="ml-1 transition-all" />
              </button>
              {isSubmenuOpen && (
                <ul className="absolute left-0 w-56 bg-[#ff8652] text-white shadow-lg rounded-md mt-2 transition-transform transform translate-y-0 opacity-100">
                  {[
                    {
                      name: "Orientación Vocacional",
                      path: "/unidad_psicopedagogica/orientacion_vocacional",
                    },
                    {
                      name: "Apoyo Educativo",
                      path: "/unidad_psicopedagogica/apoyo_educativo",
                    },
                  ].map((submenu) => (
                    <li key={submenu.path}>
                      <a
                        href={submenu.path}
                        className={`rounded-md block  hover:text-zinc-600 px-4 py-3 border-black text-black transition-all ${
                          activePath === submenu.path
                            ? "border-2 border-black text-black  font-bold"
                            : ""
                        }`}
                      >
                        {submenu.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

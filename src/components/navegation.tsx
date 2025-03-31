"use client";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // Obtener la ruta actual
import { useInstitutionData } from "@/hooks/useInstitutionData";

export default function Header() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activePath, setActivePath] = useState(""); // Ruta activa
  const { institutionData } = useInstitutionData();

  const pathname = usePathname(); // Obtener la ruta actual

  useEffect(() => {
    setActivePath(pathname); // Actualizar la ruta activa al cambiar de página
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsSubmenuOpen(false);
        setIsMobileMenuOpen(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { name: "INICIO", path: "/" },
    { name: "SOBRE LA CARRERA", path: "/about" },
    { name: "TRÁMITES", path: "/tramites" },
    { name: "BIBLIOTECA", path: "/biblioteca" },

  ];

  return (
    <>
      {/* Menú fijo sobre la imagen */}
      <nav className="fixed left-0 w-full h-[5rem] bg-primary bg-opacity-100 z-20">
        <div className="flex items-center justify-between max-w-6xl px-6 mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/InstitucionUpea/${institutionData?.institucion_logo}`}
              alt="Logo"
              className="object-contain w-20"
            />
          </div>

          {/* Menú de navegación en pantallas grandes */}
          <ul className="hidden space-x-0 text-sm text-white md:flex">
            {menuItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className={`px-2 py-1 rounded-lg transition-all hover:text-black ${
                    activePath === item.path
                      ? "border-2 border-black text-black font-bold"
                      : "hover:text-black"
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
                className={`flex items-center px-4 transition-all rounded-lg hover:text-black ${
                  activePath.includes("/unidad_psicopedagogica")
                    ? "border-2 border-black text-black font-bold"
                    : ""
                }`}
              >
                UNIDAD PSICOPEDAGÓGICA{" "}
                <ChevronDown size={18} className="ml-1 transition-all" />
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
                        className={`rounded-md block px-4 py-3 transition-all hover:text-black ${
                          activePath === submenu.path
                            ? "border-2 border-black text-black font-bold"
                            : ""
                        }`}
                        onClick={() => setIsSubmenuOpen(false)}
                      >
                        {submenu.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Botón de menú responsive en pantallas pequeñas */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Menú desplegable en pantallas pequeñas */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[5rem] left-0 w-full bg-primary text-white  flex flex-col items-center space-y-4 py-4 shadow-lg z-10">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`w-full text-center py-2 transition-all hover:bg-orange-200 hover:text-black rounded-md ${
                  activePath === item.path
                    ? "border-2 border-black text-black font-bold"
                    : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Submenú Unidad Psicopedagógica */}
            <div className="relative w-full text-center">
              <button
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                className="w-full py-2 transition-all flex items-center justify-center rounded-md hover:text-black hover:bg-orange-200"
              >
                UNIDAD PSICOPEDAGÓGICA
                <ChevronDown size={18} className="ml-1 transition-all" />
              </button>
              {isSubmenuOpen && (
                <div className=" w-full flex flex-col items-center">
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
                    <a
                      key={submenu.path}
                      href={submenu.path}
                      className={`w-full text-center py-2 transition-all hover:text-black rounded-md hover:bg-orange-200  ${
                        activePath === submenu.path
                          ? "border-2 border-black text-black font-bold"
                          : ""
                      }`}
                      onClick={() => {
                        setIsSubmenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {submenu.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

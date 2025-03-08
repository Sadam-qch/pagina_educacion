"use client";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

export default function Header() {
  const [loading, setLoading] = useState(true);
  const [nombre, setNombre] = useState("Cargando....");

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch(
          "https://serviciopagina.upea.bo/api/InstitucionUPEA/12"
        );
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const result = await response.json();
        console.log("Respuesta de:", result);

        const tempNomDiv = document.createElement("div");
        tempNomDiv.innerHTML =
          result?.Descripcion?.institucion_nombre ||
          "No se encontró el nombre.";

        setNombre(
          tempNomDiv.textContent ||
            tempNomDiv.innerText ||
            "No se encontró el nombre."
        );
      } catch (error) {
        setNombre("No se encontró el nombre");
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  return (
    <>

      {/* Cabecera con imagen de fondo RESPONSIVA y FIJA */}
      <div
        className="relative flex items-center justify-center w-full min-h-screen text-3xl text-white bg-center"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/UPEA_2.jpg/1280px-UPEA_2.jpg')",
        }}
      >
        {/* Filtro oscuro para mejorar visibilidad */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Contenido de la cabecera */}
        <div className="relative z-10 p-6 px-6 mx-auto text-center">
          <h1 className="text-2xl font-bold text-white md:text-4xl">
            {loading ? "Cargando..." : DOMPurify.sanitize(nombre)}
          </h1>
        </div>
      </div>
    </>
  );
}

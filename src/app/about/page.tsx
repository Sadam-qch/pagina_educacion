"use client";

import { useEffect, useState } from "react";
import DOMPurify from 'dompurify';
import Campuses from "../components/Campuses";
import Platforms from "../components/Platforms";
import Authorities from "../components/Authorities";

// URL de la API centralizada
const API_URL = 'https://serviciopagina.upea.bo/api/InstitucionUPEA/12';

// Componente para mostrar secciones de información
const InfoSection = ({ title, content, loading }) => (
  <div className="mb-4 text-center">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-lg text-gray-700">
      {loading ? "Cargando..." : DOMPurify.sanitize(content)}
    </p>
  </div>
);

// Componente principal
export default function AboutPage() {
  // Estado único para todos los datos de la institución
  const [institutionData, setInstitutionData] = useState({
    mision: 'Cargando....',
    vision: 'Cargando....',
    objetivos: 'Cargando....',
    portada: 'Cargando....',
    ubicacion: 'Cargando....'
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('Respuesta de API:', result);

        // Extraer datos de la respuesta
        const data = result?.Descripcion || {};
        
        // Usar función auxiliar para extraer texto de HTML
        const extractTextFromHtml = (html, defaultMessage) => {
          if (!html) return defaultMessage;
          const div = document.createElement('div');
          div.innerHTML = html;
          return div.textContent || div.innerText || defaultMessage;
        };

        // Actualizar todos los datos en un solo setState
        setInstitutionData({
          vision: extractTextFromHtml(
            data.institucion_vision,
            'No se encontró información de Visión.'
          ),
          mision: extractTextFromHtml(
            data.institucion_mision,
            'No se encontró información de Misión.'
          ),
          objetivos: extractTextFromHtml(
            data.institucion_objetivos,
            'No se encontraron los objetivos.'
          ),
          portada: extractTextFromHtml(
            data.portada?.portada_imagen,
            'No se encontró información de Portada.'
          ),
          ubicacion: extractTextFromHtml(
            data.institucion_api_google_map,
            'No se encontró la ubicación de la Carrera.'
          )
        });
        
        setError(null);
      } catch (error) {
        console.error('Error al cargar datos:', error);
        setError('Hubo un problema al cargar la información. Por favor, intente nuevamente más tarde.');
        
        // Establecer mensajes de error en caso de fallo
        setInstitutionData({
          vision: 'No se encontró la visión de la carrera',
          mision: 'No se encontró la misión de la carrera',
          objetivos: 'No se encontraron los objetivos de la carrera',
          portada: 'No se encontró la Portada...',
          ubicacion: 'No se encontró la ubicación de la Carrera'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  // Secciones de información a mostrar
  const infoSections = [
    { title: "Visión", content: institutionData.vision },
    { title: "Misión", content: institutionData.mision },
    { title: "Objetivos", content: institutionData.objetivos }
  ];

  return (
    <main className="flex flex-col items-center">
      <section>
        {/* Mensaje de error si existe */}
        {error && (
          <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

        {/* Secciones de información */}
        <div>
          {infoSections.map((section, index) => (
            <InfoSection 
              key={index}
              title={section.title}
              content={section.content}
              loading={loading}
            />
          ))}
        </div>

        {/* Componentes adicionales */}
        <Platforms />
        <Authorities />
        <Campuses />

        {/* Sección del mapa */}
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-center">
            Ubicación de la Carrera de Ciencias de la Educación
          </h2>
          <div className="w-full max-w-6xl mx-auto">
            <div className="relative p-4 overflow-hidden rounded-lg shadow-xl">
              <iframe
                className="w-full h-[450px] border-0"
                src={institutionData.ubicacion}
                allowFullScreen
                loading="lazy"
                title="Ubicación UPEA"
              ></iframe>
              <a
                href="https://maps.app.goo.gl/GD9vASYcvmSDdgdAA"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-[#f56224] text-white px-4 py-2 rounded hover:bg-[#0A02B0] transition"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
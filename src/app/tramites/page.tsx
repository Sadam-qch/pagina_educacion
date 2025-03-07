"use client";
import { useState } from "react";

const tramites = [
  {
    id: 1,
    titulo: "MODELO DE CARTAS PARA BIBLIOTECAS",
    descripcion:
      "Completa el formulario de inscripción y adjunta los documentos requeridos para ser parte de nuestra universidad.",
    imagen: "https://img.freepik.com/foto-gratis/primer-plano-manos-pasando-contrato-al-empresario-irreconocible_1098-19612.jpg?semt=ais_hybrid", 
  },
  {
    id: 2,
    titulo: "MODELO DE CARTAS PARA KARDEX",
    descripcion:
      "Regístrate como estudiante nuevo proporcionando tus datos personales y académicos en nuestro sistema.",
    imagen: "https://www.opinion.com.bo/asset/thumbnail,992,558,center,center/media/opinion/images/2021/03/18/2021031817091234346.jpg", 
  },
  {
    id: 3,
    titulo: "MODELO DE CARTAS PARA EL TUS",
    descripcion:
      "Selecciona tus materias y genera tu matrícula de manera fácil y rápida a través de nuestra plataforma en línea.",
    imagen: "https://familiafeliz.gob.do/wp-content/uploads/2024/12/Exitosa-jornada-en-Hato-Mayor-1-768x521.jpg", 
  },
];

export default function Page() {
  const [tramiteActivo, setTramiteActivo] = useState(tramites[0]);

  return (
    <div className="">
      <h1 className="mb-1 text-3xl font-bold text-center">TRAMITES DE LA CARRERA DE EDUCACION</h1>
      <div className="flex items-center justify-center min-h-screen bg-cyan-800">
        <div className="flex w-auto overflow-hidden rounded-lg shadow-lg bg-slate-300 ">
          {/* Imagen */}
          <div className="w-full md:w-1/2">
            <img
              src={tramiteActivo.imagen}
              alt={tramiteActivo.titulo}
              className="object-cover w-full h-64 md:h-full"
            />
          </div>

          {/* Contenido */}
          <div className="flex-col justify-center w-full p-6 md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800">{tramiteActivo.titulo}</h2>
            <p className="mt-2 text-gray-600">{tramiteActivo.descripcion}</p>

            {/* Selector de trámite */}
            <div className="flex flex-wrap gap-2 mt-4">
              {tramites.map((tramite) => (
                <button
                  key={tramite.id}
                  onClick={() => setTramiteActivo(tramite)}
                  className={`px-4 py-2 text-sm font-semibold rounded ${
                    tramiteActivo.id === tramite.id ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700 border-y-2 border-x-2 hover:text-blue-700"
                  }`}
                >
                  {tramite.titulo}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

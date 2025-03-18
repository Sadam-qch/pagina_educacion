"use client";
import React from "react";
// Importamos funciones de la API
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaMapLocation,
  FaGoogle,
  FaEnvelope,
} from "react-icons/fa6";
import { useInstitutionData } from "@/hooks/useInstitutionData";

export default function Footer() {
  const { institutionData } = useInstitutionData();
  return (
    <footer className="p-6 text-white bg-slate-950">
      <section>
        <div>
          <div className="container p-6 px-6 mx-auto text-center">
            <div className="flex flex-col items-center justify-between w-full max-w-screen-xl mx-auto sm:flex-row">
              {/* Logos en círculo con títulos */}
              <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-y-0 sm:space-x-6">
                <div className="flex flex-col items-center">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/InstitucionUpea/${institutionData?.institucion_logo}`}
                    alt="Logo"
                    className="object-contain w-32 h-32"
                  />
                </div>
              </div>

              {/* Sección de Contacto y Redes Sociales */}
              <div className="mt-6 text-left sm:mt-0 sm:text-right">
                <h3 className="mb-2 text-lg font-semibold text-center">
                  CONTACTOS
                </h3>

                <div className="flex flex-wrap justify-between p-4">
                  <div className="w-full p-4 text-justify md:w-1/2">
                    <h2 className="flex items-center space-x-2">
                      <FaPhone />{" "}
                      <span>{institutionData?.institucion_celular1}</span>
                    </h2>
                    <h2 className="flex items-center space-x-2">
                      <FaPhone />{" "}
                      <span>{institutionData?.institucion_celular1}</span>
                    </h2>
                  </div>
                  <div className="w-full p-4 text-justify md:w-1/2">
                    <h2 className="flex items-center space-x-2">
                      <FaEnvelope />{" "}
                      <span>{institutionData?.institucion_correo1}</span>
                    </h2>
                    <h2 className="flex items-center space-x-2">
                      <FaGoogle />{" "}
                      <span>{institutionData?.institucion_correo2}</span>
                    </h2>
                    <h2 className="flex items-center space-x-2">
                      <FaMapLocation />{" "}
                      <span>{institutionData?.institucion_direccion}</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-left sm:mt-0 sm:text-right">
                <p className="font-bold text-center">
                  NUESTRAS REDES SOCIALES{" "}
                </p>
                <br />
                <div className="flex space-x-4 justify-self-center sm:justify-end">
                  <a
                    href={institutionData?.institucion_facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-white hover:text-amber-400"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href={institutionData?.institucion_twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-white hover:text-amber-400"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={institutionData?.institucion_youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-white hover:text-amber-400"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

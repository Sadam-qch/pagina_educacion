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
    <footer
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <img
              src="img/logo1.png"
              style={{ width: "auto", height: "195px" }}
              alt=""
            />
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Enlaces rápidos</h4>
            <a className="btn btn-link" href="acerca.html">
              Acerca De
            </a>
            <a className="btn btn-link" href="comunicados.html">
              Comunicados
            </a>
            <a className="btn btn-link" href="biblioteca.html">
              Biblioteca
            </a>
            <a className="btn btn-link" href="contact.html">
              Tramites
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Contactos</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>Zona Villa
              Esperanza, Av. Sucre, Edificio Dr. Freddy Medrano, Bloque A
            </p>

            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>
              somoseducacionupea@gmail.com
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Redes Sociales</h4>

            <div className="d-flex pt-2"></div>
            <div className="d-flex pt-2">
              <a
                className="btn btn-outline-light btn-social"
                href="http://www.youtube.com/@somos.educacionUPEA"
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </a>{" "}
              Youtube
            </div>
            <div className="d-flex pt-2">
              <a
                className="btn btn-outline-light btn-social"
                href="http://www.tiktok.com/@upea_somos_educacion"
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </a>{" "}
              Tiktok
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#"></a> Todos los
              derechos reservados. Diseñad por: Carmen.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import React from "react";
// Importamos funciones de la API
import { useState, useEffect } from "react";
import DOMPurify from 'dompurify';
import { FaFacebook, FaTwitter, FaYoutube, FaPhone, FaMapLocation, FaGoogle, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  const [loading, setLoading] = useState(true);
  const [celular1, setCelular1] = useState('Cargando....');
  const [celular2, setCelular2] = useState('Cargando....');
  const [telefono1, setTelefono1] = useState('Cargando....');
  const [telefono2, setTelefono2] = useState('Cargando....');
  const [correo1, setCorreo1] = useState('Cargando....');
  const [correo2, setCorreo2] = useState('Cargando....');
  const [facebook, setFacebook] = useState('Cargando....');
  const [youtube, setYouTube] = useState('Cargando....');
  const [twitter, setTwitter] = useState('Cargando....');
  const [direccion, setDireccion] = useState('Cargando....');
  const [logo, setLogo] = useState('Cargando...');

  useEffect(() =>{
    const fetchAbout = async () =>{
      try{
        const response = await fetch(
          'https://serviciopagina.upea.bo/api/InstitucionUPEA/12'
        );
        if(!response.ok)
          throw new Error('Error HTTP: ${respnse.status}');
        const result = await response.json();
        console.log('Respouesta de:', result);

        const tempFacebookDiv = document.createElement('div');
        const tempTwitterDiv = document.createElement('div');
        const tempYoutubeDiv = document.createElement('div');
        const tempCelular1Div = document.createElement('div');
        const tempCelular2Div = document.createElement('div');
        const tempTelefono1Div = document.createElement('div');
        const tempTelefono2Div = document.createElement('div');
        const tempCorreo1Div = document.createElement('div');
        const tempCorreo2Div = document.createElement('div');
        const tempDireccionDiv = document.createElement('div');
        const tempLogoDiv = document.createElement('div');

        tempFacebookDiv.innerHTML =
            result?.Descripcion?.institucion_facebook || 'No se encontro informacion.';
        setFacebook(
          tempFacebookDiv.textContent || tempFacebookDiv.innerText || 'No se encontro informacion.'
        );

        tempTwitterDiv.innerHTML =
            result?.Descripcion?.institucion_twitter || 'No se encontro informacion.';
        setTwitter(
          tempTwitterDiv.textContent || tempTwitterDiv.innerText || 'No se encontro informacion.'
        );

        tempYoutubeDiv.innerHTML =
            result?.Descripcion?.institucion_youtube || 'No se encontro informacion.';
        setYouTube(
          tempYoutubeDiv.textContent || tempYoutubeDiv.innerText || 'No se encontro informacion.'
        );

        tempCelular1Div.innerHTML =
            result?.Descripcion?.institucion_celular1 || 'No se encontro informacion.';
        setCelular1(
          tempCelular1Div.textContent || tempCelular1Div.innerText || 'No se encontro informacion.'
        );

        tempCelular2Div.innerHTML =
            result?.Descripcion?.institucion_celular2 || 'No se encontro informacion.';
        setCelular2(
          tempCelular2Div.textContent || tempCelular2Div.innerText || 'No se encontro informacion.'
        );

        tempTelefono1Div.innerHTML =
            result?.Descripcion?.institucion_telefono1 || 'No se encontro informacion.';
        setTelefono1(
          tempTelefono1Div.textContent || tempTelefono1Div.innerText || 'No se encontro informacion.'
        );

        tempTelefono2Div.innerHTML =
            result?.Descripcion?.institucion_telefono2 || 'No se encontro informacion.';
        setTelefono2(
          tempTelefono2Div.textContent || tempTelefono2Div.innerText || 'No se encontro informacion.'
        );

        tempCorreo1Div.innerHTML =
            result?.Descripcion?.institucion_correo1 || 'No se encontro informacion.';
        setCorreo1(
          tempCorreo1Div.textContent || tempCorreo1Div.innerText || 'No se encontro informacion.'
        );

        tempCorreo2Div.innerHTML =
            result?.Descripcion?.institucion_correo2 || 'No se encontro informacion.';
        setCorreo2(
          tempCorreo2Div.textContent || tempCorreo2Div.innerText || 'No se encontro informacion.'
        );

        tempDireccionDiv.innerHTML =
            result?.Descripcion?.institucion_direccion || 'No se encontro informacion.';
        setDireccion(
          tempDireccionDiv.textContent || tempDireccionDiv.innerText || 'No se encontro informacion.'
        );

        tempLogoDiv.innerHTML =
            result?.Descripcion?.institucion_logo || 'No se encontro informacion.';
        setLogo(
          tempLogoDiv.textContent || tempLogoDiv.innerText || 'No se encontro informacion.'
        );
      
      } catch (error){
        setFacebook('No se encontro el enlace..');
        setTwitter('No se encontro el enlace..');
        setYouTube('No se encontro el enlace..');
        setCelular1('No se encontro informacion..');
        setCelular2('No se encontro informacion..');
        setTelefono1('No se encontro informacion..');
        setTelefono2('No se encontro informacion..');
        setCorreo1('No se encontro informacion..');
        setCorreo2('No se encontro informacion..');
        setDireccion('No se encontro informacion..');
        setLogo('No encontramos el Logo...');
      } finally{
        setLoading(false);
      }
    };
    fetchAbout();

  }, []);
  return (
    <footer className="p-6 text-white bg-sky-950">
      <section>
        <div>
          {[
            {
              enlacefacebook: loading ? "Cargando..." : DOMPurify.sanitize(facebook),
              enlaceyoutube: loading ? "Cargando..." : DOMPurify.sanitize(youtube),
              enlacetwit: loading ? "Cargando..." : DOMPurify.sanitize(twitter),
              numerocelular1: loading ? "Cargando..." : DOMPurify.sanitize(celular1),
              numerocelular2: loading ? "Cargando..." : DOMPurify.sanitize(celular2),
              numtelefono1: loading ? "cargando..." : DOMPurify.sanitize(telefono1),
              numtelefono2: loading ? "cargando..." : DOMPurify.sanitize(telefono2),
              correo1: loading ? "cargando..." : DOMPurify.sanitize(correo1),
              correo2: loading ? "cargando..." : DOMPurify.sanitize(correo2),
              direccion: loading ? "cargando..." : DOMPurify.sanitize(direccion),
              logo: loading ? "Cargando...": DOMPurify.sanitize(logo),
            },
          ].map((item, index) => (
            <div key={index} className="container p-6 px-6 mx-auto text-center">
              <div className="flex flex-col items-center justify-between w-full max-w-screen-xl mx-auto sm:flex-row">
                
                {/* Logos en círculo con títulos */}
                <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-y-0 sm:space-x-6">
                  <div className="flex flex-col items-center">
                  <img
                    src={`https://serviciopagina.upea.bo/InstitucionUpea/${item.logo}`}
                    alt="Logo"
                    className="object-contain w-32 h-32"
                  />
                  </div>
                </div>

                {/* Sección de Contacto y Redes Sociales */}
                <div className="mt-6 text-left sm:mt-0 sm:text-right">
                  <h3 className="mb-2 text-lg font-semibold text-center">CONTACTOS</h3>
                 
                 
                 
                  <div className="flex flex-wrap justify-between p-4">
                    <div className="w-full p-4 text-justify md:w-1/2">
                      <h2 className="flex items-center space-x-2">
                        <FaPhone /> <span>{item.numerocelular1}</span>
                      </h2>
                      <h2 className="flex items-center space-x-2">
                        <FaPhone /> <span>{item.numerocelular2}</span>
                      </h2>
                      <h2 className="flex items-center space-x-2">
                        <FaPhone /> <span>{item.numtelefono1}</span>
                      </h2>
                      <h2 className="flex items-center space-x-2">
                        <FaPhone /> <span>{item.numtelefono2}</span>
                      </h2>
                    </div>
                    <div className="w-full p-4 text-justify md:w-1/2">
                      <h2 className="flex items-center space-x-2">
                        <FaEnvelope /> <span>{item.correo1}</span>
                      </h2>
                      <h2 className="flex items-center space-x-2">
                        <FaGoogle /> <span>{item.correo2}</span>
                      </h2>
                      <h2 className="flex items-center space-x-2">
                        <FaMapLocation /> <span>{item.direccion}</span>
                      </h2>
                    </div>
                  </div>






                  <p className="font-bold text-center">NUESTRAS REDES SOCIALES </p><br/>
                  <div className="flex space-x-4 justify-self-center sm:justify-end">
                    
                    <a 
                      href={item.enlacefacebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-2xl text-white hover:text-gray-300"
                    >
                      <FaFacebook />
                    </a>
                    <a 
                      href={item.enlacetwit} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-2xl text-white hover:text-gray-300"
                    >
                      <FaTwitter />
                    </a>
                    <a 
                      href={item.enlaceyoutube} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-2xl text-white hover:text-gray-300"
                    >
                      <FaYoutube />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </footer>
  );
}

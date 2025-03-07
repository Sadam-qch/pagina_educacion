"use client";
// Importamos funciones de la API
import { useState, useEffect } from "react";
import DOMPurify from 'dompurify';

export default function WelcomeInformation() {
  const [loading, setLoading] = useState(true);
  const [historia, setHistoria] = useState('Cargando....');

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

        const tempHisDiv = document.createElement('div');

        tempHisDiv.innerHTML =
            result?.Descripcion?.institucion_historia || 'No se encontro informacion de Vision.';
        setHistoria(
          tempHisDiv.textContent || tempHisDiv.innerText || 'No se encontro informacion de Vision.'
        );
      
      } catch (error){
        setHistoria('No se encontro la historia de la carrera');
      } finally{
        setLoading(false);
      }
    };
    fetchAbout();

  }, []);

  return(
    <main className="flex flex-col items-center">
      <section>
        <div>
          {[
            {
              title: "Historia",
              text: loading ? "Cargando..." : DOMPurify.sanitize(historia),
            },
          ].map((item, index) => (
            <div key={index} className="container p-6 px-6 mx-auto text-center ">
              <h1 className="p-6 font-serif text-5xl font-bold text-gray-900">{item.title}</h1>
              <p className="text-justify text-gray-700 text-1xl ">{item.text}</p>
            </div>
            
          ))}
        </div>
      </section>
    </main>
  );
}

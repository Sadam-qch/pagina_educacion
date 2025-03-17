"use client";
import { FaFilePdf } from "react-icons/fa";
import { useGazette } from "@/hooks/useGazette";
export default function Page() {
  const { modelo_biblio } = useGazette();
  const { modelo_kardex } = useGazette();
  const { modelo_tus } = useGazette();
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pt-20 bg-gray-200">
      {/* Título */}
      <h1 className="w-full py-4 text-3xl font-bold text-center bg-white rounded-lg shadow-md">
        TRAMITES 
      </h1>
      <h2 className="w-full py-4 text-3xl font-bold text-center ">
      Tramites en la Carrera de Educacion
      </h2>
      {/* primera parte */}
      <div className="flex flex-col items-center mt-6 md:flex-row md:items-start md:space-x-8 ">
        {/* Imagen a la izquierda */}
        <div className="p-4 bg-white rounded-lg shadow-md md:w-1/2 hover:scale-105">
          <img
            src="https://educacion.upea.edu.bo/img/BIBLIOTECA.a5ae045c.jpg"
            alt="Ejemplo"
            className="object-cover w-full rounded-lg cursor-pointer "
          />
        </div>
        {/* Contenedor de botones */}
        <div className="flex flex-col items-start mt-4 space-y-4 md:mt-0 md:w-1/2">
          <h2 className="text-xl font-semibold">MODELO DE CARTAS PARA BIBLIOTECA</h2>
          
          {modelo_biblio && modelo_biblio.map((data) => (
            <a
              key={data.gaceta_id}
              href={`${process.env.NEXT_PUBLIC_API_URL}/Gaceta/${data.gaceta_documento}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 px-5 py-1 text-lg font-semibold text-black bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-500"
            >
              <FaFilePdf className="text-2xl text-red-600 " size={64} />
              {data.gaceta_titulo}
            </a>
          ))}
        </div>
      </div>
      {/* segunda parte */}
      <div className="flex flex-col items-center mt-6 md:flex-row md:items-start md:space-x-8 ">
        {/* Imagen a la derecha */}
        <div className="p-4 bg-white rounded-lg shadow-md md:w-1/2 hover:scale-105">
          <img
            src="https://educacion.upea.edu.bo/img/KARDEX.137fe77f.jpg"
            alt="Ejemplo"
            className="object-cover w-full rounded-lg cursor-pointer "
          />
        </div>
        {/* Contenedor de botones */}
        <div className="flex flex-col items-start mt-4 space-y-4 md:mt-0 md:w-1/2">
          <h2 className="text-xl font-semibold ">MODELO DE CARTAS PARA KARDEX</h2>
          
          {modelo_kardex && modelo_kardex.map((data) => (
            <a
              key={data.gaceta_id}
              href={`${process.env.NEXT_PUBLIC_API_URL}/Gaceta/${data.gaceta_documento}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 px-5 py-1 text-lg font-semibold text-black bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-500"
            >
              <FaFilePdf className="text-2xl text-red-600 " size={64} />
              {data.gaceta_titulo}
            </a>
          ))}
        </div>
      </div>
      {/* tercera parte */}
      <div className="flex flex-col items-center mt-6 md:flex-row md:items-start md:space-x-8 ">
        {/* Imagen a la izquierda */}
        <div className="p-4 bg-white rounded-lg shadow-md md:w-1/2 hover:scale-105">
          <img
            src="https://educacion.upea.edu.bo/img/TUS.c32021a8.jpg"
            alt="Ejemplo"
            className="object-cover w-full rounded-lg cursor-pointer "
          />
        </div>
        {/* Contenedor de botones */}
        <div className="flex flex-col items-start mt-4 space-y-4 md:mt-0 md:w-1/2">
          <h2 className="text-xl font-semibold ">MODELO DE CARTAS PARA TUS</h2>
          
          {modelo_tus && modelo_tus.map((data) => (
            <a
              key={data.gaceta_id}
              href={`${process.env.NEXT_PUBLIC_API_URL}/Gaceta/${data.gaceta_documento}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 px-5 py-1 text-lg font-semibold text-black bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-500"
            >
              <FaFilePdf className="text-2xl text-red-600 " size={64} />
              {data.gaceta_titulo}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


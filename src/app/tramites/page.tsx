"use client";
import { FaFilePdf } from "react-icons/fa";
import { useGazette } from "@/hooks/useGazette";
export default function Page() {
  const { modelo_biblio } = useGazette();
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pt-24 bg-gray-200">
      {/* Título */}
      <h1 className="w-full py-4 text-3xl font-bold text-center bg-white rounded-lg shadow-md">
        TRAMITES 
      </h1>
    {/* primera parte */}
      <h2 className="w-full py-4 text-3xl font-bold text-center ">
      Tramites en la Carrera de Educacion
      </h2>
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
        <div className="flex flex-col items-center mt-4 space-y-4 md:mt-0 md:w-1/3">
          <h2 className="text-xl font-semibold ">MODELO DE CARTAS PARA BIBLIOTECA</h2>
          
          {modelo_biblio && modelo_biblio.map((data) => (
            <a
              key={data.gaceta_tipo}
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
        {/* Contenedor de botones */}
        <div className="flex flex-col items-center mt-4 space-y-4 md:mt-0 md:w-1/3">
          <h2 className="text-xl font-semibold ">MODELO DE CARTAS PARA KARDEX</h2>
          
          {[1, 2, 3].map((item) => (
            <a
              key={item}
              href="https://serviciopagina.upea.bo/Gaceta/e249d024-9e08-4ac2-b91c-05ea4d88a757.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 px-5 py-1 text-lg font-semibold text-black bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-500"
            >
              <FaFilePdf className="text-2xl text-red-600 " size={64} />
              SOLICITUD DE CERTIFICADO
            </a>
          ))}
        </div>
        {/* Imagen a la derecha */}
        <div className="p-4 bg-white rounded-lg shadow-md md:w-1/2 hover:scale-105">
          <img
            src="https://educacion.upea.edu.bo/img/KARDEX.137fe77f.jpg"
            alt="Ejemplo"
            className="object-cover w-full rounded-lg cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
}


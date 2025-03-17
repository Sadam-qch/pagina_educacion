"use client";

import { useVideos } from "@/hooks/useVideos";
import { stripHtml } from "@/util/formatText";

export default function Congress(){
    const {noticia} = useVideos();
    return(
   <section className="py-12 ">
    {noticia && noticia.map((data) =>(
        <div key={data.video_id} className="container flex flex-col items-center gap-8 px-4 mx-auto md:flex-row">
            {/* Bloque 1: Reproductor de YouTube */}
            
            <div  className="w-full md:w-1/2">
            <div className="relative pt-10 aspect-w-16 aspect-h-9">
                <iframe
                className="w-full rounded-lg shadow-lg h-96"
                src={data.video_enlace} 
                title="Video Educativo"
                frameBorder="1"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>
            </div>
            
            {/* Bloque 2: Texto descriptivo */}
            <div className="w-full md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-center text-secondary">
                {data.video_titulo}
            </h2>
            <p className="text-lg text-justify text-gray-700">
                {stripHtml(data.video_breve_descripcion)}
            </p>
            </div>
        </div>
    ))}
    </section>
    );
}
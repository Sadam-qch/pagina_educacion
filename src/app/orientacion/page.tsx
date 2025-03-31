"use client";

import Banner from "@/components/Banner";
import { useVideos } from "@/hooks/useVideos";
import { stripHtml } from "@/util/formatText";

export default function Page() {
    const { orientacionVoc } = useVideos();
    const { actividades } = useVideos();
    return (
        <>
            <Banner title="Orientación Vocacional" />
            <main>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center text-primary px-3">Orientacion vocacional</h6>
                            <h1 className="mb-5">Programa de Orientacion Pedagogica para la vocacion productiva tecnologica</h1>
                        </div>
                        {orientacionVoc &&
                            orientacionVoc.map((data, index) => (
                                <div key={data.video_id} className="container-xxl py-5">
                                    <div className="container">
                                        <div className="row g-5 align-items-center">
                                            {index % 2 === 0 ? (
                                                <>
                                                    {/* Video a la izquierda, texto a la derecha */}
                                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                                        <div className="ratio ratio-16x9">
                                                            <iframe
                                                                src={data.video_enlace}
                                                                title="YouTube video"
                                                                allowFullScreen
                                                            ></iframe>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                                        <h6 className="section-title bg-white text-start text-primary pe-3">
                                                            Orientación vocacional
                                                        </h6>
                                                        <h1 className="mb-4">{data.video_titulo}</h1>
                                                        <p className="mb-4 text-justify">{stripHtml(data.video_breve_descripcion)}</p>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    {/* Texto a la izquierda, video a la derecha */}
                                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                                        <h6 className="section-title bg-white text-start text-primary pe-3">
                                                            Orientación vocacional
                                                        </h6>
                                                        <h1 className="mb-4">{data.video_titulo}</h1>
                                                        <p className="mb-4 text-justify">{stripHtml(data.video_breve_descripcion)}</p>
                                                    </div>
                                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                                        <div className="ratio ratio-16x9">
                                                            <iframe
                                                                src={data.video_enlace}
                                                                title="YouTube video"
                                                                allowFullScreen
                                                            ></iframe>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center text-primary px-3">Actividades</h6>
                            <h1 className="mb-5">Todo sobre la orientación vocacional </h1>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">

                            {/* Tarjeta 1 */}
                            <div className="w-80 bg-light shadow-lg rounded-lg transform transition-all hover:scale-105">
                                <div className="relative overflow-hidden">
                                    <img
                                        className="w-full h-48 object-cover"
                                        src="https://serviciopagina.upea.bo/InstitucionUpea/LinksExternos/b3e6a6da-5dc4-4d28-a641-1d836a6b605f.jpg"
                                        alt="Formulario de inscripción"
                                    />
                                    <div className="absolute bottom-0 w-full flex justify-center mb-4">
                                        <a href="https://forms.gle/2iwt3WKxRexhEkk7A"
                                            className="btn btn-sm btn-primary px-4 rounded-full">
                                            Leer más
                                        </a>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h5 className="text-center font-bold">Formulario de inscripción</h5>
                                </div>
                            </div>

                            {/* Tarjeta 2 - Más adelante */}
                            <div className="w-80 bg-light shadow-lg rounded-lg transform transition-all hover:scale-105">
                                <div className="relative overflow-hidden">
                                    <img
                                        className="w-full h-48 object-cover"
                                        src="https://serviciopagina.upea.bo/InstitucionUpea/LinksExternos/1414adf3-9f29-4a78-8034-1aa0f8bdb525.png"
                                        alt="Curso online"
                                    />
                                    <div className="absolute bottom-0 w-full flex justify-center mb-4">
                                        <a href="https://gisberth3498801.milaulas.com"
                                            className="btn btn-sm btn-primary px-4 rounded-full">
                                            Leer más
                                        </a>
                                    </div>
                                </div>
                                <div className="p-4 text-center">
                                    <h5 className="font-bold">Curso online</h5>
                                </div>
                            </div>

                            {/* Tarjeta 3 */}
                            <div className="w-80 bg-light shadow-lg rounded-lg transform transition-all hover:scale-105">
                                <div className="relative overflow-hidden">
                                    <img
                                        className="w-full h-48 object-cover"
                                        src="https://educacion.upea.edu.bo/img/tallerpre.1290730b.png"
                                        alt="Taller presencial"
                                    />
                                    <div className="absolute bottom-0 w-full flex justify-center mb-4">
                                        <a href="#" className="btn btn-sm btn-primary px-4 rounded-full">
                                            Leer más
                                        </a>
                                    </div>
                                </div>
                                <div className="p-4 text-center">
                                    <h5 className="font-bold">Taller presencial</h5>
                                </div>
                            </div>
                        </div>

                        <div className=" pt-12 container text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center text-primary px-3">Actividades</h6>
                            <h1 className="mb-5">Todo sobre la orientación vocacional</h1>

                            {/* Contenedor de videos */}
                            <div className="flex flex-wrap justify-center gap-6">
                                {actividades &&
                                    actividades.map((data) => (
                                        <div key={data.video_id} className="w-full sm:w-80 bg-light shadow-lg rounded-lg transform transition-all hover:scale-105">
                                            <div className="relative overflow-hidden">
                                                <div className="w-full h-48">
                                                    <iframe
                                                        className="w-full h-full"
                                                        src={data.video_enlace}
                                                        title={data.video_titulo}
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h5 className="text-center font-bold">{data.video_titulo}</h5>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}

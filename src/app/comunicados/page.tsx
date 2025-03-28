"use client";

import { usePublication } from "@/hooks/usePublications";

export default function Page() {
    const { convenios } = usePublication();
    return (
        <>
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Comunicados</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="container">
                    {/* Card 1 */}
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Comunicados</h6>
                        <h1 className="mb-5">Convenios institucionales</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp bg-light" data-wow-delay="0.1s">
                            <div className="course-item ">
                                <div className="position-relative overflow-hidden">
                                    <a href="https://serviciopagina.upea.bo/Convocatorias/b8e96b92-587e-44b5-ba76-1584a752e5af.png"
                                    target="_blank">
                                    <img className="img-fluid" 
                                    src="https://serviciopagina.upea.bo/Convocatorias/b8e96b92-587e-44b5-ba76-1584a752e5af.png"
                                     alt="Imagen" 
                                     />
                                     </a>
                                </div>
                                <div className="text-center p-4 pb-0">
                                    <h5 className="mb-4">Cs. de la Educación (UPEA) y la Dirección Departamental de Educación de La Paz firman convenio</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Cards para comunicados Convenios por modalidad de graduación */}
                    {/* Cards*/}
                    <h1 className="mb-5 text-center">Convenios para Modalidades de Graduación</h1>
                    <div className="row g-2 justify-content-center">
                    {convenios &&
                        convenios.map((data) => (
                        <div key={data.publicaciones_id} className="col-lg-4 col-md-6 wow fadeInUp bg-light" data-wow-delay="0.1s">
                            <div className="course-item ">
                            <div className="position-relative overflow-hidden">
                                <a href={`${process.env.NEXT_PUBLIC_API_URL}/Publicaciones/${data.publicaciones_imagen}`}>
                                <img
                                    className="img-fluid"
                                    src={`${process.env.NEXT_PUBLIC_API_URL}/Publicaciones/${data.publicaciones_imagen}`}
                                    alt=""
                                />
                                </a>
                            </div>
                            <div className="text-center p-4 pb-0">
                                <h5 className="mb-4">{data.publicaciones_titulo}</h5>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
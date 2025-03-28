"use client";
import { useInstitutionData } from "@/hooks/useInstitutionData";
import { usePublication } from "@/hooks/usePublications";
import { stripHtml } from "@/util/formatText";

export default function Page() {
    const { preEspecialidad } = usePublication();
    const { institutionData } = useInstitutionData();
    return (
        <>
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Acerca de la Carrera</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt="" style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="section-title bg-white text-start text-primary pe-3">Acerca de la Carrera</h6>
                            <h1 className="mb-4">Misión</h1>
                            <p className="mb-4 text-justify">{stripHtml(institutionData?.institucion_mision)}</p>
                            <h1 className="mb-4">Visión</h1>
                            <p className="mb-4 text-justify">{stripHtml(institutionData?.institucion_vision)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Nuestras</h6>
                        <h1 className="mb-5">Pre-especialidades</h1>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {preEspecialidad &&
                            preEspecialidad.map((data) => (
                                <div key={data.publicaciones_id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div key={data.publicaciones_id} className="course-item bg-light">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid"
                                                src={`${process.env.NEXT_PUBLIC_API_URL}/Publicaciones/${data.publicaciones_imagen}`}
                                                alt=""
                                            />

                                        </div>
                                        <div className="text-center p-4 pb-0">
                                            <h5 className="mb-4">{stripHtml(data.publicaciones_descripcion)}</h5>
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
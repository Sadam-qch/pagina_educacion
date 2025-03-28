"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { institutionData } from "@/mocks/institucion";
import { usePublication } from "@/hooks/usePublications";
import { useVideos } from "@/hooks/useVideos";
import React from "react";

const imgURL = `${process.env.NEXT_PUBLIC_API_URL}/InstitucionUpea/Portada`;

export default function Page() {
  // const { institutionData } = useInstitutionData();
  const { sedes } = usePublication();
  const { actividades, noticia } = useVideos();

  return (
    <>
      {/* <!-- Carousel Start --> */}
      <section className="container-fluid p-0 mb-5">
        <div className="owl-carousel header-carousel position-relative">
          {institutionData?.portada.map((data, _i) => (
            <div
              key={`portada-${_i}`}
              className="owl-carousel-item position-relative"
            >
              <img
                className="img-fluid"
                src={`${imgURL}/${data.portada_imagen}`}
                alt=""
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(24, 29, 56, .1)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-sm-10 col-lg-6">
                      <h5
                        className="text-primary text-uppercase mb-3 animated slideInDown"
                        style={{ color: "#FFFFFF !important" }}
                      >
                        {data.portada_subtitulo}
                      </h5>
                      <h1
                        className="display-3 text-white animated slideInDown"
                        style={{ fontSize: "42px" }}
                      >
                        {data.portada_titulo}
                      </h1>
                      <p className="fs-5 text-white mb-4 pb-2">
                        {" "}
                        Carrera acreditada...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <!-- Carousel End --> */}

      <main>
        {/* <!-- Bienvenido Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ minHeight: "400px" }}
              >
                <div className="position-relative h-100">
                  <img
                    className="img-fluid position-absolute w-100 h-100"
                    src="img/about.jpg"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                  Bienvenido
                </h6>
                <h1 className="mb-4">
                  Bienvenido a la Carrera de Ciencias de la Educación
                </h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: institutionData.institucion_objetivos,
                  }}
                />

                <div className="row gy-2 gx-4 mb-4">
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Investigador
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Planificador y evaluador
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Orientador
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Asesor
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Proyectista
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Administrador
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- bienvenido End --> */}

        {/* <!-- noticias Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={noticia?.[0].video_enlace}
                    title="YouTube video"
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                  Noticias
                </h6>
                <h1 className="mb-4">{noticia?.[0]?.video_titulo}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: noticia?.[0]?.video_breve_descripcion,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- noticias End --> */}

        {/* <!-- actividades Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                  Actividades
                </h6>
                <h1 className="mb-4">{actividades?.[0].video_titulo || ""}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: actividades?.[0]?.video_breve_descripcion,
                  }}
                />
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={actividades?.[0]?.video_enlace}
                    title="YouTube video"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- actividades End --> */}

        {/* <!-- Sedes  --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Sedes
              </h6>
              <h1 className="mb-5">Sedes Académicas</h1>
            </div>

            <div className="row row-cols-3 g-4 justify-content-center">
              {sedes?.map((data, _i) => (
                <div
                  key={`sede-${_i}`}
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="course-item bg-light">
                    <div className="position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src={`${process.env.NEXT_PUBLIC_API_URL}/Publicaciones/${data.publicaciones_imagen}`}
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"></div>
                    </div>
                    <div className="text-center p-4 pb-0">
                      <h5 className="mb-4">{data.publicaciones_titulo}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <!-- autoridades --> */}
            <div className="container-xxl py-5">
              <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                  <h6 className="section-title bg-white text-center text-primary px-3">
                    Autoridades
                  </h6>
                  <h1 className="mb-5">Nuestras Autoridades</h1>
                </div>
                <div className="row g-4">
                  {institutionData?.autoridad.map((data, _i) => (
                    <div
                      key={`autoridad-${_i}`}
                      className="col-lg-4 col-md-6 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="team-item bg-light">
                        <div className="overflow-hidden">
                          <img
                            className="img-fluid"
                            src={data.foto_autoridad}
                            alt=""
                          />
                        </div>

                        <div className="text-center p-4">
                          <h5 className="mb-0">{data.nombre_autoridad}</h5>
                          <small>{data.cargo_autoridad}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

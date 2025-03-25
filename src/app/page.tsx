"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Announcements from "../components/Announcements";
import Header from "@/components/Header";
import { useInstitutionData } from "@/hooks/useInstitutionData";
import Congress from "@/components/Congress";
import { institutionData } from "@/mocks/institucion";

export default function Page() {
  // const { institutionData } = useInstitutionData();
  return (
    <>
      {/* <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a
          href="index.html"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <img src="img/logo2.png" style={{ width: "auto", height: "75px" }} />
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="index.html" className="nav-item nav-link active">
              Inicio
            </a>
            <a href="acerca.html" className="nav-item nav-link">
              Acerca de
            </a>
            <a href="comunicados.html" className="nav-item nav-link">
              Comunicados
            </a>
            <a href="biblioteca.html" className="nav-item nav-link">
              Biblioteca
            </a>
            <a href="contact.html" className="nav-item nav-link">
              Tramites
            </a>
            <a href="cursos-actualizacion.html" className="nav-item nav-link">
              Cursos de Actualizacion
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Unidad Psicopedagogica
              </a>
              <div className="dropdown-menu fade-down m-0">
                <a href="team.html" className="dropdown-item">
                  Orientacion vocacional
                </a>
                <a href="team2.html" className="dropdown-item">
                  Apoyo Educativo
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}

      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0 mb-5">
        <div className="owl-carousel header-carousel position-relative">
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="img/portada1.jpg" alt="" />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(24, 29, 56, .1)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-sm-10 col-lg-8">
                    <h5
                      className="text-primary text-uppercase mb-3 animated slideInDown"
                      style={{ color: "#FFFFFF !important" }}
                    >
                      Rumbo a la excelencia academica
                    </h5>
                    <h1
                      className="display-3 text-white animated slideInDown"
                      style={{ fontSize: "42px" }}
                    >
                      Carrera Ciencias <br />
                      de la Educación
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
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="img/portada2.jpg" alt="" />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(24, 29, 56, .1)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-sm-10 col-lg-8">
                    <h5
                      className="text-primary text-uppercase mb-3 animated slideInDown"
                      style={{ color: "#FFFFFF !important" }}
                    >
                      Rumbo a la excelencia academica
                    </h5>
                    <h1
                      className="display-3 text-white animated slideInDown"
                      style={{ fontSize: "42px" }}
                    >
                      Carrera Ciencias <br />
                      de la Educación
                    </h1>
                    <p className="fs-5 text-white mb-4 pb-2">
                      {" "}
                      Carrera acreditada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="img/portada3.jpg" alt="" />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(24, 29, 56, .1)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-sm-10 col-lg-8">
                    <h5
                      className="text-primary text-uppercase mb-3 animated slideInDown"
                      style={{ color: "#FFFFFF !important" }}
                    >
                      Rumbo a la excelencia academica
                    </h5>
                    <h1
                      className="display-3 text-white animated slideInDown"
                      style={{ fontSize: "42px" }}
                    >
                      Carrera Ciencias <br />
                      de la Educación
                    </h1>
                    <p className="fs-5 text-white mb-4 pb-2">
                      {" "}
                      Carrera acreditada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      {/* <!-- Service Start --> */}
      <div className="container-xxl py-5" style={{ display: "none" }}>
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                  <h5 className="mb-3">Skilled Instructors</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                  <h5 className="mb-3">Online classNamees</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-home text-primary mb-4"></i>
                  <h5 className="mb-3">Home Projects</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                  <h5 className="mb-3">Book Library</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      {/* <!-- About Start --> */}
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
              <p className="mb-4">
                Nuestro objetivo en la Carrera de Ciencias de la Educación es
                formar profesionales altamente capacitados y comprometidos con
                el desarrollo educativo de Bolivia y la región.
              </p>
              <p className="mb-4">
                Fomentamos la investigación en el campo de la educación y
                promovemos la formación continua de nuestros egresados. También
                mantenemos una estrecha colaboración con organizaciones e
                instituciones nacionales e internacionales para garantizar que
                nuestros programas estén actualizados y sean relevantes para las
                necesidades actuales de la sociedad. El egresado de esta carrera
                sera competente para ser:{" "}
              </p>
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
      {/* <!-- About End --> */}

      {/* <!-- Video1 Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/NjOolS6jmPo"
                  title="YouTube video"
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                Noticias
              </h6>
              <h1 className="mb-4">
                II Congreso Internacional de Ciencias de la Educación
              </h1>
              <p className="mb-4">
                Evento organizado por la Carrera de Ciencias de la Educación de
                la Universidad Publica de El Alto, cuyo objetivo fue el de
                proporcionar espacios de intercambio y reflexión en el campo
                educativo.
              </p>
              <p className="mb-4">
                Encuentro académico, que contó con conferencistas de Cuba,
                México, Perú, ecuador Colombia y Bolivia. Desarrollado en fecha
                14 de octubre de 2023.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video1 End --> */}

      {/* <!-- Video2 Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                Actividades
              </h6>
              <h1 className="mb-4">Conoce nuestras actividades</h1>
              <p className="mb-4">
                Actividades realizadas en la Gestión 2023 por el MSc. Deivid
                Pacosillo Mamani, Director de la Carrera de Ciencias de la
                Educación.
              </p>
              <p className="mb-4">
                Entre los más resaltante se tiene la realización de Congresos
                Internacionales, Seminarios y Cursos de actualización,
                adquisición de equipos, actividades intercedes, ampliación de la
                Biblioteca.
              </p>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/cKi8fiYApiE"
                  title="YouTube video"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video2 End --> */}

      {/* <!-- Courses Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Sedes
            </h6>
            <h1 className="mb-5">Sedes Académicas</h1>
          </div>
          {/* <!--FILA 1--> */}
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src="img/course-5.jpg" alt="" />
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"></div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h5 className="mb-4">Sede Academica Batallas</h5>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src="img/course-2.jpg" alt="" />
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"></div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h5 className="mb-4">Sede Academica de Guaqui</h5>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src="img/course-3.jpg" alt="" />
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"></div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h5 className="mb-4">Sede academica de Chaguaya</h5>
                </div>
              </div>
            </div>
          </div>
          {/* <!--FILA 2--> */}
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src="img/course-1.jpg" alt="" />
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"></div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h5 className="mb-4">Sede Academica Viacha</h5>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src="img/course-4.jpg" alt="" />
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"></div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h5 className="mb-4">Sede Academica de Achacachi</h5>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src="img/caranavi.jpg" alt="" />
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"></div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h5 className="mb-4">Sede academica de Caranavi</h5>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Team Start --> */}
          <div className="container-xxl py-5">
            <div className="container">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">
                  Autoridades
                </h6>
                <h1 className="mb-5">Nuestras Autoridades</h1>
              </div>
              <div className="row g-4">
                {institutionData.autoridad.map((data, _i) => (
                  <div
                    key={`autoridad-${_i}`}
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="team-item bg-light">
                      <div className="overflow-hidden">
                        <img className="img-fluid" src={data.foto_autoridad} alt="" />
                      </div>

                      <div className="text-center p-4">
                        <h5 className="mb-0">
                          {data.nombre_autoridad}
                        </h5>
                        <small>{data.cargo_autoridad}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <!-- Team End --> */}

          {/* <!-- Testimonial Start --> */}
          <div
            className="container-xxl py-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ display: "none" }}
          >
            <div className="container">
              <div className="text-center">
                <h6 className="section-title bg-white text-center text-primary px-3">
                  Testimonial
                </h6>
                <h1 className="mb-5">Our Students Say!</h1>
              </div>
              <div className="owl-carousel testimonial-carousel position-relative">
                <div className="testimonial-item text-center">
                  <img
                    className="border rounded-circle p-2 mx-auto mb-3"
                    src="img/testimonial-1.jpg"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h5 className="mb-0">Client Name</h5>
                  <p>Profession</p>
                  <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit diam amet diam et eos. Clita erat ipsum et lorem et
                      sit.
                    </p>
                  </div>
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="border rounded-circle p-2 mx-auto mb-3"
                    src="img/testimonial-2.jpg"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h5 className="mb-0">Client Name</h5>
                  <p>Profession</p>
                  <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit diam amet diam et eos. Clita erat ipsum et lorem et
                      sit.
                    </p>
                  </div>
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="border rounded-circle p-2 mx-auto mb-3"
                    src="img/testimonial-3.jpg"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h5 className="mb-0">Client Name</h5>
                  <p>Profession</p>
                  <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit diam amet diam et eos. Clita erat ipsum et lorem et
                      sit.
                    </p>
                  </div>
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="border rounded-circle p-2 mx-auto mb-3"
                    src="img/testimonial-4.jpg"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h5 className="mb-0">Client Name</h5>
                  <p>Profession</p>
                  <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit diam amet diam et eos. Clita erat ipsum et lorem et
                      sit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Testimonial End --> */}
        </div>
      </div>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <img
                src="img/logo1.png"
                style={{ width: "auto", height: "195px" }}
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
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
}

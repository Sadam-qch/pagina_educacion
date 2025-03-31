export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a
                href="index.html"
                className="navbar-brand d-flex align-items-center px-4 px-lg-5"
            >
                <img src="./img/logo2.png" alt="" style={{ width: "auto", height: "75px" }} />
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
    )
}
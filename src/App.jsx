{
  /* Sección de proyectos */
}
<div className="projects-section">
  <h2 className="projects-title">Mis proyectos</h2>
  <div className="projects-underline"></div>
</div>;
// import { useState } from 'react'
import { useRef, useState } from "react";
import "./App.css";

function App() {
  // Referencias para las secciones
  const inicioRef = useRef(null);
  const sobreMiRef = useRef(null);
  const proyectosRef = useRef(null);
  const contactoRef = useRef(null);

  // Estado para menú móvil
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para hacer scroll suave a la sección y cerrar menú móvil
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-title">Mario Guevara</div>
        {!menuOpen && (
          <button
            className="hamburger-btn"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        )}
        <div className={`navbar-links${menuOpen ? " open" : ""}`}>
          <button
            className="nav-btn"
            onClick={() => scrollToSection(inicioRef)}
          >
            Inicio
          </button>
          <button
            className="nav-btn"
            onClick={() => scrollToSection(sobreMiRef)}
          >
            Sobre mí
          </button>
          <button
            className="nav-btn"
            onClick={() => scrollToSection(proyectosRef)}
          >
            Proyectos
          </button>
          <button
            className="nav-btn"
            onClick={() => scrollToSection(contactoRef)}
          >
            Contacto
          </button>
        </div>
        {/* Fondo oscuro para cerrar menú al hacer clic fuera */}
        {menuOpen && (
          <div
            className="mobile-menu-backdrop"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </nav>
      {/* Aquí puedes agregar el contenido principal de la página */}
      <main className="main-content" ref={inicioRef}>
        <h1 className="hero-title">
          Desarrollador full-stack, web y aplicaciones
        </h1>
        <p className="hero-subtitle">
          Especialmente interesado en los distintos métodos de desarrollo.
        </p>
        <div className="hero-buttons">
          <a className="hero-btn" href="/CV - Mario Guevara.pdf" download>
            Descargar currículum
          </a>
          <button
            className="hero-btn"
            onClick={() => scrollToSection(contactoRef)}
          >
            Contáctame
          </button>
          <a
            className="hero-btn github-btn"
            href="https://github.com/mguevara0505"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ verticalAlign: "middle", marginRight: "8px" }}
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.397.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.175 22 16.427 22 12.012 22 6.484 17.523 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>
        <div className="section-title" ref={sobreMiRef}>
          <h2 className="section-main-title">Sobre mí</h2>
          <div className="section-underline"></div>
        </div>
        <div className="about-cards">
          <div className="about-card">
            <h3 className="about-card-title">
              <span className="about-card-icon">
                {/* Person icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2471a3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ verticalAlign: "middle", marginRight: "8px" }}
                >
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21c.5-4 12.5-4 13 0" />
                </svg>
              </span>
              ¿Quién soy?
            </h3>
            <p className="about-card-text">
              Me llamo Mario, y soy un desarrollador full-stack apasionado por
              los distintos métodos de desarrollo en programación. Me centro en
              el desarrollo progresivo de proyectos web y aplicaciones móviles o
              interfaces de escritorio.
            </p>
          </div>
          <div className="about-card">
            <h3 className="about-card-title">
              <span className="about-card-icon">
                {/* Check icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2471a3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ verticalAlign: "middle", marginRight: "8px" }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Mi meta
            </h3>
            <p className="about-card-text">
              Mi meta es poder desarrollar aplicaciones y sistemas que cumplan
              con las necesidades y requerimientos del planteamiento de cada
              uno, y con soluciones viables y organizadas, y dar resultados
              esperados y deseados a estos mismos planteamientos.
            </p>
          </div>
          <div className="about-card">
            <h3 className="about-card-title">
              <span className="about-card-icon">
                {/* Bulb icon (classic) */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2471a3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ verticalAlign: "middle", marginRight: "8px" }}
                >
                  <circle cx="12" cy="10" r="6" />
                  <rect x="9" y="16" width="6" height="2" rx="1" />
                  <rect x="10" y="19" width="4" height="2" rx="1" />
                  <line x1="12" y1="14" x2="12" y2="16" />
                </svg>
              </span>
              Mi perfil
            </h3>
            <p className="about-card-text">
              Desarrollador full-stack y de aplicaciones, con conocimiento de
              manejo de bases de datos no relacionales.
            </p>
          </div>
        </div>
        {/* Sección de habilidades */}
        <div className="skills-section">
          <h2 className="skills-title">Mis habilidades</h2>
          <div className="skills-underline"></div>
          <div className="skills-grid">
            <div className="skill-card">
              <img
                src="/images/python-icon.png"
                alt="Python"
                className="skill-img"
              />
              <div className="skill-label">Python</div>
            </div>
            <div className="skill-card">
              <img
                src="/images/java-icon.png"
                alt="Java"
                className="skill-img"
              />
              <div className="skill-label">Java</div>
            </div>
            <div className="skill-card">
              <img
                src="/images/javascript-logo.png"
                alt="Javascript"
                className="skill-img"
              />
              <div className="skill-label">Javascript</div>
            </div>
            <div className="skill-card">
              <img
                src="/images/typescript-logo.png"
                alt="Typescript"
                className="skill-img"
              />
              <div className="skill-label">Typescript</div>
            </div>
            <div className="skill-card">
              <img
                src="/images/react-logo.png"
                alt="React"
                className="skill-img"
              />
              <div className="skill-label">React</div>
            </div>
            <div className="skill-card">
              <img
                src="/images/react-native-logo.png"
                alt="React Native"
                className="skill-img"
              />
              <div className="skill-label">React Native</div>
            </div>
            <div className="skill-card">
              <img
                src="/images/mongodb-logo.png"
                alt="MongoDB"
                className="skill-img"
              />
              <div className="skill-label">MongoDB</div>
            </div>
            <div className="skill-card">
              <img
                src="/images/graphql-logo.png"
                alt="GraphQL"
                className="skill-img"
              />
              <div className="skill-label">GraphQL</div>
            </div>
          </div>
        </div>
        {/* Sección de proyectos */}
        <div className="projects-section" ref={proyectosRef}>
          <h2 className="projects-title">Mis proyectos</h2>
          <div className="projects-underline"></div>
          <div className="projects-grid">
            <div className="project-card">
              <img
                src="/images/veterinaria-captura.png"
                alt="PetCare"
                className="project-img"
              />
              <div className="project-label">PetCare</div>
              <div className="project-description">
                Software generalizado para la gestión y administración de
                clínicas veterinarias. Gestiona información como consultas,
                citas médicas, historiales médicos y vacunas.
              </div>
              <div className="project-tech-list">
                <div className="project-tech">React</div>
                <div className="project-tech">TypeScript</div>
                <div className="project-tech">PostgreSQL</div>
                <div className="project-tech">API Rest</div>
                <div className="project-tech">Tailwind CSS</div>
              </div>
              <a
                className="repo-btn"
                href="https://github.com/FranJMD0508/Software-generalizado-Clinica-Veterinaria"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver repositorio
              </a>
            </div>
            <div className="project-card">
              <img
                src="/images/taller-captura.jpg"
                alt="BL Tyre Shop"
                className="project-img"
              />
              <div className="project-label">BL Tyre Shop</div>
              <div className="project-description">
                Software generalizado para la gestión y administración de un
                taller automovilístico. Gestiona información como agendación de
                citas para mantenimiento de vehículos y visualización de
                productos en stock.
              </div>
              <div className="project-tech-list">
                <div className="project-tech">React</div>
                <div className="project-tech">TypeScript</div>
                <div className="project-tech">MongoDB</div>
                <div className="project-tech">GraphQL</div>
                <div className="project-tech">Bootstrap</div>
              </div>
              <a
                className="repo-btn"
                href="https://github.com/jgobea/taller-automotriz/tree/master"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver repositorio
              </a>
            </div>
            <div className="project-card">
              <img
                src="/images/pokedex-captura.png"
                alt="Pokédex"
                className="project-img"
              />
              <div className="project-label">Pokédex</div>
              <div className="project-description">
                Aplicación para visualizar todos los Pokémon de la mundialmente
                famosa franquicia de videojuegos homónima, con la información
                clave de cada Pokémon.
              </div>
              <div className="project-tech-list">
                <div className="project-tech">React Native</div>
                <div className="project-tech">TypeScript</div>
                <div className="project-tech">MongoDB</div>
                <div className="project-tech">GraphQL</div>
                <div className="project-tech">Expo</div>
              </div>
              <a
                className="repo-btn"
                href="https://github.com/jgobea/Pokedex/tree/master"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver repositorio
              </a>
            </div>
            <div className="project-card">
              <img
                src="/images/captura-portafolio.png"
                alt="Página personal"
                className="project-img"
              />
              <div className="project-label">Página personal</div>
              <div className="project-description">
                Página que contiene toda la información clave sobre mí, desde mi
                información personal hasta mis habilidades en el campo,
                totalmente responsive y con un diseño limpio y lígero.
              </div>
              <div className="project-tech-list">
                <div className="project-tech">React</div>
                <div className="project-tech">TypeScript</div>
              </div>
              <a
                className="repo-btn"
                href="https://github.com/mguevara0505/portafolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver repositorio
              </a>
            </div>
          </div>
          {/* Sección de contacto */}
          <div className="contact-section" ref={contactoRef}>
            <h2 className="contact-title">Contacto</h2>
            <div className="contact-underline"></div>
            <p className="contact-text">
              Estoy siempre interesado en la idea de poder unirme al desarrollo
              de diversos proyectos ya sean web o aplicaciones de manera
              progresiva. Si tienes alguna propuesta o pregunta, no dudes en
              contactar conmigo por mis redes sociales.
            </p>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icon">
                  {/* Mail icon */}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2471a3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="4" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-card-title">Correo</div>
                <div className="contact-card-info">mariucho2005@gmail.com</div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  {/* Location icon */}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2471a3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21s-6-5.686-6-10A6 6 0 0 1 18 11c0 4.314-6 10-6 10z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                </div>
                <div className="contact-card-title">Ubicación</div>
                <div className="contact-card-info">Valencia, Venezuela</div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  {/* Phone icon (mobile) */}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2471a3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="7" y="2" width="10" height="20" rx="2" />
                    <circle cx="12" cy="18" r="1" />
                  </svg>
                </div>
                <div className="contact-card-title">Teléfono</div>
                <div className="contact-card-info">+58 424-4325417</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-nav">
          <button
            className="nav-btn"
            onClick={() => scrollToSection(inicioRef)}
          >
            Inicio
          </button>
          <button
            className="nav-btn"
            onClick={() => scrollToSection(sobreMiRef)}
          >
            Sobre mí
          </button>
          <button
            className="nav-btn"
            onClick={() => scrollToSection(proyectosRef)}
          >
            Proyectos
          </button>
          <button
            className="nav-btn"
            onClick={() => scrollToSection(contactoRef)}
          >
            Contacto
          </button>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-copy">
          © 2025 Mario Guevara. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;

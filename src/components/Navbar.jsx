import { useEffect, useState } from "react";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "trabajos", label: "Nuestros trabajos" },
  { id: "contacto", label: "Contacto" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-15% 0px -70% 0px", // Detecta cuando la sección está en el tercio superior
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = () => {
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    };

    // Reintentar un par de veces por si el DOM tarda
    observeElements();
    const timer = setTimeout(observeElements, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // Función para manejar el clic y forzar el estado activo
  const handleNavLinkClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed-top">
      <div className="navbar-container">

        {/* <div className="navbar-logo">
          <img className="brand-logo" src="/logo-estilo-sfdo.png" alt="Logo estilo cortina" />
        </div> */}

        {/* Desktop */}
        <ul className="navbar-links">
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={activeSection === sec.id ? "active" : ""}
                onClick={() => handleNavLinkClick(sec.id)}
              >
                {sec.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        {sections.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className={activeSection === sec.id ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {sec.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;


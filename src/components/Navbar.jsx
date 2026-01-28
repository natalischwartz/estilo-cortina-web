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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="">
      <div className="navbar-container">

        <div className="navbar-logo">
          <img className="brand-logo" src="/logo-estilo-sfdo.png" alt="Logo estilo cortina" />
        </div>

        {/* Desktop */}
        <ul className="navbar-links">
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={activeSection === sec.id ? "active" : ""}
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


const Footer = () => {
  return (
    <footer id="contacto" className="site-footer">
      <div className="footer-container">

       <div className="footer-socials">
        <a href="https://www.instagram.com/estilo_cortina/" target="_blank" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="17" cy="7" r="1" fill="currentColor"/>
          </svg>
        </a>

        <a href="https://www.tiktok.com/@estilo.cortina" target="_blank" aria-label="TikTok">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M14 3v10.5a3.5 3.5 0 1 1-3-3.46"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 7c1.5 1.5 3.5 2 5 2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </a>
    </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Estilo Cortina. Todos los derechos reservados.
          Desarrollado por Natali Schwartz
        </div>

      </div>
    </footer>
  );
};

export default Footer;

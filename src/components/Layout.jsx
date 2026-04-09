import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { brandAssets, contactInfo, navItems, QUOTE_MAIL, icons } from "../siteContent";

function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sayfa değişince menüyü kapat
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Menü açıkken body scroll'u kilitle, scrollbar kaymasını önle
  useEffect(() => {
    if (menuOpen) {
      const w = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${w}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container nav-shell">
          <NavLink className="brand" to="/" aria-label="Seval Depo ana sayfa">
            <img className="brand-logo" src={brandAssets.logoBar} alt="Seval Depo" />
          </NavLink>

          <nav className="site-nav" aria-label="Ana menu">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a className="nav-cta nav-cta-desktop" href={QUOTE_MAIL}>
            Teklif Al
          </a>

          <button
            className={`hamburger${menuOpen ? " is-active" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobil nav overlay — header dışında, backdrop-filter containing block sorununu önler */}
      <div className={`mobile-nav${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <button
          className="mobile-nav-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Menüyü kapat"
        >
          <span /><span />
        </button>
        <nav aria-label="Mobil menu">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
          <a className="nav-cta" href={QUOTE_MAIL} style={{ marginTop: "8px" }}>Teklif Al</a>
        </nav>
      </div>

      <Outlet />

      <footer className="site-footer">
        <img className="footer-bar" src={brandAssets.footerBar} alt="" />
        <div className="container footer-shell">
          <div className="brand brand-footer">
            <img className="brand-logo brand-logo-footer" src={brandAssets.logoBar} alt="Seval Depo" />
            <span className="brand-text">
              <strong>SEVAL DEPO</strong>
              <small>Soğuk Hava Depolama</small>
            </span>
          </div>
          <div className="footer-meta">
            <p>{contactInfo.address}</p>
            <p>&copy; 2026 Seval Depo. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

      <a className="floating-call" href={contactInfo.phoneHref} aria-label="Bizi ara">
        <img src={icons.phone} alt="Ara" />
      </a>

      {/* Floating WhatsApp */}
      <a
        className="floating-whatsapp"
        href={contactInfo.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp'tan yaz"
      >
        <img src={icons.whatsapp} alt="WhatsApp" />
      </a>
    </>
  );
}

export default Layout;

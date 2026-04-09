import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { brandAssets, contactInfo, navItems, QUOTE_MAIL, icons } from "../siteContent";

function Layout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

          <a className="nav-cta" href={QUOTE_MAIL}>
            Teklif Al
          </a>
        </div>
      </header>

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

import { NavLink, Outlet } from "react-router-dom";
import { brandAssets, contactInfo, navItems } from "../siteContent";

function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-shell">
          <NavLink className="brand" to="/" aria-label="Seval Depo ana sayfa">
            <img className="brand-logo" src={brandAssets.logoBar} alt="Seval Depo" />
            <span className="brand-text">
              <strong>SEVAL DEPO</strong>
              <small>Soğuk Hava Depolama</small>
            </span>
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

          <NavLink className="nav-cta" to="/iletisim">
            Teklif Al
          </NavLink>
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
            <p>&copy; 2026 Seval Depo. Tum haklari saklidir.</p>
          </div>
        </div>
      </footer>

      <a className="floating-call" href={contactInfo.phoneHref} aria-label="Seval Depo'yu ara">
        <img src={brandAssets.callButton} alt="" />
      </a>
    </>
  );
}

export default Layout;

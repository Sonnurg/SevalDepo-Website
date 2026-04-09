import SectionHeading from "../components/SectionHeading";
import { contactInfo, pageMedia, quickAccessItems, icons, QUOTE_MAIL } from "../siteContent";

function ContactPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">İletişim</p>
            <h1>Depolama ihtiyacınız için bizimle iletişime geçin</h1>
            <p className="page-intro">
              Donuk depolama, soğuk depolama, şoklama, palet bazlı veya parsiyel depolama
              ihtiyaçlarınız için size uygun modeli birlikte netleştirelim. Planlanan depolama
              süresi, ürün tipi ve tahmini hacim bilgisini paylaşmanız daha hızlı geri dönmemizi
              sağlar.
            </p>
          </div>
          <div className="page-hero-media">
            <img src={pageMedia.workersImage} alt="Seval Depo operasyon ekibi" />
          </div>
        </div>
      </section>

      {/* Anasayfadan taşınan hızlı erişim kutucukları */}
      <section className="contact-quick-access">
        <div className="container">
          <div className="contact-quick-grid">
            <a href={contactInfo.phoneHref} className="contact-quick-box">
              <img src={icons.phone} className="contact-quick-icon" alt="" />
              <div>
                <strong>Mobil Hat</strong>
                <span>{contactInfo.phone}</span>
              </div>
            </a>
            <a
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="contact-quick-box"
            >
              <img src={icons.whatsapp} className="contact-quick-icon" alt="" />
              <div>
                <strong>WhatsApp</strong>
                <span>Hızlı yazışma ve teklif</span>
              </div>
            </a>
            <a href={contactInfo.secondaryEmailHref} className="contact-quick-box">
              <img src={icons.mail} className="contact-quick-icon" alt="" />
              <div>
                <strong>E-posta</strong>
                <span>{contactInfo.secondaryEmail}</span>
              </div>
            </a>
            <a href={contactInfo.localPhoneHref} className="contact-quick-box">
              <img src={icons.landline} className="contact-quick-icon" alt="" />
              <div>
                <strong>Sabit Hat</strong>
                <span>{contactInfo.localPhone}</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <SectionHeading
            kicker="İletişim Bilgileri"
            title="Hızlı teklif ve saha bilgisi için bize ulaşın"
          />

          <div className="contact-cards-row">
            {/* Satış müdürü kartı */}
            <div className="contact-info-card contact-primary-card">
              <div className="contact-card-badge">Satış Müdürü</div>
              <h2 className="contact-person-name">Ertuğrul Memiş</h2>
              <p className="contact-card-desc">
                Depolama teklifi ve saha bilgisi için doğrudan ulaşabilirsiniz.
              </p>
              <div className="contact-detail-list">
                <a href={contactInfo.phoneHref} className="contact-detail-item contact-phone">
                  <span className="contact-detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <span>
                    <strong>Mobil Hat</strong>
                    <em>{contactInfo.phone}</em>
                  </span>
                </a>
                <a
                  href={contactInfo.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-detail-item contact-whatsapp"
                >
                  <span className="contact-detail-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
                    </svg>
                  </span>
                  <span>
                    <strong>WhatsApp</strong>
                    <em>Hızlı yazışma ve teklif</em>
                  </span>
                </a>
                <a href={contactInfo.secondaryEmailHref} className="contact-detail-item contact-email">
                  <span className="contact-detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <span>
                    <strong>E-posta</strong>
                    <em>{contactInfo.secondaryEmail}</em>
                  </span>
                </a>
              </div>
            </div>

            {/* Şirket iletişim kartı */}
            <div className="contact-info-card contact-secondary-card">
              <div className="contact-card-badge contact-card-badge-light">Şirket İletişim</div>
              <h2 className="contact-person-name">Seval Depo</h2>
              <p className="contact-card-desc">
                Genel bilgi ve kurumsal iletişim için şirket hattımızı ve e-postamızı
                kullanabilirsiniz.
              </p>
              <div className="contact-detail-list">
                <a href={contactInfo.localPhoneHref} className="contact-detail-item contact-phone">
                  <span className="contact-detail-icon">
                    <img src={icons.landline} alt="" width="20" height="20" style={{ objectFit: "contain" }} />
                  </span>
                  <span>
                    <strong>Sabit Hat</strong>
                    <em>{contactInfo.localPhone}</em>
                  </span>
                </a>
                <a href={contactInfo.emailHref} className="contact-detail-item contact-email">
                  <span className="contact-detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <span>
                    <strong>E-posta</strong>
                    <em>{contactInfo.email}</em>
                  </span>
                </a>
                <div className="contact-detail-item contact-address">
                  <span className="contact-detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>
                    <strong>Adres</strong>
                    <em>{contactInfo.address}</em>
                  </span>
                </div>
              </div>
            </div>

            {/* Teklif al kartı */}
            <div className="contact-info-card contact-quote-card">
              <h2 className="contact-quote-title">Teklif Almak İçin Mail Gönderin</h2>
              <p className="contact-card-desc">
                Ürün tipi, tahmini palet miktarı ve depolama süresini belirterek mail
                atın — size en kısa sürede dönüş yapalım.
              </p>
              <ul className="contact-quote-tips">
                <li>Ürün tipi ve sıcaklık ihtiyacı</li>
                <li>Tahmini palet miktarı</li>
                <li>Planlanan depolama süresi</li>
              </ul>
              <a href={QUOTE_MAIL} className="button button-primary contact-quote-btn">
                Teklif Maili Gönder
              </a>
              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary contact-quote-btn"
              >
                WhatsApp'tan Yaz
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section map-section">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.005757653953!2d28.86287544498313!3d41.11239756200785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1d8b5ac3d29%3A0xefc8b59f688c4867!2sSeval%20G%C4%B1da!5e0!3m2!1str!2str!4v1775712450677!5m2!1str!2str"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "24px", display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Seval Depo Konum"
          />
        </div>
      </section>
    </main>
  );
}

export default ContactPage;

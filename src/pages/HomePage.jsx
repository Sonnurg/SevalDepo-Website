import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import {
  brandAssets,
  contactInfo,
  homeBenefits,
  homeStorageCards,
  operationsHighlights,
  pageMedia,
  quickAccessItems,
  serviceCards,
  trustItems,
} from "../siteContent";

function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-frost">
          <img src={brandAssets.frostyBackground} alt="" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">İstanbul’da Kiralık Soğuk Hava Deposu</p>
            <h1>
              İstanbul’da Kiralık Soğuk Hava Deposu
              <br />
              Palet Bazlı ve Parsiyel Depolama Hizmeti
            </h1>
            <p className="hero-text">
              Seval Soğuk Hava Deposu, dondurulmuş gıda ürünlerinin güvenli ve standartlara
              uygun şekilde muhafazası için İstanbul Sultangazi’de hizmet vermektedir.
              Bilgisayar kontrollü sistemler ile ISO ve HACCP standartlarına uygun, -18 °C
              sabit sıcaklıkta depolama sağlanmaktadır.
            </p>
            <p className="hero-text">
              Tesisimiz, farklı ürün grupları için planlanmış soğuk depo odaları ile donuk
              ve soğuk depolama ihtiyaçlarına çözüm sunmaktadır. Et, tavuk, deniz ürünleri,
              dondurulmuş gıdalar ve diğer sıcaklık kontrollü ürünler uygun koşullarda
              muhafaza edilir.
            </p>

            <div className="hero-actions">
              <Link className="button button-primary" to="/iletisim">
                Hemen Teklif Al
              </Link>
              <a
                className="button button-secondary"
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp'tan Yaz
              </a>
            </div>

            <div className="hero-inline-contact">
              {quickAccessItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </a>
              ))}
            </div>

            <div className="hero-points">
              <div>
                <strong>2.500 m²</strong>
                <span>Depolama alanı</span>
              </div>
              <div>
                <strong>12</strong>
                <span>Soğuk depo odası</span>
              </div>
              <div>
                <strong>30+</strong>
                <span>Yıllık deneyim</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <img className="hero-badge-image" src={brandAssets.coldChainIcon} alt="" />
            <div className="warehouse-card">
              <img src={pageMedia.heroImage} alt="" />
            </div>
          </div>
        </div>
        <img className="snow-divider" src={brandAssets.snowWaveDivider} alt="" />
      </section>

      <section className="quick-contact-band">
        <div className="container quick-contact-grid">
          <div>
            <p className="section-kicker">Hızlı Ulaşım</p>
            <h2>Telefon, e-posta ve WhatsApp ile anında iletişim kurun</h2>
          </div>
          <div className="quick-contact-actions">
            <a className="button button-primary" href={contactInfo.phoneHref}>
              Satış Müdürü Ertuğrul Memiş'i Ara
            </a>
            <a
              className="button button-secondary"
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp'tan Yaz
            </a>
          </div>
        </div>
      </section>

      <section className="services-overview">
        <div className="container intro-grid">
          <div className="intro-copy">
            <SectionHeading
              kicker="Profesyonel Soğuk Zincir Depolama"
              title="Soğuk zincirde güvenilir çözüm ortağınız"
            />
            <p>
              Seval Soğuk Hava Deposu, İstanbul’da merkezi konumda bulunan tesisinde donuk
              ve soğuk depolama hizmeti sunmaktadır. 2.500 m² kapalı alan ve farklı
              kapasitelere uygun depo odaları ile ürünlerin güvenli şekilde muhafaza
              edilmesi sağlanır.
            </p>
            <p>
              Rampalı TIR yükleme alanı, forklift destekli operasyon altyapısı ve deneyimli
              depo personeli ile depolama ve sevkiyat süreçleri düzenli ve kontrollü şekilde
              yönetilmektedir.
            </p>
          </div>

          <div className="intro-panel">
            <div className="panel-pill">Merkezi Konumda, 2.500 m² Depolama Alanı</div>
            <img className="intro-panel-image" src={brandAssets.servicesLayout} alt="" />
            <div className="panel-stat">
              <strong>30 Yıllık Gıda Sektörü Deneyimi</strong>
              <span>Hijyen, kalite ve gıda güvenliği standartlarına uygun operasyon</span>
            </div>
            <div className="panel-stat">
              <strong>Donuk ve Soğuk Depolama</strong>
              <span>
                Et, tavuk, deniz ürünleri, süt ürünleri ve dondurulmuş gıdalar için uygun
                depolama
              </span>
            </div>
            <div className="panel-stat">
              <strong>Operasyonel Avantaj</strong>
              <span>Rampalı TIR yükleme alanı ve forklift destekli kontrollü süreçler</span>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-cards">
        <div className="container">
          <SectionHeading
            kicker="Hizmetlerimiz"
            title="İhtiyacınıza göre oda bazlı veya parsiyel depolama çözümleri sunuyoruz."
          />

          <div className="cards-grid">
            {serviceCards.map((service) => (
              <article
                className="info-card"
                key={service.title}
                style={{ backgroundImage: `url(${service.background})` }}
              >
                <div className="card-icon">
                  <img src={service.icon} alt="" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="operations-strip">
        <div className="container">
          <SectionHeading
            kicker="Operasyon Gücü"
            title="Sıcaklık, güvenlik ve sistem altyapısını hızlıca görün"
          />
          <div className="operations-grid">
            {operationsHighlights.map((item) => (
              <article className="operation-card" key={item.title}>
                <div className="operation-badge">{item.value}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="storage-types">
        <div className="container">
          <SectionHeading
            kicker="Depolama Alanları"
            title="Donuk depolama, soğuk depolama ve şoklama hizmetleri"
          />

          <div className="storage-grid">
            {homeStorageCards.map((item) => (
              <article
                className="storage-card"
                key={item.title}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="storage-overlay" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="infrastructure">
        <div className="container split-grid">
          <div className="infra-copy">
            <SectionHeading
              kicker="Soğuk Depolamada Güçlü Altyapı"
              title="Merkezi konum, kontrollü operasyon ve sektör deneyimi"
            />

            <div className="benefit-list">
              {homeBenefits.map((benefit) => (
                <article className="benefit-item" key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="infra-visual" aria-hidden="true">
            <div className="stack-photo main-photo">
              <img src={pageMedia.buildingImage} alt="" />
            </div>
            <div className="stack-photo side-photo top-photo">
              <img src={pageMedia.workerImage} alt="" />
            </div>
            <div className="stack-photo side-photo bottom-photo">
              <img src={pageMedia.workersImage} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <SectionHeading
            kicker="Güven Alanı"
            title="Referans, sertifika ve operasyon güveni için güçlü bir temel"
          />
          <div className="trust-grid">
            {trustItems.map((item) => (
              <article className="trust-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;

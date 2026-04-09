import SectionHeading from "../components/SectionHeading";
import {
  brandAssets,
  contactInfo,
  homeBenefits,
  homeStorageCards,
  operationsHighlights,
  pageMedia,
  serviceCards,
  trustItems,
  icons,
  QUOTE_MAIL,
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
            <h1>
              İstanbul'da Kiralık Soğuk Hava Deposu
            </h1>
            <p className="hero-text">
              Seval Soğuk Hava Deposu, İstanbul Sultangazi'de 2.500 m² modern tesisi ve 12 adet
              bağımsız soğuk depo odası ile gıda sektörüne profesyonel soğuk depolama hizmeti
              sunmaktadır. 30 yılı aşkın Seval Gıda güvencesiyle ürünleriniz güvende.
            </p>
            <p className="hero-text">
              -40°C'den +4°C'ye geniş sıcaklık yelpazesinde donuk depolama ve şoklama hizmeti.
              Palet bazlı, parsiyel ve oda bazlı kiralama seçenekleri ile ölçeğinize uygun
              esnek çözümler.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href={QUOTE_MAIL}>
                Hemen Teklif Al
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

            <div className="hero-points">
              <div>
                <img src={icons.area} className="hero-stat-icon" alt="" />
                <strong>2.500 m²</strong>
                <span>Depolama alanı</span>
              </div>
              <div>
                <img src={icons.frozenHouse} className="hero-stat-icon" alt="" />
                <strong>12</strong>
                <span>Soğuk depo odası</span>
              </div>
              <div>
                <img src={icons.thermometer} className="hero-stat-icon" alt="" />
                <strong>30+</strong>
                <span>Yıllık deneyim</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <img className="hero-badge-image" src={brandAssets.coldChainIcon} alt="" />
            <div className="warehouse-card">
              <img src={pageMedia.heroImage} alt="Seval Soğuk Hava Deposu iç görünüm" />
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
              Hemen Ara
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
              kicker="Profesyonel Soğuk Zincir Yönetimi"
              title="Soğuk zincirde güvenilir çözüm ortağınız"
            />
            <p>
              Seval Soğuk Hava Deposu, İstanbul Sultangazi'de dondurma, donuk pasta, unlu
              mamuller, donmuş hamur işleri ve tüm donuk tatlı ürünleri için özelleşmiş soğuk
              depolama hizmeti sunmaktadır. 12 adet bağımsız soğuk depo odası ile ürünleriniz
              doğru sıcaklıkta, güvenle muhafaza edilir.
            </p>
            <p>
              Rampalı TIR yükleme alanı ve forklift destekli operasyon altyapısı ile depolama
              ve sevkiyat süreçleri soğuk zincir kırılmadan yürütülmektedir. TEM Otoyolu
              bağlantısı sayesinde İstanbul içi tatlıcı ve pastane dağıtım lojistiğinizde
              zaman ve maliyet avantajı sağlayın.
            </p>
          </div>

          <div className="intro-panel">
            <div className="panel-pill">Sultangazi, İstanbul — 2.500 m² Depolama Alanı</div>
            <div className="panel-icon-grid">
              <div className="panel-icon-item">
                <img src={icons.area} alt="" />
                <strong>2.500 m²</strong>
                <span>Kapalı alan</span>
              </div>
              <div className="panel-icon-item">
                <img src={icons.frozenHouse} alt="" />
                <strong>12 Oda</strong>
                <span>Bağımsız depo</span>
              </div>
              <div className="panel-icon-item">
                <img src={icons.thermometer} alt="" />
                <strong>−40°C</strong>
                <span>En düşük sıcaklık</span>
              </div>
              <div className="panel-icon-item">
                <img src={icons.snowflake} alt="" />
                <strong>30+ Yıl</strong>
                <span>Sektör deneyimi</span>
              </div>
            </div>
            <div className="panel-stat">
              <strong>30 Yıllık Gıda Sektörü Deneyimi</strong>
              <span>ISO ve HACCP standartlarına uyumlu, hijyenik ve güvenli operasyon</span>
            </div>
            <div className="panel-stat">
              <strong>-40°C'den +4°C'ye Tam Yelpaze</strong>
              <span>
                Dondurma, donuk pasta, unlu mamuller, donmuş hamur işleri ve tüm donuk tatlılar için uygun depolama
              </span>
            </div>
            <div className="panel-stat">
              <strong>Esnek Kiralama Seçenekleri</strong>
              <span>
                Küçük tatlıcıdan büyük üretime tek paletten tam oda kiralamaya parsiyel ve oda bazlı çözümler
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-cards">
        <div className="container">
          <SectionHeading
            kicker="Hizmetlerimiz"
            title="Palet bazlı, parsiyel ve sıcaklık kontrollü profesyonel depolama çözümleri"
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
            title="Sıcaklık kontrolü, güvenlik ve uluslararası standartlar"
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
              kicker="Neden Seval Soğuk Hava Deposu?"
              title="Stratejik konum, uzman kadro ve kontrollü operasyon"
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
              <img src={pageMedia.buildingImage} alt="Seval Depo tesis dış görünüm" />
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
            kicker="Güven ve Kalite"
            title="Gıda güvenliği, esnek çözüm ve 30 yıllık tecrübe"
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

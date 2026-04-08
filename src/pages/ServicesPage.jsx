import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { faqItems, pageMedia, serviceCards, serviceDetails } from "../siteContent";

function ServicesPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">HİZMETLERİMİZ</p>
            <h1>Donuk ve soğuk depolama hizmetlerimiz</h1>
            <p className="page-intro">
              Seval Soğuk Hava Deposu, 2.500 m² kapalı alan ve 12 adet soğuk depo odası ile
              -40°C ile +4°C arasında profesyonel depolama hizmeti sunmaktadır.
            </p>
          </div>
          <div className="page-hero-media">
            <img src={pageMedia.fishImage} alt="Soguk depolama urunleri" />
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <SectionHeading
            kicker="Depolama Modelleri"
            title="Palet bazlı, parsiyel ve sıcaklık kontrollü profesyonel hizmet"
          />
          <div className="cards-grid">
            {serviceCards.map((service) => (
              <article className="info-card" key={service.title}>
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

      <section className="content-section frost-section">
        <div className="container service-detail-list">
          {serviceDetails.map((item, index) => (
            <article className={`service-detail ${index % 2 ? "reverse" : ""}`} key={item.title}>
              <div className="service-detail-media">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="service-detail-copy">
                <p className="section-kicker">Hizmet {String(index + 1).padStart(2, "0")}</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <SectionHeading
            kicker="Sık Sorulan Sorular"
            title="Depolama hizmetlerimiz hakkında kısa cevaplar"
          />
          <div className="benefit-list">
            {faqItems.map((item) => (
              <article className="benefit-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-band contact-band-plain">
        <div className="container contact-grid">
          <div>
            <SectionHeading
              kicker="Soğuk Zincirde Güvenilir Çözüm Ortağınız"
              title="Size uygun depolama modelini birlikte belirleyelim"
              light
            />
            <p>
              Urun tipinizi, tahmini palet miktarinizi ve kullanim suresini iletin;
              ihtiyaciniza uygun alan modelini netlestirelim.
            </p>
          </div>
          <div className="contact-card">
            <Link className="button button-primary" to="/iletisim">
              Iletisim Sayfasina Git
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;

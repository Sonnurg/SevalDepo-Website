import SectionHeading from "../components/SectionHeading";
import {
  faqItems,
  pageMedia,
  serviceCards,
  serviceDetails,
  storageProductGroups,
  dessertAdvantages,
  dessertProducts,
  dessertCallouts,
  contactInfo,
  QUOTE_MAIL,
} from "../siteContent";

function ServicesPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">HİZMETLERİMİZ</p>
            <h1>Gıda Sektörüne Profesyonel Soğuk Hava Depolama Hizmetleri</h1>
            <p className="page-intro">
              Seval Soğuk Hava Deposu, 2.500 m² kapalı alan ve 12 adet bağımsız soğuk depo
              odası ile -40°C'den +4°C'ye kadar geniş sıcaklık yelpazesinde profesyonel
              depolama hizmeti sunmaktadır. Palet bazlı, parsiyel ve oda bazlı kiralama
              seçenekleri ile ihtiyacınıza özel esnek çözümler.
            </p>
          </div>
          <div className="page-hero-media">
            <img src={pageMedia.pasta2} alt="Seval Depo soğuk depolama hizmetleri" />
          </div>
        </div>
      </section>

      {/* Genel Hizmet Kartları */}
      <section className="content-section">
        <div className="container">
          <SectionHeading
            kicker="Depolama Seçenekleri"
            title="Her ürün grubu için özelleştirilmiş sıcaklık kontrollü çözümler"
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

      {/* Ürün Grupları Listesi */}
      <section className="content-section product-groups-section">
        <div className="container">
          <SectionHeading
            kicker="Depolama Kapsamı"
            title="Geniş ürün yelpazesi, tek adreste"
          />
          <div className="product-groups-grid">
            {storageProductGroups.map((product) => (
              <div className="product-group-item" key={product}>
                <span className="product-group-dot" />
                {product}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dondurma & Pastacılık Sektörü Özel Bölüm */}
      <section className="content-section dessert-section">
        <div className="container">
          <SectionHeading
            kicker="Pastacılık ve Dondurma Sektörüne Özel Çözümler"
            title="Hassas soğuk zincir, sıfır dalgalanma, koku izolasyonu"
          />
          <p className="dessert-intro">
            Donuk tatlı ve dondurma sektörü, diğer gıdalara göre çok daha düşük ve sabit
            sıcaklıklar gerektirir. Pastacılık ürünlerinizin ve dondurmalarınızın yapısını,
            tadını ve görselliğini koruyan <strong>Hassas Soğuk Zincir</strong> hizmeti
            sunuyoruz.
          </p>

          <div className="dessert-advantages-grid">
            {dessertAdvantages.map((item) => (
              <article className="dessert-advantage-card" key={item.title}>
                <span className="dessert-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ürün Grupları */}
      <section className="content-section">
        <div className="container">
          <SectionHeading
            kicker="Hangi Ürünler İçin Uygunuz?"
            title="Geniş ürün yelpazesi, bağımsız odalar, koku izolasyonu"
          />
          <div className="dessert-products-grid">
            {dessertProducts.map((product) => (
              <article className="dessert-product-card" key={product.label}>
                <h3>{product.label}</h3>
                <p>{product.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Callout Bölümü */}
      <section className="content-section">
        <div className="container">
          <div className="dessert-callouts-grid">
            {dessertCallouts.map((item) => (
              <article className="dessert-callout-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmet Detayları */}
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

      {/* SSS */}
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

      {/* CTA */}
      <section className="contact-band">
        <div className="container contact-grid">
          <div>
            <SectionHeading
              kicker="Soğuk Zincirde Güvenilir Çözüm Ortağınız"
              title="Size uygun depolama modelini birlikte belirleyelim"
              light
            />
            <p>
              Ürün tipinizi, tahmini palet miktarını ve kullanım süresini iletin;
              ihtiyacınıza uygun alan modelini birlikte netleştirelim.
            </p>
          </div>
          <div className="contact-card">
            <a href={QUOTE_MAIL} className="button button-primary" style={{ marginBottom: "12px", display: "inline-flex" }}>
              Teklif Maili Gönder
            </a>
            <a
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
              style={{ display: "inline-flex" }}
            >
              WhatsApp'tan Yaz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;

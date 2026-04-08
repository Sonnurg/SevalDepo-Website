import SectionHeading from "../components/SectionHeading";
import { contactInfo, pageMedia } from "../siteContent";

function ContactPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">İletişim</p>
            <h1>Depolama ihtiyacınız için bizimle iletişime geçin</h1>
            <p className="page-intro">
              Donuk depolama, soğuk depolama, şoklama, palet bazlı depolama veya parsiyel
              depolama ihtiyaçlarınız için size uygun modeli birlikte netleştirelim.
            </p>
          </div>
          <div className="page-hero-media">
            <img src={pageMedia.workersImage} alt="Seval Depo operasyon ekibi" />
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container split-grid">
          <div>
            <SectionHeading
              kicker="İletişim Bilgileri"
              title="Hızlı teklif ve saha bilgisi için bize ulaşın"
            />
            <div className="contact-list">
              <p className="contact-person">{contactInfo.contactPerson}</p>
              <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
              <a href={contactInfo.localPhoneHref}>{contactInfo.localPhone}</a>
              <a href={contactInfo.emailHref}>{contactInfo.email}</a>
              <a href={contactInfo.secondaryEmailHref}>{contactInfo.secondaryEmail}</a>
              <p>{contactInfo.address}</p>
            </div>
            <p>
              Planlanan depolama süresi, ürün tipi ve tahmini hacim bilgisini paylaşmanız,
              size daha hızlı geri dönmemizi sağlar.
            </p>
          </div>

          <div className="contact-form-shell">
            <form className="contact-form">
              <label>
                Firma / Yetkili
                <input type="text" placeholder="Firma veya yetkili adi" />
              </label>
              <label>
                Telefon
                <input type="tel" placeholder="Telefon numarasi" />
              </label>
              <label>
                E-posta
                <input type="email" placeholder="E-posta adresi" />
              </label>
              <label>
                Talep Detayi
                <textarea
                  rows="5"
                  placeholder="Urun tipi, palet miktari ve tahmini sure bilgisi"
                />
              </label>
              <button className="button button-primary" type="button">
                Talep Gonder
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;

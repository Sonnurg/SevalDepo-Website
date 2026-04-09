import SectionHeading from "../components/SectionHeading";
import { aboutGallery, aboutStats, brandAssets, pageMedia, QUOTE_MAIL, contactInfo } from "../siteContent";

function AboutPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Hakkımızda</p>
            <h1>30 Yıllık Gıda Sektörü Deneyimiyle Soğuk Zincirde Güvenilir Çözüm Ortağınız</h1>
            <p className="page-intro">
              Seval Gıda'nın uzun yıllara dayanan gıda sektörü deneyimi, ISO ve HACCP
              standartlarına uyumlu, hijyenik ve güvenli bir soğuk depolama ortağı
              sunmaktadır. Dondurma ve pastacılık ürünlerinden et ve deniz ürünlerine
              kadar geniş ürün yelpazesinde profesyonel hizmet.
            </p>
          </div>
          <div className="page-hero-media">
            <img src={pageMedia.aboutInteriorImage} alt="Seval Depo raflı depolama alanı" />
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container split-grid">
          <div>
            <SectionHeading
              kicker="Seval Soğuk Hava Deposu"
              title="Merkezi konum, operasyonel avantaj ve kontrollü depolama"
            />
            <p>
              Tesisimizde 12 adet bağımsız soğuk depo odası ile -40°C'den +4°C'ye kadar geniş
              sıcaklık yelpazesinde donuk depolama, soğuk depolama ve şoklama hizmeti
              sunulmaktadır. Dondurma, donuk pasta, unlu mamuller, et, balık ve deniz ürünleri
              — her ürün grubu koku izolasyonlu bağımsız odalarında muhafaza edilir.
            </p>
            <p>
              Seval Soğuk Hava Deposu, İstanbul'un lojistik açıdan en avantajlı noktalarından
              biri olan Sultangazi'de konumlanmıştır. TEM Otoyolu ve Kuzey Marmara Otoyolu
              (O-7) bağlantı noktalarına dakikalar uzaklıkta olan tesisimiz, İstanbul içi
              dağıtımda ve şehirlerarası sevkiyatta zaman ve maliyet tasarrufu sağlar.
            </p>
            <p>
              Rampalı TIR yükleme alanı ve forklift destekli operasyon altyapısı ile ürün
              giriş-çıkış süreçleri soğuk zincir kırılmadan kontrollü şekilde yürütülür.
              Tesis bünyesinde görev yapan veteriner hekim ve gıda mühendisleri denetiminde
              hijyenik ve güvenli operasyon standartları korunmaktadır.
            </p>
          </div>

          <div className="stats-panel">
            <img className="intro-panel-image" src={brandAssets.servicesLayout} alt="" />
            <div className="stats-grid">
              {aboutStats.map((stat) => (
                <article className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neden Seval bölümü */}
      <section className="content-section">
        <div className="container">
          <SectionHeading
            kicker="Neden Seval Soğuk Hava Deposu?"
            title="Üç temel avantajla fark yaratan depolama çözümü"
          />
          <div className="about-why-grid">
            <article className="about-why-card">
              <div className="about-why-num">01</div>
              <h3>Stratejik ve Merkezi Konum</h3>
              <p>
                İstanbul Sultangazi'de TEM Otoyolu ve Kuzey Marmara Otoyolu (O-7) bağlantı
                noktalarına dakikalar uzaklıkta. İstanbul içi dağıtımda yakıt ve zaman
                tasarrufu, şehirlerarası sevkiyatta hızlı giriş-çıkış imkânı.
              </p>
            </article>
            <article className="about-why-card">
              <div className="about-why-num">02</div>
              <h3>İleri Teknoloji ve Hijyen Standartları</h3>
              <p>
                ISO ve HACCP gıda güvenliği standartlarına tam uyumlu tesis. Bilgisayar
                kontrollü merkezi sistemler ile tüm odalar 7/24 dijital sensörlerle anlık
                izlenmekte, sıcaklık verileri geçmişe dönük raporlanabilmektedir.
              </p>
            </article>
            <article className="about-why-card">
              <div className="about-why-num">03</div>
              <h3>Operasyonel Kusursuzluk</h3>
              <p>
                Soğuk zincirin kırılmaması için planlanmış rampalı TIR yükleme alanı. Veteriner
                hekim ve gıda mühendisi denetiminde hijyenik operasyon. Modern forklift
                altyapısı ile elleçleme süreçlerinde güvenli ve hızlı yönetim.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section frost-section">
        <div className="container">
          <SectionHeading
            kicker="Tesis Fotoğrafları"
            title="Kapalı alan, soğuk depo odaları ve depolama operasyonundan kareler"
          />
          <div className="gallery-grid">
            {aboutGallery.map((image, index) => (
              <div className={`gallery-card gallery-card-${index + 1}`} key={`${index}`}>
                <img src={image} alt={`Seval Depo tesis fotoğrafı ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quick-contact-band">
        <div className="container quick-contact-grid">
          <div>
            <p className="section-kicker">Teklif Alın</p>
            <h2>Depolama ihtiyacınız için hemen iletişime geçin</h2>
          </div>
          <div className="quick-contact-actions">
            <a className="button button-primary" href={QUOTE_MAIL}>
              Teklif Maili Gönder
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
    </main>
  );
}

export default AboutPage;

import SectionHeading from "../components/SectionHeading";
import { aboutGallery, aboutStats, brandAssets, pageMedia } from "../siteContent";

function AboutPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Hakkımızda</p>
            <h1>30 yıllık gıda sektörü deneyimiyle soğuk zincirde güvenilir çözüm sunuyoruz.</h1>
            <p className="page-intro">
              Seval Gıda’nın gıda sektöründeki uzun yıllara dayanan deneyimi, soğuk zincir
              depolama süreçlerinin güvenli ve düzenli şekilde yürütülmesine katkı sağlar.
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
              Tesisimizde farklı ürün grupları için planlanmış soğuk depo odaları ile
              donuk ve soğuk depolama hizmeti sunulmaktadır. Et, tavuk, deniz ürünleri,
              süt ürünleri ve dondurulmuş gıdalar uygun sıcaklık koşullarında güvenli
              şekilde muhafaza edilir.
            </p>
            <p>
              Seval Soğuk Hava Deposu, İstanbul’un lojistik açıdan avantajlı noktalarından
              biri olan Sultangazi’de konumlanmıştır. Ana ulaşım hatlarına yakınlığı
              sayesinde sevkiyat süreçleri hızlı ve verimli şekilde gerçekleştirilmektedir.
            </p>
            <p>
              Rampalı TIR yükleme alanı ve forklift destekli operasyon altyapısı ile ürün
              giriş-çıkış süreçleri kontrollü şekilde yürütülür.
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

      <section className="content-section frost-section">
        <div className="container">
          <SectionHeading
            kicker="Tesis Bilgileri"
            title="Kapalı alan, soğuk depo odaları ve depolama operasyonundan kareler"
          />
          <div className="gallery-grid">
            {aboutGallery.map((image, index) => (
              <div className={`gallery-card gallery-card-${index + 1}`} key={`${image}-${index}`}>
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;

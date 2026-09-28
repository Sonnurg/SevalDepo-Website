import { contactInfo } from "../siteContent";

function KvkkPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Yasal</p>
          <h1>Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container kvkk-page">

          <p className="kvkk-intro">
            Seval Gıda Sanayi ve Ticaret Limited Şirketi olarak kişisel verilerinizin güvenliği
            konusunda azami hassasiyeti göstermekteyiz. Bu aydınlatma metni, 6698 sayılı Kişisel
            Verilerin Korunması Kanunu ("Kanun") kapsamında veri sorumlusu sıfatıyla hazırlanmıştır.
          </p>

          <div className="kvkk-section">
            <h2>1. Veri Sorumlusu</h2>
            <table className="kvkk-table">
              <tbody>
                <tr><th>Şirket Adı</th><td>Seval Gıda Sanayi ve Ticaret Limited Şirketi</td></tr>
                <tr><th>Vergi Kimlik No</th><td>7640714411</td></tr>
                <tr><th>Adres</th><td>Cebeci Mah. 2. Cebeci Cad. No:30/32, Sultangazi / İstanbul</td></tr>
                <tr><th>E-posta</th><td>{contactInfo.email}</td></tr>
                <tr><th>Telefon</th><td>{contactInfo.localPhone}</td></tr>
              </tbody>
            </table>
          </div>

          <div className="kvkk-section">
            <h2>2. İşlenen Kişisel Veriler</h2>
            <p>
              Kanun uyarınca kişisel veri, kimliği belirli veya belirlenebilir gerçek kişiye ait
              her türlü veri olarak tanımlanmıştır. Bu kapsamda; iletişim formu, teklif talepleri
              veya doğrudan iletişim yoluyla tarafımıza iletilen ad, soyad, telefon numarası,
              e-posta adresi ve işletme bilgileri işlenmektedir.
            </p>
          </div>

          <div className="kvkk-section">
            <h2>3. Kişisel Veri İşleme Amaçları</h2>
            <ul>
              <li>Soğuk depolama hizmetlerine ilişkin teklif ve bilgi taleplerinin karşılanması</li>
              <li>Sözleşme süreçlerinin yürütülmesi ve müşteri ilişkilerinin yönetimi</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Hizmet kalitesinin iyileştirilmesi ve operasyonel süreçlerin geliştirilmesi</li>
            </ul>
          </div>

          <div className="kvkk-section">
            <h2>4. Kişisel Verilerin Aktarımı</h2>
            <p>
              Toplanan kişisel verileriniz; hizmetlerimizin sunulması için gerekli çalışmaların
              ilgili iş birimlerimiz tarafından yürütülmesi amacıyla ve yasal zorunluluklar
              çerçevesinde yetkili kamu kurum ve kuruluşlarıyla paylaşılabilecektir. Yurt dışına
              kişisel veri aktarımı yapılmamaktadır.
            </p>
          </div>

          <div className="kvkk-section">
            <h2>5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
            <p>
              Kişisel verileriniz; web sitemiz üzerindeki iletişim formu, e-posta, telefon ve
              yüz yüze iletişim kanalları aracılığıyla toplanmaktadır. İşleme faaliyetlerinin
              hukuki dayanakları; sözleşmenin kurulması veya ifası, veri sorumlusunun meşru
              menfaati ve açık rıza'dır.
            </p>
          </div>

          <div className="kvkk-section">
            <h2>6. İlgili Kişinin Hakları</h2>
            <p>Kanun'un 11. maddesi uyarınca aşağıdaki haklarınızı kullanabilirsiniz:</p>
            <ul>
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
              <li>Kanun'un 7. maddesi çerçevesinde silinmesini veya yok edilmesini isteme</li>
              <li>İşlemenin otomatik sistemlerle yapılması halinde aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kanuna aykırı işleme nedeniyle uğranılan zararın giderilmesini talep etme</li>
            </ul>
          </div>

          <div className="kvkk-section kvkk-contact-box">
            <h2>7. Başvuru Yöntemi</h2>
            <p>
              Haklarınıza ilişkin başvurularınızı aşağıdaki kanallar aracılığıyla şirketimize
              iletebilirsiniz:
            </p>
            <div className="kvkk-contact-grid">
              <div className="kvkk-contact-item">
                <strong>Adres</strong>
                <p>Cebeci Mah. 2. Cebeci Cad. No:30/32<br />Sultangazi / İstanbul</p>
              </div>
              <div className="kvkk-contact-item">
                <strong>E-posta</strong>
                <p><a href={contactInfo.emailHref}>{contactInfo.email}</a></p>
              </div>
              <div className="kvkk-contact-item">
                <strong>Telefon</strong>
                <p><a href={contactInfo.localPhoneHref}>{contactInfo.localPhone}</a></p>
              </div>
              <div className="kvkk-contact-item">
                <strong>Çalışma Saatleri</strong>
                <p>Pazartesi – Cumartesi<br />08:00 – 19:00</p>
              </div>
            </div>
          </div>

          <p className="kvkk-footer-note">
            Bu aydınlatma metni, gerektiğinde güncellenebilir. Son güncelleme: Mayıs 2026
          </p>

        </div>
      </section>
    </main>
  );
}

export default KvkkPage;

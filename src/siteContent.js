// SVG ve marka varlıkları
import logoBar from "./assets/cropped-SEVAL-DEPO-LOGO-2-scaled-1.png";
import footerBar from "./assets/contact-footer-bar.svg";
import callButton from "./assets/call-button.svg";
import coldChainIcon from "./assets/profesyonel-soguk-zincir-lojistik.svg";
// İkonlar
import iconArea from "./assets/area-svgrepo-com.svg";
import iconFrozenHouse from "./assets/frozen-house-ice-svgrepo-com.svg";
import iconLocation from "./assets/location-svgrepo-com.svg";
import iconMail from "./assets/mail-svgrepo-com.svg";
import iconPhone from "./assets/phone-call-telephone-svgrepo-com.svg";
import iconSnowflake from "./assets/snowflake-svgrepo-com.svg";
import iconThermometer from "./assets/thermometer-temperature-svgrepo-com.svg";
import iconWhatsapp from "./assets/whatsapp-color-svgrepo-com.svg";
import iconLandline from "./assets/sabit hat phone icon.svg";
import palletIcon from "./assets/pallet-bazli-depolama.svg";
import partialIcon from "./assets/parsiyel-depolama.svg";
import titleDecor from "./assets/section-title-decor.svg";
import frostyBackground from "./assets/section-frosty-background.svg";
import serviceCardBackground from "./assets/service-card-background.svg";
import snowWaveDivider from "./assets/snow-wave-divider.svg";
import servicesLayout from "./assets/services-section-layout.svg";

// Stok fotoğraflar (internet)
import depoStok1 from "./assets/DEPO-stok-1.webp";
import depoStok2 from "./assets/DEPO-stok-2.webp";
import depoStok3 from "./assets/DEPO-stok-3.webp";
import depoStok4 from "./assets/DEPO-stok-4.jpg";
import depoStok5 from "./assets/DEPO-stok-5.jpg";
import depoStok6 from "./assets/DEPO-stok-6.webp";
import depoStok7 from "./assets/DEPO-stok-7.jpg";
import depoStok8 from "./assets/DEPO-stok-8.jpg";
import depoStok9 from "./assets/DEPO-stok-9.jpg";
import depoStok10 from "./assets/DEPO-stok-10.jpg";

// Gerçek tesis fotoğrafları
import sevalDepo1 from "./assets/seval-depo-1.webp";
import sevalDepo2 from "./assets/seval-depo-2.webp";
import sevalDepo3 from "./assets/seval-depo-3.jpeg";
import sevalDepo4 from "./assets/seval-depo-4.jpeg";
import sevalDepo5 from "./assets/seval-depo-5.jpeg";
import sevalDepo6 from "./assets/seval-depo-6.jpeg";
import sevalDepo7 from "./assets/seval-depo-7.jpeg";
import binaGorseli from "./assets/bina görseli.jpg";

// Ürün fotoğrafları
import dondurma from "./assets/dondurma.jpeg";
import donukMeyve from "./assets/donuk meyve.webp";
import pasta from "./assets/pasta.jpeg";
import pasta2 from "./assets/pasta2.jpeg";

export const brandAssets = {
  logoBar,
  footerBar,
  callButton,
  titleDecor,
  frostyBackground,
  snowWaveDivider,
  servicesLayout,
  coldChainIcon,
};

export const icons = {
  area: iconArea,
  frozenHouse: iconFrozenHouse,
  location: iconLocation,
  mail: iconMail,
  phone: iconPhone,
  snowflake: iconSnowflake,
  thermometer: iconThermometer,
  whatsapp: iconWhatsapp,
  landline: iconLandline,
};

export const QUOTE_MAIL =
  "mailto:ertugrulmemis@sevalgida.com.tr?subject=Depolama%20Teklif%20Talebi&body=Merhaba%2C%20depolama%20teklifi%20almak%20istiyorum.";

export const contactInfo = {
  contactPerson: "Satış Müdürü Ertuğrul Memiş",
  phone: "+90 553 406 39 24",
  phoneHref: "tel:+905534063924",
  whatsapp: "WhatsApp'tan Yazın",
  whatsappHref: "https://wa.me/905534063924",
  localPhone: "0212 609 34 34",
  localPhoneHref: "tel:+902126093434",
  email: "info@sevalgida.com.tr",
  emailHref: "mailto:info@sevalgida.com.tr",
  secondaryEmail: "ertugrulmemis@sevalgida.com.tr",
  secondaryEmailHref: "mailto:ertugrulmemis@sevalgida.com.tr",
  address: "Mahmutbey Mahallesi, İstanbul / Sultangazi",
};

export const navItems = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { label: "İletişim", href: "/iletisim" },
];

export const serviceCards = [
  {
    title: "Hangi Ürünler İçin Uygun?",
    text: "Beyaz et ve kırmızı et ürünleri, süt ve süt ürünleri, donuk sebze ve meyveler, deniz ürünleri, dondurulmuş hazır gıdalar, dondurma, donuk tatlılar ile pasta ve unlu mamuller için uygundur.",
    icon: palletIcon,
    background: serviceCardBackground,
  },
  {
    title: "Depolama Seçenekleri",
    text: "-18°C / -25°C donuk depolama, +4°C / -4°C soğuk depolama, -40°C şoklama, palet bazlı depolama, parsiyel depolama ve oda bazlı kiralama seçenekleri sunuyoruz.",
    icon: partialIcon,
    background: serviceCardBackground,
  },
  {
    title: "Operasyonel Avantajlar",
    text: "Rampalı TIR yükleme alanı, forklift destekli operasyon, deneyimli depo personeli, merkezi konum avantajı, veteriner hekim ve gıda mühendisi desteği sağlanır.",
    icon: coldChainIcon,
    background: serviceCardBackground,
  },
];

export const homeStorageCards = [
  {
    title: "Dondurma ve Donuk Tatlılar",
    text: "-18°C / -25°C sabit sıcaklıkta dondurma, sorbe, donuk pasta ve şerbetli tatlılar için hassas soğuk zincir.",
    image: dondurma,
  },
  {
    title: "Pasta ve Unlu Mamuller",
    text: "Donuk pasta, cheesecake, waffle ve tüm pastacılık ürünleri için koku izolasyonlu bağımsız depo odaları.",
    image: pasta,
  },
  {
    title: "Et, Balık ve Deniz Ürünleri",
    text: "Kırmızı et, beyaz et, deniz ürünleri ve hazır gıdalar için -18°C ve altı kontrollü soğuk depolama.",
    image: depoStok5,
  },
];

export const homeBenefits = [
  {
    title: "Stratejik Merkezi Konum",
    text: "İstanbul Sultangazi'de TEM Otoyolu ve Kuzey Marmara Otoyolu (O-7) bağlantı noktalarına dakikalar uzaklıkta. Tatlıcı ve pastane tedarik zincirinizde zaman ve maliyet tasarrufu.",
  },
  {
    title: "Rampalı TIR Yükleme Alanı",
    text: "Soğuk zincirin kırılmaması için planlanmış rampalı TIR yükleme alanı ile dondurma, pasta ve donuk ürün giriş-çıkışları hızlı ve kontrollü şekilde gerçekleştirilir.",
  },
  {
    title: "Uzman Kadro ve Ekipman",
    text: "Gıda mühendisi denetiminde hijyenik operasyon. Modern forklift altyapısı ve deneyimli depo personeli ile ürün elleçleme süreçlerinde güvenli yönetim.",
  },
  {
    title: "30 Yıllık Sektör Deneyimi",
    text: "Seval Gıda'nın gıda sektöründeki uzun yıllara dayanan tecrübesi, ISO ve HACCP standartlarına uyumlu, hijyenik depolama operasyonlarının güvenli şekilde yürütülmesini sağlar.",
  },
];

export const quickAccessItems = [
  {
    label: "Mobil Hat",
    value: "+90 553 406 39 24",
    href: "tel:+905534063924",
  },
  {
    label: "WhatsApp",
    value: "Hızlı yazışma ve teklif",
    href: "https://wa.me/905534063924",
  },
  {
    label: "E-posta",
    value: "info@sevalgida.com.tr",
    href: "mailto:info@sevalgida.com.tr",
  },
];

export const operationsHighlights = [
  {
    value: "-40°C / +4°C",
    title: "Sıcaklık Kontrollü Depolama",
    text: "Şoklamadan soğuk depoya geniş sıcaklık yelpazesi. Dondurma ve donuk tatlılardan pastaya tüm ürünler için uygun sıcaklık odaları.",
  },
  {
    value: "7/24",
    title: "Güvenlik ve İzleme",
    text: "Güvenlik kameraları ve alarm sistemleri ile 7/24 koruma. Tüm odalar dijital sensörlerle anlık sıcaklık takibi altında.",
  },
  {
    value: "ISO / HACCP",
    title: "Uluslararası Standartlar",
    text: "Bilgisayar kontrollü merkezi sistemler ve gıda mühendisi denetiminde ISO ve HACCP gıda güvenliği standartlarına tam uyumlu operasyon.",
  },
];

export const trustItems = [
  {
    title: "Hijyen ve Gıda Güvenliği",
    text: "Gıda mühendisi denetiminde ISO ve HACCP standartlarına uyumlu hijyenik operasyon akışı. Dondurma ve pasta sektörüne özel dikkat.",
  },
  {
    title: "Esnek ve Ekonomik Depolama",
    text: "İster tek bir palet ister yüzlerce palet; parsiyel ve oda bazlı kiralama ile küçük tatlıcıdan büyük üreticiye ölçeğe uygun maliyet.",
  },
  {
    title: "Gerçek Tesis Güvencesi",
    text: "Raf düzeni, palet yerleşimi ve depo içi akışı gösteren gerçek tesis fotoğrafları ve 30 yıllık Seval Gıda sektör tecrübesi.",
  },
];

export const aboutStats = [
  { value: "2.500 m²", label: "Kapalı alan" },
  { value: "12", label: "Soğuk depo odası" },
  { value: "30+", label: "Yıllık sektör deneyimi" },
];

// Galeri: önce iç mekan, sonra gerçek tesis fotoğrafları
export const aboutGallery = [
  sevalDepo1,
  sevalDepo2,
  sevalDepo3,
  sevalDepo4,
  sevalDepo5,
  sevalDepo6,
  sevalDepo7,
  binaGorseli,
];

export const serviceDetails = [
  {
    title: "Donuk Depolama (-18°C / -25°C)",
    text: "Donuk et, tavuk, deniz ürünleri ve hazır gıdalar için -18°C ve altı sıcaklıklarda güvenli muhafaza sağlanır. Dondurma ve donuk tatlı ürünleri de bilgisayar kontrollü sistemlerle milimetrik sapmalarla korunan sabit sıcaklıkta kristalleşme riski olmadan muhafaza edilir.",
    image: depoStok1,
  },
  {
    title: "Soğuk Depolama (+4°C / -4°C)",
    text: "Süt ürünleri ve ısı hassasiyeti olan gıdalar için +4°C ve -4°C aralığında kontrollü depolama hizmeti sunulur. Pasta kreması, şerbetli tatlılar ve soğutulmuş pastacılık ürünleri için de bağımsız odalar mevcuttur.",
    image: depoStok2,
  },
  {
    title: "Şoklama Hizmeti (-40°C)",
    text: "Taze üretilen pasta ve dondurmaların yapısını, dokusunu ve raf ömrünü korumak için -40°C şoklama hizmeti. Ürünün merkez sıcaklığı hızla düşürülerek buz kristali oluşumu engellenir. Sezonluk üretim yapan işletmeler için idealdir.",
    image: depoStok3,
  },
  {
    title: "Koku İzolasyonlu Bağımsız Odalar",
    text: "12 adet bağımsız depo odası sayesinde tatlı ve pasta grupları; et, balık ve koku yoğun ürünlerden tamamen izole edilmiş alanlarda muhafaza edilir. Ürünleriniz depodan çıktığı gibi — koku sinmesi riski yoktur.",
    image: sevalDepo4,
  },
  {
    title: "Palet Bazlı ve Parsiyel Depolama",
    text: "İster tek bir palet ister yüzlerce palet; Euro palet uyumlu raf ve zemin depolama altyapısı ile ihtiyacınız kadar ödeme yapın. Küçük butik imalathaneden büyük üretime ölçeğe uygun esnek kiralama.",
    image: sevalDepo5,
  },
  {
    title: "Profesyonel Altyapı ve 2.500 m² Alan",
    text: "Rampalı TIR yükleme alanı, forklift destekli operasyon ve deneyimli depo personeli ile ürün giriş-çıkış süreçleri soğuk zincir kırılmadan yönetilmektedir. Gıda mühendisi desteği ile hijyen ve kalite standartları sürekli korunmaktadır.",
    image: sevalDepo6,
  },
];

export const pageMedia = {
  heroImage: depoStok6,
  buildingImage: binaGorseli,
  buildingAltImage: sevalDepo3,
  aboutInteriorImage: sevalDepo1,
  workersImage: sevalDepo2,
  workerImage: sevalDepo7,
  fishImage: pasta2,
  dondurma,
  pasta,
  pasta2,
  donukMeyve,
  depoStok4,
  depoStok5,
  depoStok7,
  depoStok8,
  depoStok9,
  depoStok10,
};

export const storageProductGroups = [
  "Beyaz et ve kırmızı et ürünleri",
  "Süt ve süt ürünleri",
  "Donuk sebze ve meyveler",
  "Deniz ürünleri",
  "Dondurulmuş hazır gıdalar",
  "Dondurma ve sorbe",
  "Donuk pasta ve unlu mamuller",
  "Waffle, sufle ve donuk hamur işleri",
  "Baklava ve şerbetli tatlılar",
  "Pastacılık hammaddeleri (püreler, kremalar)",
];

// ---- Dondurma & Pastacılık Sektörü Özel İçerik ----

export const dessertAdvantages = [
  {
    tag: "Sıfır Derece Dalgalanması",
    title: "Kristalleşmeyi Önleyen Sabit Sıcaklık",
    text: "Dondurma ve donuk pastalarda en büyük risk sıcaklık değişimleridir. Bilgisayar kontrollü sistemlerimizle -18°C'den -25°C'ye kadar olan aralığı milimetrik sapmalarla koruyoruz.",
  },
  {
    tag: "-40°C Şoklama Ünitesi",
    title: "Hızlı Şoklama ile Raf Ömrü Maksimuma",
    text: "Taze üretilen pasta ve dondurmaların yapısını korumak için şoklama ünitemizle ürünün merkez sıcaklığını hızla düşürüyor, raf ömrünü ve dokusunu maksimuma çıkarıyoruz.",
  },
  {
    tag: "Koku İzolasyonu",
    title: "Koku Geçirmez Bağımsız Depo Odaları",
    text: "12 adet bağımsız odamız sayesinde tatlı ve pasta gruplarınızı koku sinmesi riski olan ürünlerden tamamen izole edilmiş alanlarda muhafaza ediyoruz. Pastanız, pastanın tadını taşır.",
  },
  {
    tag: "Hassas Elleçleme",
    title: "Kırılgan Ürünlere Özel Operasyon",
    text: "Donuk pastalar kırılgandır. Deneyimli depo personelimiz ve forklift altyapımızla paletleriniz sarsılmadan, zarar görmeden taşınır ve depolanır.",
  },
];

export const dessertProducts = [
  { label: "Dondurma ve Sorbe", desc: "Form bozulmadan, erime riski yaşanmadan muhafaza" },
  { label: "Donuk Pasta ve Cheesecake", desc: "Dekoru hassas, restoran ve kafelere hazır ürünler" },
  { label: "Waffle ve Sufle", desc: "Isıtılmaya hazır donuk hamur işleri" },
  { label: "Baklava ve Şerbetli Tatlılar", desc: "Tazeliğini korumak için dondurulmuş geleneksel tatlılar" },
  { label: "Pastacılık Hammaddeleri", desc: "Donuk meyve püreleri, bitkisel kremalar ve dolgu malzemeleri" },
  { label: "Et, Balık ve Deniz Ürünleri", desc: "Koku izolasyonlu ayrı odalarda güvenli muhafaza" },
];

export const dessertCallouts = [
  {
    title: "Pastane ve Kafe Zincirleri İçin Lojistik Destek",
    text: "İstanbul genelindeki şubelerinize sevk edilecek donuk ürünleriniz için merkezi konumumuzla operasyonel kolaylık sağlıyoruz. Parsiyel depolama imkânımızla küçük ölçekli butik imalathanelerin de profesyonel depo ortağıyız.",
  },
  {
    title: "Dondurma Depolamasında -25°C Güvencesi",
    text: "Dondurma sektörünün ihtiyaç duyduğu yüksek soğukluk seviyelerini, enerji kesintilerine karşı jeneratör destekli ve 7/24 izlenen odalarımızda garanti ediyoruz.",
  },
  {
    title: "Hızlı Sevkiyat Erişimi",
    text: "Tatlı sevkiyatları genelde sabah erkendir. TEM ve Kuzey Marmara Otoyolu bağlantısıyla İstanbul'un her noktasına hızlı erişim — pastanız taze, zamanında, şubede.",
  },
];

export const faqItems = [
  {
    question: "Dondurma ve donuk tatlılar depolanabilir mi?",
    answer:
      "Evet, dondurma, donuk pasta, donmuş hamur işleri ve tüm donuk tatlı ürünleri -18°C ve altı sıcaklıkta muhafaza edilmektedir. Şoklama hizmetimiz ile taze ürünleriniz de hızla dondurulabilir.",
  },
  {
    question: "Parsiyel depolama hizmeti küçük işletmeler için uygun mu?",
    answer:
      "Evet. Seval Soğuk Hava Deposu olarak ölçek gözetmeksizin hizmet veriyoruz. Küçük tatlıcı ve pastane işletmelerinden büyük üreticilere kadar ihtiyacınız olan alan kadar ödeme yaparak maliyetlerinizi optimize edebilirsiniz.",
  },
  {
    question: "Şoklama hizmeti veriliyor mu?",
    answer:
      "Evet. -40°C'ye kadar şoklama hizmetimiz ile taze pasta ve hamur işleri hücre yapısı bozulmadan hızla dondurulabilmektedir. Sezonluk üretim yapan işletmeler için idealdir.",
  },
  {
    question: "Depolama sıcaklık aralığı nedir?",
    answer:
      "Tesisimiz -40°C ile +4°C arasında farklı sıcaklık gereksinimlerine uygun depolama hizmeti sunmaktadır. Şoklama, donuk ve soğuk depolama odaları bağımsız olarak yönetilir.",
  },
  {
    question: "Palet bazlı depolama yapılıyor mu?",
    answer:
      "Evet. Euro palet uyumlu raf ve zemin depolama altyapısı ile palet bazlı ve parsiyel depolama hizmeti sunulmaktadır. Oda bazlı kiralama seçeneği de mevcuttur.",
  },
  {
    question: "Sıcaklık takibi yapılabiliyor mu?",
    answer:
      "Evet, 12 adet soğuk depo odamızın tamamı dijital sensörlerle donatılmıştır. Sıcaklık verileri geçmişe dönük olarak raporlanabilmektedir.",
  },
];

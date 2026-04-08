import logoBar from "./assets/cropped-SEVAL-DEPO-LOGO-2-scaled-1.png";
import footerBar from "./assets/contact-footer-bar.svg";
import callButton from "./assets/call-button.svg";
import coldChainIcon from "./assets/profesyonel-soguk-zincir-lojistik.svg";
import palletIcon from "./assets/pallet-bazli-depolama.svg";
import partialIcon from "./assets/parsiyel-depolama.svg";
import titleDecor from "./assets/section-title-decor.svg";
import frostyBackground from "./assets/section-frosty-background.svg";
import serviceCardBackground from "./assets/service-card-background.svg";
import snowWaveDivider from "./assets/snow-wave-divider.svg";
import servicesLayout from "./assets/services-section-layout.svg";
import heroImage from "./assets/winter-scene-warehouse-with-snow-illumination-from-bay-scaled-1.jpg";
import buildingImage from "./assets/gemini-image-2_Make_a_clean_realistic_photo_of_this_industrial_building._Keep_the_exact_proport-2.jpg";
import buildingAltImage from "./assets/gemini-image-2_Make_a_clean_realistic_photo_of_this_industrial_building._Keep_the_exact_proport-1.jpg";
import workersImage from "./assets/warehouse-workers-handling-packaged-goods-scaled.jpg";
import workerImage from "./assets/young-man-working-warehouse-with-boxes-scaled.jpg";
import frozenFoodImage from "./assets/canning-storage-food-processing-1-scaled-1.webp";
import frozenFruitImage from "./assets/macro-frozen-fruits-arrangement-scaled-1.webp";
import fishImage from "./assets/top-view-raw-fish-slices-with-ice-wood-board-tomatoes-pepper-grinder-wine-bottle-table-scaled-1-1.webp";
import image1 from "./assets/1-scaled.webp";
import image2 from "./assets/2-scaled-1.webp";
import image3 from "./assets/3-scaled.webp";
import image14 from "./assets/14.jpg";
import image18 from "./assets/18.jpg";
import image19 from "./assets/19.jpg";
import imageCd from "./assets/cd3420a3-0497-405a-a4fb-2b5a84bbd8f9-1.webp";
import imageE9 from "./assets/e9fab858-e98e-4fd4-a885-8c2520c3582c-1.webp";
import aboutInteriorImage from "./assets/WhatsApp Image 2026-04-07 at 13.56.48.jpeg";

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

export const contactInfo = {
  contactPerson: "Satış Müdürü Ertuğrul Memiş",
  phone: "90 553 406 39 24",
  phoneHref: "tel:+905534063924",
  whatsapp: "WhatsApp'tan Yazın",
  whatsappHref: "https://wa.me/905534063924",
  localPhone: "0212 609 34 34",
  localPhoneHref: "tel:+902126093434",
  email: "info@sevalgida.com.tr",
  emailHref: "mailto:info@sevalgida.com.tr",
  secondaryEmail: "ertugrulmemis@sevalgida.com.tr",
  secondaryEmailHref: "mailto:ertugrulmemis@sevalgida.com.tr",
  address: "Mahmutbey Mahallesi, Istanbul / Sultangazi",
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
    text: "Beyaz et ve kırmızı et ürünleri, süt ve süt ürünleri, donuk sebze ve meyveler, deniz ürünleri ve dondurulmuş hazır gıdalar için uygundur.",
    icon: palletIcon,
    background: serviceCardBackground,
  },
  {
    title: "Depolama Seçenekleri",
    text: "-18°C donuk depolama, +4°C soğuk depolama, palet bazlı depolama, parsiyel depolama ve oda bazlı depolama seçenekleri sunuyoruz.",
    icon: partialIcon,
    background: serviceCardBackground,
  },
  {
    title: "Operasyonel Avantajlar",
    text: "Rampalı TIR yükleme alanı, forklift destekli operasyon, deneyimli depo personeli, merkezi konum avantajı ve veteriner hekim ile gıda mühendisi desteği sağlanır.",
    icon: coldChainIcon,
    background: serviceCardBackground,
  },
];

export const homeStorageCards = [
  {
    title: "Donuk Depolama",
    text: "Et, tavuk ve hazir urunler icin planli soguk alan yonetimi.",
    image: fishImage,
  },
  {
    title: "Soguk Depolama",
    text: "Farkli urun gruplari icin kontrollu raf ve oda cozumleri.",
    image: frozenFruitImage,
  },
  {
    title: "Soklama",
    text: "Hizli isi kontrolu gereken operasyonlarda destekleyici alanlar.",
    image: image2,
  },
];

export const homeBenefits = [
  {
    title: "Merkezi Konum Avantajı",
    text: "İstanbul Sultangazi’de, TEM ve Kuzey Marmara Otoyolu (O-7) bağlantılarına yakın konumumuz sayesinde hızlı ve verimli sevkiyat imkânı sunuyoruz.",
  },
  {
    title: "Rampalı TIR Yükleme Alanı",
    text: "Soğuk zincirin korunması için planlanmış rampalı TIR yükleme alanı ile ürün giriş ve çıkışları kontrollü şekilde gerçekleştirilir.",
  },
  {
    title: "Forklift ve Yükleme Personeli",
    text: "Deneyimli depo personelimiz ve forklift altyapımız sayesinde yükleme ve elleçleme süreçleri düzenli ve güvenli şekilde yürütülür.",
  },
  {
    title: "30 Yıllık Sektör Deneyimi",
    text: "Seval Gıda’nın gıda sektöründeki uzun yıllara dayanan tecrübesi, depolama operasyonlarının güvenli ve düzenli şekilde yürütülmesine katkı sağlar.",
  },
];

export const quickAccessItems = [
  {
    label: "Mobil Hat",
    value: "90 553 406 39 24",
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
    value: "-18°C / +4°C",
    title: "Sıcaklık Kontrollü Depolama",
    text: "Farklı ürün gruplarına uygun sıcaklık aralıklarında düzenli ve güvenli muhafaza sağlanır.",
  },
  {
    value: "24/7",
    title: "24 Saat Güvenlik",
    text: "Tesis içinde ürün güvenliğini destekleyen kontrollü giriş-çıkış ve sürekli takip yapısı bulunur.",
  },
  {
    value: "SYS",
    title: "Otomasyon Destekli Takip",
    text: "Bilgisayar kontrollü operasyon akışı ile depo süreçleri planlı ve izlenebilir şekilde yürütülür.",
  },
];

export const trustItems = [
  {
    title: "Hijyen ve Gıda Güvenliği",
    text: "Operasyon dili ISO ve HACCP standartlarına uyum odağında kurgulanmıştır.",
  },
  {
    title: "Sertifika ve Belge Altyapısı",
    text: "Sertifika, uygunluk belgesi ve operasyon dokümanları için ayrı bir güven alanı hazırlandı.",
  },
  {
    title: "Gerçek Operasyon Görselleri",
    text: "Raf düzeni, palet yerleşimi ve depo içi akışı gösteren gerçek fotoğraflar öne çıkarıldı.",
  },
];

export const aboutStats = [
  { value: "2.500 m²", label: "Kapalı alan" },
  { value: "12", label: "Soğuk depo odası" },
  { value: "30+", label: "Yıllık sektör deneyimi" },
];

export const aboutGallery = [aboutInteriorImage, buildingImage, image14, image18, image19, imageCd, imageE9];

export const serviceDetails = [
  {
    title: "Donuk Depolama (-18°C / -25°C)",
    text: "Donuk et, tavuk, deniz ürünleri ve hazır gıdalar için -18°C ve altı sıcaklıklarda güvenli muhafaza sağlanır.",
    image: image1,
  },
  {
    title: "Soğuk Depolama (+4°C / -4°C)",
    text: "Süt ürünleri ve ısı hassasiyeti olan gıdalar için +4°C ve -4°C aralığında kontrollü depolama hizmeti sunulur.",
    image: image3,
  },
  {
    title: "Profesyonel Depolama Altyapısı",
    text: "Rampalı TIR yükleme alanı, forklift destekli operasyon yapısı ve deneyimli depo personeli ile ürün giriş-çıkış süreçleri güvenli şekilde yönetilmektedir. Veteriner hekim ve gıda mühendisi desteği ile hijyen ve kalite standartları korunmaktadır.",
    image: workersImage,
  },
  {
    title: "2.500 m² Depolama Alanı",
    text: "12 adet soğuk depo odası ile oda bazlı ve palet bazlı depolama imkânı sunulmaktadır. Esnek kapasite yapısı sayesinde farklı ölçeklerde firmalara çözüm sağlanır.",
    image: frozenFoodImage,
  },
];

export const pageMedia = {
  heroImage,
  buildingImage,
  buildingAltImage,
  aboutInteriorImage,
  workersImage,
  workerImage,
  fishImage,
};

export const faqItems = [
  {
    question: "Soğuk hava deposu hangi ürünler için uygundur?",
    answer:
      "Et, tavuk, süt ürünleri, deniz ürünleri, donuk sebze ve meyveler ile hazır gıdalar uygun sıcaklık koşullarında muhafaza edilmektedir.",
  },
  {
    question: "Depolama sıcaklık aralığı nedir?",
    answer:
      "Tesisimiz -40°C ile +4°C arasında farklı sıcaklık gereksinimlerine uygun depolama hizmeti sunmaktadır.",
  },
  {
    question: "Palet bazlı depolama yapılıyor mu?",
    answer:
      "Evet. Euro palet uyumlu raf ve zemin depolama altyapısı ile palet bazlı ve parsiyel depolama hizmeti sunulmaktadır.",
  },
  {
    question: "Yükleme desteği sağlanıyor mu?",
    answer:
      "Rampalı TIR yükleme alanı ve forklift destekli operasyon ile yükleme ve elleçleme işlemleri depo personelimiz tarafından yürütülmektedir.",
  },
];

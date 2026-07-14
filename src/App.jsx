import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BrandBackground } from './components/BrandBackground'
import logoRantau from './assets/logo-rantau.png'
import chefHaziq from './assets/haziq.PNG'
import dessert1 from './assets/dessert-1.PNG'
import dessert3 from './assets/dessert-3.jpg'
import dessert2 from './assets/dessert-2.PNG'
import dessert4 from './assets/dessert-4.PNG'

const BACKGROUND_MUSIC = '/song/Instrumental Music.m4a'

function pick(copy, lang) {
  return copy[lang] ?? copy.en
}

const navItems = [
  { id: 'about', en: 'About', ms: 'Tentang' },
  { id: 'services', en: 'Services', ms: 'Perkhidmatan' },
  { id: 'testimonials', en: 'Testimonials', ms: 'Testimoni' },
  { id: 'gallery', en: 'Gallery', ms: 'Galeri' },
  { id: 'faq', en: 'FAQ', ms: 'Soalan Lazim' },
  { id: 'contact', en: 'Contact', ms: 'Hubungi' },
]

const rantauDifferentiators = [
  { en: 'Private dining', ms: 'Makan malam peribadi' },
  { en: 'Modern Malaysian cuisine', ms: 'Masakan Malaysia moden' },
  { en: 'Signature mocktail pairing', ms: 'Pasangan mocktail signature' },
  { en: 'Personal chef experience', ms: 'Pengalaman chef peribadi' },
  { en: 'Fresh ingredients', ms: 'Bahan-bahan segar' },
  { en: 'Perfect for special occasions', ms: 'Sesuai untuk acara khas' },
]

const experienceTimeline = [
  { en: 'Booking', ms: 'Tempahan' },
  { en: 'Menu discussion', ms: 'Perbincangan menu' },
  { en: 'Confirmation', ms: 'Pengesahan' },
  { en: 'Chef arrives', ms: 'Chef tiba' },
  { en: 'Private dining experience', ms: 'Pengalaman makan malam peribadi' },
  { en: 'Cleanup', ms: 'Pembersihan' },
]

const bookingProcess = [
  { en: 'Choose your preferred date', ms: 'Pilih tarikh pilihan anda' },
  { en: 'Submit your enquiry', ms: 'Hantar pertanyaan anda' },
  { en: 'Consultation', ms: 'Perundingan' },
  { en: '50% deposit', ms: 'Deposit 50%' },
  { en: 'Booking confirmed', ms: 'Tempahan disahkan' },
]

const termsContent = {
  reservation: [
    {
      en: '50% deposit required',
      ms: 'Deposit 50% diperlukan',
    },
    {
      en: 'Reservation confirmed only after deposit received',
      ms: 'Tempahan disahkan hanya selepas deposit diterima',
    },
  ],
  cancellation: [
    {
      en: 'Deposit is non-refundable',
      ms: 'Deposit tidak boleh dikembalikan',
    },
    {
      en: 'One date reschedule allowed with minimum 7 days notice',
      ms: 'Satu pertukaran tarikh dibenarkan dengan notis minimum 7 hari',
    },
  ],
}

const reservationPolicies = [
  {
    en: 'Maximum capacity: up to 5 guests per dining experience.',
    ms: 'Kapasiti maksimum: sehingga 5 tetamu setiap pengalaman makan.',
  },
  {
    en: 'Minimum booking: 14 days before the event.',
    ms: 'Tempahan minimum: 14 hari sebelum acara.',
  },
  {
    en: 'Last-minute booking: 7–13 days before the event, subject to availability.',
    ms: 'Tempahan saat akhir: 7–13 hari sebelum acara, tertakuk kepada ketersediaan.',
  },
  {
    en: 'Bookings less than 7 days before the event are not accepted.',
    ms: 'Tempahan kurang daripada 7 hari sebelum acara tidak diterima.',
  },
]

// const pricingItems = [
//   'RM265 per guest — available for reservations of 4–5 guests.',
//   'Private Dining for 1–3 guests: a minimum booking value of RM1,060 applies to ensure the same carefully curated dining experience and level of service.',
//   'Maximum capacity: up to 5 guests per dining experience.',
//   'Recommended for groups of 4–5 guests for the best dining experience.',
// ]

const galleryImages = [
  {
    src: dessert1,
    alt: { en: 'Rantau dessert course', ms: 'Hidangan pencuci mulut Rantau' },
  },
  {
    src: dessert3,
    alt: { en: 'Rantau plated dessert', ms: 'Pencuci mulut Rantau dihidang' },
  },
  {
    src: dessert2,
    alt: { en: 'Rantau dessert presentation', ms: 'Persembahan pencuci mulut Rantau' },
  },
  {
    src: dessert4,
    alt: { en: 'Rantau dessert detail', ms: 'Perincian pencuci mulut Rantau' },
  },
]

const clientVideos = [
  {
    src: '/videos/vidclient-cp.mp4',
    title: { en: 'Dinner ', ms: 'Makan malam' },
  },
  {
    src: '/videos/vidclient-cp-3.mp4',
    title: { en: 'Dinner ', ms: 'Makan malam' },
  },
  {
    src: '/videos/vidclient-cp-4.mp4',
    title: { en: 'Dinner ', ms: 'Makan malam' },
  },
  {
    src: '/videos/vidclient-cp-5.mp4',
    title: { en: 'Dinner ', ms: 'Makan malam' },
  },
  {
    src: '/videos/vidclient-cp-6.mp4',
    title: { en: 'Dinner ', ms: 'Makan malam' },
  },
]

const heroCopy = {
  title: {
    en: 'A journey of malay flavours.',
    ms: 'Satu perjalanan cita rasa Malaysia.',
  },
  sub: {
    en: 'Rantau by chef haziq brings modern Malaysian cuisine into a private dining experience,carefully curated with seasonal ingredients ,refined techniques and personalised hospitality.',
    ms: 'Rantau oleh Chef Haziq membawakan hidangan Malaysia moden ke dalam pengalaman menjamu selera yang eksklusif, yang disusun rapi menggunakan bahan-bahan bermusim, teknik penyediaan yang halus, serta layanan yang diperibadikan.',
  },
}

const heroSlideImages = [
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=80',
  '/dessert-3.PNG',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80',
]

const WHATSAPP_NUMBER = '60172046561'
const SLIDE_INTERVAL_MS = 5000

const themeOptions = [
  { value: 'Birthday', en: 'Birthday', ms: 'Hari Jadi' },
  { value: 'Wedding', en: 'Wedding', ms: 'Perkahwinan' },
  { value: 'Private Meeting', en: 'Private Meeting', ms: 'Mesyuarat Peribadi' },
  { value: 'Anniversary', en: 'Anniversary', ms: 'Ulang Tahun' },
  { value: 'Corporate', en: 'Corporate', ms: 'Korporat' },
  { value: 'Family Gathering', en: 'Family Gathering', ms: 'Perhimpunan Keluarga' },
  { value: 'Other', en: 'Other', ms: 'Lain-lain' },
]

const uiCopy = {
  en: {
    bookNav: 'Booking',
    heroKicker: 'A Journey of Malay Flavours',
    heroTitle: 'Private Dining, Crafted With Heritage & Heart',
    heroSub:
      'Rantau by Chef Haziq brings refined Malay cuisine to your table — bespoke menus, elegant plating, and intimate dining for homes, celebrations, and executive gatherings.',
    viewMenu: 'View Gallery',
    bookNow: 'Book Now',
    heroCta: 'Ready to experience Malaysian fine dining like never before?',
    sectionKicker: 'Rantau',
    contactTitle: 'Ready to experience Malay private dining like never before.',
    contactSub:
      'Fill in the details below — your enquiry will be sent to us via WhatsApp, ready for Chef Haziq to review.',
    formName: 'Name',
    formDestination: 'Destination',
    formMenu: 'Menu',
    formMenuPlaceholder: 'Preferred dishes or menu package',
    formPax: 'Pax',
    formDate: 'Date',
    formTheme: 'Theme',
    formThemePlaceholder: 'Select occasion',
    formSubmit: 'Send via WhatsApp',
    formRequired: 'Please fill in all required fields.',
    formWhatsappHint:
      'After you submit, WhatsApp opens with your details pre-filled. Tap Send to complete your enquiry.',
    whatsappMessageTitle: 'RANTAU BY CHEF HAZIQ — Reservation Enquiry',
    galleryVideosTitle: 'Watch the experience',
    galleryVideosSub: 'Real moments from Rantau private dining — swipe or use arrows to browse, then click to play.',
    clickToPlay: 'Click to play',
    videoPrev: 'Previous video',
    videoNext: 'Next video',
    scrollToTop: 'Scroll to top',
    pauseMusic: 'Pause music',
    playMusic: 'Play music',
    loading: 'Loading…',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    whatsappFloat: 'WhatsApp',
    footerRights: 'All rights reserved.',
    directContact: 'Direct Contact',
    reservationPolicyTitle: 'Reservation Policy',
    aboutTitle: 'About Chef',
    aboutMeetChef: 'Meet Chef Haziq',
    aboutP1:
      'Chef Haziq began his culinary journey in some of Malaysia’s most demanding professional kitchens, including luxury five-star hotels and a Michelin restaurant. These experiences shaped his discipline, attention to detail, and appreciation for refined dining.',
    aboutP2:
      'Driven by a passion for Malaysian cuisine, he founded RANTAU to present familiar local flavours through a contemporary lens. Each menu is carefully curated to honour tradition while embracing modern techniques, allowing every guest to experience Malaysia in a new and memorable way.',
    aboutP3:
      'Every dinner is personally planned, prepared, and presented by Chef Haziq, ensuring an intimate dining experience where every course reflects craftsmanship, hospitality, and the rich diversity of Malaysian flavours.',
    cuisineFocusLabel: 'Cuisine Focus',
    cuisineFocusValue: 'Malaysian Contemporary Cuisine',
    servicesTitle: 'What Makes Rantau Different',
    timelineTitle: 'The Timeline',
    bookingTitle: 'Booking Process',
    termsTitle: 'Terms & Conditions',
    termsReservation: 'Reservation',
    termsCancellation: 'Cancellation',
    testimonialsTitle: 'Trusted by Premium Clients',
    galleryTitle: 'Gallery',
    experienceMenuTitle: 'The RANTAU Experience ⭐',
    experienceMenuText:
      'A thoughtfully curated tasting menu that showcases Chef Haziq’s interpretation of Malaysian flavours. For the best dining experience, we highly recommend this menu.',
    customExperienceTitle: 'Custom Experience',
    customExperienceText:
      'Looking for something more personal? We can tailor the menu to suit your preferences and dietary requirements with prior discussion.',
    faqTitle: 'Frequently Asked Questions',
    formPaxPlaceholder: 'e.g. 8',
    whatsappPrefill: 'Hi, I would like to enquire about Rantau private dining.',
    whatsappContact: 'WhatsApp: 017-204 6561',
    instagramContact: 'Instagram: @rantau.privatedining',
    tiktokContact: 'TikTok: RANTAU Private Dining',
    chefPhotoAlt: 'Chef Haziq',
    logoHeroAlt: 'Rantau by Chef Haziq — A Journey of Malay Flavours, Private Dining',
    goToSlide: (n) => `Go to slide ${n}`,
    goToVideo: (n) => `Go to video ${n}`,
    viewVideo: (title) => `View video: ${title}`,
  },
  ms: {
    bookNav: 'Tempahan',
    heroKicker: 'Perjalanan Citarasa Melayu',
    heroTitle: 'Makan Malam Peribadi, Dicipta Dengan Warisan & Kasih',
    heroSub:
      'Rantau by Chef Haziq membawa masakan Melayu yang halus ke meja anda — menu khas, hidangan elegan, dan pengalaman makan malam peribadi untuk rumah, sambutan, dan mesyuarat eksekutif.',
    viewMenu: 'Lihat Galeri',
    bookNow: 'Tempah Sekarang',
    heroCta: 'Bersedia untuk merasai hidangan Malaysia moden yang tiada tandingan?',
    sectionKicker: 'Rantau',
    contactTitle: 'Bersedia untuk menikmati pengalaman santapan peribadi Melayu yang belum pernah anda rasai sebelum ini.',
    contactSub:
      'Isi butiran di bawah — pertanyaan anda akan dihantar melalui WhatsApp untuk semakan Chef Haziq.',
    formName: 'Nama',
    formDestination: 'Destinasi',
    formMenu: 'Menu',
    formMenuPlaceholder: 'Hidangan pilihan atau pakej menu',
    formPax: 'Bilangan Tetamu',
    formDate: 'Tarikh',
    formTheme: 'Tema',
    formThemePlaceholder: 'Pilih majlis',
    formSubmit: 'Hantar melalui WhatsApp',
    formRequired: 'Sila isi semua ruangan wajib.',
    formWhatsappHint:
      'Selepas hantar, WhatsApp akan dibuka dengan butiran anda. Tekan Send untuk melengkapkan pertanyaan.',
    whatsappMessageTitle: 'RANTAU BY CHEF HAZIQ — Pertanyaan Tempahan',
    galleryVideosTitle: 'Tonton pengalaman',
    galleryVideosSub: 'Detik sebenar makan malam peribadi Rantau — leret atau guna anak panah, kemudian klik untuk main.',
    clickToPlay: 'Klik untuk main',
    videoPrev: 'Video sebelum',
    videoNext: 'Video seterusnya',
    scrollToTop: 'Tatal ke atas',
    pauseMusic: 'Jeda muzik',
    playMusic: 'Main muzik',
    loading: 'Memuatkan…',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
    whatsappFloat: 'WhatsApp',
    footerRights: 'Hak cipta terpelihara.',
    directContact: 'Hubungi Terus',
    reservationPolicyTitle: 'Polisi Tempahan',
    aboutTitle: 'Tentang Chef',
    aboutMeetChef: 'Kenali Chef Haziq',
    aboutP1:
      'Chef Haziq memulakan perjalanan kulinari di dapur profesional paling mencabar di Malaysia, termasuk hotel lima bintang mewah dan restoran Michelin. Pengalaman ini membentuk disiplin, perhatian terhadap perincian, dan penghargaan terhadap hidangan yang halus.',
    aboutP2:
      'Didorong oleh minat terhadap masakan Malaysia, beliau mengasaskan RANTAU untuk mempersembahkan citarasa tempatan yang familiar melalui sudut moden. Setiap menu disusun dengan teliti untuk menghormati tradisi sambil merangkul teknik moden, membolehkan setiap tetamu merasai Malaysia dengan cara yang baharu dan tidak dapat dilupakan.',
    aboutP3:
      'Setiap makan malam dirancang, disediakan, dan dihidang secara peribadi oleh Chef Haziq, memastikan pengalaman makan yang intim di mana setiap hidangan mencerminkan kemahiran, layanan, dan kepelbagaian citarasa Malaysia.',
    cuisineFocusLabel: 'Fokus Masakan',
    cuisineFocusValue: 'Masakan Kontemporari Malaysia',
    servicesTitle: 'Apa Yang Membezakan Rantau',
    timelineTitle: 'Garis Masa',
    bookingTitle: 'Proses Tempahan',
    termsTitle: 'Terma & Syarat',
    termsReservation: 'Tempahan',
    termsCancellation: 'Pembatalan',
    testimonialsTitle: 'Dipercayai oleh Pelanggan Premium',
    galleryTitle: 'Galeri',
    experienceMenuTitle: 'Pengalaman RANTAU ⭐',
    experienceMenuText:
      'Satu menu sajian rasa yang disusun dengan teliti, menampilkan interpretasi Chef Haziq terhadap cita rasa Malaysia. Kami amat mengesyorkan menu ini untuk pengalaman menjamu selera yang terbaik.',
    customExperienceTitle: 'Pengalaman Khas',
    customExperienceText:
      'Mahukan sesuatu yang lebih peribadi? Kami boleh menyesuaikan menu mengikut pilihan dan keperluan diet anda melalui perbincangan awal.',
    faqTitle: 'Soalan Lazim',
    formPaxPlaceholder: 'cth. 8',
    whatsappPrefill: 'Hai, saya ingin bertanya tentang makan malam peribadi Rantau.',
    whatsappContact: 'WhatsApp: 017-204 6561',
    instagramContact: 'Instagram: @rantau.privatedining',
    tiktokContact: 'TikTok: RANTAU Private Dining',
    chefPhotoAlt: 'Chef Haziq',
    logoHeroAlt: 'Rantau by Chef Haziq — Perjalanan Citarasa Melayu, Makan Malam Peribadi',
    goToSlide: (n) => `Pergi ke slaid ${n}`,
    goToVideo: (n) => `Pergi ke video ${n}`,
    viewVideo: (title) => `Lihat video: ${title}`,
  },
}

const testimonials = [
  {
    name: 'Amina R.',
    review: {
      en: 'Every dish served was a winner and packed with flavor. The vibe was like having a Michelin-standard dinner at home.',
      ms: 'Setiap hidangan dihidang memang win dan penuh rasa. Vibe dia seperti makan malam bertaraf Michelin di rumah.',
    },
  },
  {
    name: 'Harith ',
    review: {
      en: 'Chef service for our executive dinner was flawless. Seamless setup, outstanding taste, premium hospitality.',
      ms: 'Perkhidmatan chef untuk makan malam eksekutif kami sangat sempurna. Persediaan lancar, rasa hebat, layanan premium.',
    },
  },
  {
    name: 'Nadia ',
    review: {
      en: 'From menu customization to final dessert, the experience was intimate, elegant, and unforgettable.',
      ms: 'Dari penyesuaian menu hingga pencuci mulut terakhir, pengalaman itu intim, elegan, dan tidak dapat dilupakan.',
    },
  },
]

const faqs = [
  {
    q: { en: 'Do you travel outside KL?', ms: 'Adakah anda berkhidmat di luar KL?' },
    a: {
      en: 'Complimentary travel within Kuala Lumpur and selected nearby areas in Selangor. We are not cover out of Kuala Lumpur and Selangor. Please contact to confirm your location.',
      ms: 'Perjalanan percuma dalam Kuala Lumpur dan kawasan terpilih di Selangor. Tidak beroperasi diluar Kuala Lumpur dan Selangor. Sila hubungi kami untuk mengesahkan lokasi anda.',
    },
  },
  {
    q: { en: 'Can I request menu changes?', ms: 'Bolehkah saya minta perubahan menu?' },
    a: {
      en: 'My signature four-course menu is recommended for the best dining experience. Custom menus are available upon request and will be quoted separately based on your preferences and ingredient selection.',
      ms: 'Menu empat hidangan signature saya disyorkan untuk pengalaman makan terbaik. Menu khas tersedia atas permintaan dan akan disebut harga secara berasingan mengikut pilihan dan bahan anda.',
    },
  },
  {
    q: { en: 'How does private dining works?', ms:'Bagaimanakah konsep makan secara peribadi berfungsi?'},
    a: {
      en: 'Once your booking is confirmed, I’ll handle everything from ingredient sourcing and preparation to cooking, plating, and kitchen cleanup. I typically arrive at your home around 4–5 hours before the dining experience to prepare everything fresh on-site. All you need to do is relax and enjoy a restaurant-quality dining experience in the comfort of your own home.'},
      ms: 'Sebaik sahaja tempahan anda disahkan, saya akan menguruskan segala-galanya—daripada mendapatkan dan menyediakan bahan-bahan hinggalah kepada proses memasak, menghidang, serta mengemas dapur. Biasanya, saya akan tiba di kediaman anda kira-kira 4 hingga 5 jam sebelum waktu makan untuk menyediakan segala hidangan secara segar di lokasi. Anda hanya perlu berehat dan menikmati pengalaman menjamu selera bertaraf restoran dalam keselesaan kediaman anda sendiri.'},
  
  {
    q: { en: 'How long is the dinner?', ms: 'Berapa lama tempoh makan malam?' },
    a: {
      en: 'The experience typically lasts around 1.5 hours, depending on the pace of service and your dining preferences. In some cases, it may be completed in about 1 hour if everything runs smoothly.',
      ms: 'Pengalaman ini biasanya mengambil masa kira-kira 1.5 jam, bergantung pada rentak hidangan dan pilihan anda. Dalam sesetengah kes, ia boleh siap dalam kira-kira 1 jam jika semuanya berjalan lancar.',
    },
  },
  {
    q: { en: 'What if I have allergies?', ms: 'Bagaimana jika saya ada alahan?' },
    a: {
      en: 'Please let me know in advance, and I’ll do my best to accommodate your dietary requirements or allergies. Minor adjustments are usually included, while more extensive menu changes may require a revised quotation.',
      ms: 'Sila maklumkan lebih awal, dan saya akan cuba sedaya upaya untuk menyesuaikan keperluan diet atau alahan anda. Pelarasan kecil biasanya disertakan, manakala perubahan menu yang lebih meluas mungkin memerlukan sebut harga baharu.',
    },
  },
]

const stats = [
  { label: 'Events Delivered', value: '480+' },
  { label: 'Years Experience', value: '12' },
  { label: 'Happy Clients', value: '1.2K+' },
  { label: 'Awards', value: '9' },
]

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function ReservationForm({ lang, t }) {
  const [form, setForm] = useState({
    name: '',
    destination: '',
    menu: '',
    pax: '',
    date: '',
    theme: '',
  })
  const [error, setError] = useState('')

  const inputClass =
    'w-full rounded-xl border border-[#c4a35a]/30 bg-[#121110]/60 px-4 py-3 text-[#f5eed8] placeholder:text-neutral-500 focus:border-rantau-gold focus:outline-none focus:ring-1 focus:ring-rantau-gold/40'

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (error) setError('')
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!form.name.trim() || !form.destination.trim() || !form.pax || !form.date || !form.theme) {
      setError(t.formRequired)
      return
    }

    const themeLabel =
      themeOptions.find((option) => option.value === form.theme)?.[lang === 'ms' ? 'ms' : 'en'] ||
      form.theme

    const message = [
      `*${t.whatsappMessageTitle}*`,
      '',
      `*${t.formName}:* ${form.name.trim()}`,
      `*${t.formDestination}:* ${form.destination.trim()}`,
      `*${t.formMenu}:* ${form.menu.trim() || '—'}`,
      `*${t.formPax}:* ${form.pax}`,
      `*${t.formDate}:* ${form.date}`,
      `*${t.formTheme}:* ${themeLabel}`,
    ].join('\n')

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-sm font-medium text-[#e8d4a8]">
            {t.formName} <span className="text-rantau-gold">*</span>
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder={t.formName}
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-[#e8d4a8]">
            {t.formDestination} <span className="text-rantau-gold">*</span>
          </span>
          <input
            type="text"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder={t.formDestination}
          />
        </label>

        <label className="block space-y-2 sm:col-span-2">
          <span className="text-sm font-medium text-[#e8d4a8]">{t.formMenu}</span>
          <textarea
            name="menu"
            value={form.menu}
            onChange={handleChange}
            rows={3}
            className={`${inputClass} resize-y`}
            placeholder={t.formMenuPlaceholder}
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-[#e8d4a8]">
            {t.formPax} <span className="text-rantau-gold">*</span>
          </span>
          <input
            type="number"
            name="pax"
            value={form.pax}
            onChange={handleChange}
            min={1}
            required
            className={inputClass}
            placeholder={t.formPaxPlaceholder}
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-[#e8d4a8]">
            {t.formDate} <span className="text-rantau-gold">*</span>
          </span>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className={`${inputClass} [color-scheme:dark]`}
          />
        </label>

        <label className="block space-y-2 sm:col-span-2">
          <span className="text-sm font-medium text-[#e8d4a8]">
            {t.formTheme} <span className="text-rantau-gold">*</span>
          </span>
          <select
            name="theme"
            value={form.theme}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">{t.formThemePlaceholder}</option>
            {themeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option[lang === 'ms' ? 'ms' : 'en']}
              </option>
            ))}
          </select>
        </label>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 font-medium text-white transition hover:scale-[1.02] hover:bg-emerald-500 sm:w-auto"
      >
        <span>{t.formSubmit}</span>
      </button>
    </form>
  )
}

function enforceVideoMuted(video) {
  if (!video) return
  video.muted = true
  video.defaultMuted = true
  video.volume = 0
}

function VideoPreviewCard({ src, title, onSelect, position, loadingLabel, viewVideoLabel }) {
  const videoRef = useRef(null)
  const [thumbnailReady, setThumbnailReady] = useState(false)

  useEffect(() => {
    setThumbnailReady(false)
    const video = videoRef.current
    if (!video) return

    function primeThumbnail() {
      video.currentTime = Math.min(0.5, video.duration || 0.5)
    }

    function handleSeeked() {
      setThumbnailReady(true)
    }

    function handleLoadedMetadata() {
      primeThumbnail()
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('seeked', handleSeeked)
    video.load()
    enforceVideoMuted(video)

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('seeked', handleSeeked)
    }
  }, [src])

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group w-full overflow-hidden rounded-xl border border-[#c4a35a]/20 bg-[#1a1816]/60 text-left backdrop-blur-sm transition hover:border-rantau-gold/50 hover:bg-[#1a1816]/80 ${
        position === 'left' ? 'origin-right' : 'origin-left'
      }`}
      aria-label={viewVideoLabel(title)}
    >
      <div className="relative h-[160px] w-full overflow-hidden bg-[#0d0c0b] sm:h-[220px] md:h-[300px] lg:h-[360px]">
        <video
          key={src}
          ref={videoRef}
          src={src}
          className="video-no-volume h-full w-full object-contain opacity-80 transition group-hover:opacity-100"
          playsInline
          muted
          defaultMuted
          preload="metadata"
          tabIndex={-1}
          onVolumeChange={(e) => enforceVideoMuted(e.currentTarget)}
        />
        {!thumbnailReady && (
          <span className="absolute inset-0 flex items-center justify-center text-xs text-neutral-500">
            {loadingLabel}
          </span>
        )}
      </div>
      <p className="truncate px-3 py-2 text-xs font-medium text-neutral-400 group-hover:text-[#e8d4a8]">
        {title}
      </p>
    </button>
  )
}

function ClientVideo({ src, title, clickLabel, isActive = true, loadingLabel }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [thumbnailReady, setThumbnailReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    function primeThumbnail() {
      video.currentTime = Math.min(0.5, video.duration || 0.5)
    }

    function handleSeeked() {
      setThumbnailReady(true)
    }

    function handleLoadedMetadata() {
      primeThumbnail()
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('seeked', handleSeeked)

    if (video.readyState >= 1) {
      primeThumbnail()
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('seeked', handleSeeked)
    }
  }, [src])

  useEffect(() => {
    const video = videoRef.current
    if (!video || isActive) return

    video.pause()
    setPlaying(false)
  }, [isActive])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    function keepMuted() {
      enforceVideoMuted(video)
    }

    video.addEventListener('volumechange', keepMuted)
    enforceVideoMuted(video)

    return () => {
      video.removeEventListener('volumechange', keepMuted)
    }
  }, [src, playing])

  function handlePlay() {
    const video = videoRef.current
    if (!video) return

    setPlaying(true)
    enforceVideoMuted(video)
    video.currentTime = 0
    requestAnimationFrame(() => {
      video.play()
    })
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-[#c4a35a]/25 bg-[#1a1816]/70 backdrop-blur-sm">
      <div className="relative h-[220px] w-full overflow-hidden bg-[#0d0c0b] sm:h-[300px] md:h-[400px] lg:h-[480px]">
        <video
          ref={videoRef}
          className="video-no-volume h-full w-full object-contain"
          controls={playing}
          controlsList="nodownload noremoteplayback"
          playsInline
          muted
          defaultMuted
          preload="metadata"
          onVolumeChange={(e) => enforceVideoMuted(e.currentTarget)}
        >
          <source src={src} type="video/mp4" />
        </video>

        {!playing && (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#121110]/30 transition hover:bg-[#121110]/20"
            aria-label={`${clickLabel}: ${title}`}
          >
            {!thumbnailReady && (
              <span className="text-xs uppercase tracking-widest text-neutral-400">{loadingLabel}</span>
            )}
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-rantau-gold/95 text-2xl text-neutral-900 shadow-lg backdrop-blur-sm md:h-20 md:w-20 md:text-3xl">
              ▶
            </span>
            <span className="text-sm font-medium tracking-wide text-[#e8d4a8]">{clickLabel}</span>
          </button>
        )}
      </div>
      <p className="px-4 py-3 text-sm font-medium text-[#f5eed8]">{title}</p>
    </article>
  )
}

function VideoCarousel({ videos, lang, clickLabel, prevLabel, nextLabel, loadingLabel, goToVideoLabel, viewVideoLabel }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef(null)
  const count = videos.length

  function goTo(index) {
    setActiveIndex((index + count) % count)
  }

  function goNext() {
    goTo(activeIndex + 1)
  }

  function goPrev() {
    goTo(activeIndex - 1)
  }

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext()
      else goPrev()
    }
    touchStartX.current = null
  }

  const prevIndex = (activeIndex - 1 + count) % count
  const nextIndex = (activeIndex + 1) % count
  const centerVideo = videos[activeIndex]
  const prevVideo = videos[prevIndex]
  const nextVideo = videos[nextIndex]

  return (
    <div
      className="relative left-1/2 mt-6 w-[min(100vw-2.5rem,1400px)] -translate-x-1/2 px-2 sm:px-8"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {count > 1 ? (
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)_minmax(0,1fr)] items-end gap-3 sm:gap-5 md:gap-8">
          <VideoPreviewCard
            key={`left-${prevVideo.src}`}
            src={prevVideo.src}
            title={prevVideo.title[lang]}
            onSelect={() => goTo(prevIndex)}
            position="left"
            loadingLabel={loadingLabel}
            viewVideoLabel={viewVideoLabel}
          />

          <div className="z-10 rounded-2xl shadow-[0_8px_32px_rgba(196,163,90,0.12)] ring-2 ring-rantau-gold/35">
            <ClientVideo
              key={centerVideo.src}
              src={centerVideo.src}
              title={centerVideo.title[lang]}
              clickLabel={clickLabel}
              isActive
              loadingLabel={loadingLabel}
            />
          </div>

          <VideoPreviewCard
            key={`right-${nextVideo.src}`}
            src={nextVideo.src}
            title={nextVideo.title[lang]}
            onSelect={() => goTo(nextIndex)}
            position="right"
            loadingLabel={loadingLabel}
            viewVideoLabel={viewVideoLabel}
          />
        </div>
      ) : (
        <ClientVideo
          src={centerVideo.src}
          title={centerVideo.title[lang]}
          clickLabel={clickLabel}
          isActive
          loadingLabel={loadingLabel}
        />
      )}

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label={prevLabel}
            className="absolute left-0 top-[38%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#c4a35a]/50 bg-[#121110]/85 text-lg text-[#e8d4a8] backdrop-blur-sm transition hover:bg-[#121110] sm:h-11 sm:w-11"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label={nextLabel}
            className="absolute right-0 top-[38%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#c4a35a]/50 bg-[#121110]/85 text-lg text-[#e8d4a8] backdrop-blur-sm transition hover:bg-[#121110] sm:h-11 sm:w-11"
          >
            ›
          </button>

          <div className="mt-5 flex items-center justify-center gap-2">
            {videos.map((video, index) => (
              <button
                key={video.src}
                type="button"
                aria-label={goToVideoLabel(index + 1)}
                aria-current={activeIndex === index ? 'true' : undefined}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-8 bg-rantau-gold' : 'w-2 bg-white/35 hover:bg-white/55'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function BulletList({ items, lang }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 text-neutral-400">
          <span className="mt-0.5 shrink-0 text-rantau-gold">—</span>
          <span>{pick(item, lang)}</span>
        </li>
      ))}
    </ul>
  )
}

function StepList({ items, lang }) {
  return (
    <ol className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c4a35a]/40 bg-[#1a1816]/80 text-sm font-semibold text-rantau-gold">
            {index + 1}
          </span>
          <span className="pt-1 text-neutral-400">{pick(item, lang)}</span>
        </li>
      ))}
    </ol>
  )
}

function Section({ id, title, subtitle, children, kicker = 'Rantau' }) {
  return (
    <motion.section
      id={id}
      className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8"
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rantau-gold">
          {kicker}
        </p>
        <h2 className="font-brand mt-3 text-3xl font-semibold tracking-tight text-[#f5eed8] md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-full text-justify text-neutral-400">{subtitle}</p>
        )}
      </div>
      {children}
    </motion.section>
  )
}

function HeroSection({ lang, t }) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlideImages.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="relative min-h-[92vh] overflow-hidden border-b border-[#c4a35a]/20">
      {heroSlideImages.map((image, index) => (
        <motion.img
          key={image}
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          animate={{
            opacity: activeSlide === index ? 1 : 0,
            scale: activeSlide === index ? 1 : 1.05,
          }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      ))}
      <div className="absolute inset-0 bg-[#121110]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#121110]/90 via-[#121110]/60 to-[#121110]/80" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center gap-10 px-5 py-20 md:flex-row md:gap-16 md:px-8">
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src={logoRantau}
            alt={t.logoHeroAlt}
            className="mx-auto w-[min(88vw,340px)] drop-shadow-[0_8px_32px_rgba(196,163,90,0.25)] md:w-[380px]"
          />
        </motion.div>

        <div className="max-w-xl text-center md:text-left">
          <div>
            <h1 className="font-brand text-4xl font-semibold leading-tight text-white md:text-5xl">
              {heroCopy.title[lang]}
            </h1>
            <p className="mt-6 text-base text-white/80 md:text-lg">{heroCopy.sub[lang]}</p>
          </div>

          <p className="font-brand mt-8 text-lg text-[#e8d4a8] md:text-xl">{t.heroCta}</p>

          <div className="mt-5 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#gallery"
              className="rounded-full bg-rantau-gold px-6 py-3 font-medium text-neutral-900 transition hover:scale-105 hover:bg-[#e8d4a8]"
            >
              {t.viewMenu}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[#c4a35a]/70 px-6 py-3 font-medium text-[#e8d4a8] transition hover:scale-105 hover:bg-[#c4a35a]/15"
            >
              {t.bookNow}
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 md:justify-start">
            {heroSlideImages.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={t.goToSlide(index + 1)}
                aria-current={activeSlide === index ? 'true' : undefined}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? 'w-8 bg-rantau-gold'
                    : 'w-2 bg-white/35 hover:bg-white/55'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LanguageToggle({ lang, onChange, dark = false }) {
  return (
    <div
      className={`flex rounded-full border p-0.5 text-xs font-semibold ${
        dark
          ? 'border-[#c4a35a]/30 bg-neutral-900/60'
          : 'border-neutral-200 bg-neutral-50'
      }`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => onChange('en')}
        className={`rounded-full px-3 py-1.5 transition ${
          lang === 'en'
            ? dark
              ? 'bg-rantau-gold text-neutral-900 shadow-sm'
              : 'bg-white text-neutral-900 shadow-sm'
            : dark
              ? 'text-neutral-400 hover:text-[#e8d4a8]'
              : 'text-neutral-500 hover:text-neutral-800'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onChange('ms')}
        className={`rounded-full px-3 py-1.5 transition ${
          lang === 'ms'
            ? dark
              ? 'bg-rantau-gold text-neutral-900 shadow-sm'
              : 'bg-white text-neutral-900 shadow-sm'
            : dark
              ? 'text-neutral-400 hover:text-[#e8d4a8]'
              : 'text-neutral-500 hover:text-neutral-800'
        }`}
      >
        BM
      </button>
    </div>
  )
}

function BackgroundMusic({ pauseLabel, playLabel }) {
  const audioRef = useRef(null)
  const startedRef = useRef(false)
  const userPausedRef = useRef(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return undefined

    audio.volume = 0.45
    audio.loop = true

    function removeListeners() {
      document.removeEventListener('click', tryPlay)
      document.removeEventListener('touchstart', tryPlay)
      document.removeEventListener('keydown', tryPlay)
    }

    async function tryPlay() {
      if (startedRef.current || userPausedRef.current) return

      try {
        await audio.play()
        startedRef.current = true
        removeListeners()
      } catch {
        // Autoplay blocked — retry on first user interaction
      }
    }

    function handlePlay() {
      setPlaying(true)
    }

    function handlePause() {
      setPlaying(false)
    }

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    tryPlay()
    document.addEventListener('click', tryPlay)
    document.addEventListener('touchstart', tryPlay)
    document.addEventListener('keydown', tryPlay)

    return () => {
      removeListeners()
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.pause()
    }
  }, [])

  async function toggleMusic() {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      userPausedRef.current = false
      try {
        await audio.play()
        startedRef.current = true
      } catch {
        // Playback blocked
      }
    } else {
      userPausedRef.current = true
      audio.pause()
    }
  }

  return (
    <>
      <audio ref={audioRef} src={BACKGROUND_MUSIC} preload="auto" aria-hidden="true" />
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={playing ? pauseLabel : playLabel}
        className="fixed bottom-20 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#c4a35a]/50 bg-[#121110]/90 text-[#e8d4a8] shadow-lg backdrop-blur-sm transition hover:border-rantau-gold hover:bg-[#121110] hover:text-rantau-gold"
      >
        {playing ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
          </svg>
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        )}
      </button>
    </>
  )
}

function ScrollToTopButton({ label }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#c4a35a]/50 bg-[#121110]/90 text-[#e8d4a8] shadow-lg backdrop-blur-sm transition hover:border-rantau-gold hover:bg-[#121110] hover:text-rantau-gold"
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const [lang, setLang] = useState('en')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.lang = lang === 'ms' ? 'ms' : 'en'
  }, [lang])

  useEffect(() => {
    if (!mobileMenuOpen) return undefined

    function onKeyDown(e) {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileMenuOpen])

  const t = uiCopy[lang]

  return (
    <BrandBackground className="min-h-screen text-neutral-300">
      <BackgroundMusic pauseLabel={t.pauseMusic} playLabel={t.playMusic} />
      <header className="sticky top-0 z-40 border-b border-[#c4a35a]/20 bg-[#121110]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 md:px-8">
          <a href="#hero" className="flex shrink-0 items-center gap-3">
            <img
              src={logoRantau}
              alt="Rantau by Chef Haziq"
              className="h-12 w-12 rounded-sm object-cover md:h-14 md:w-14"
            />
            <span className="hidden font-brand text-lg font-semibold tracking-[0.12em] text-[#e8d4a8] sm:block">
              RANTAU
            </span>
          </a>
          <ul className="hidden gap-5 text-sm text-neutral-300 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition hover:text-rantau-gold">
                  {item[lang]}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-[#c4a35a]/30 p-2 text-[#e8d4a8] transition hover:border-rantau-gold hover:text-rantau-gold lg:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? t.closeMenu : t.openMenu}
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
            <LanguageToggle lang={lang} onChange={setLang} dark />
            <a
              href="#contact"
              className="rounded-full border border-rantau-gold px-3 py-2 text-center text-xs font-medium leading-tight text-[#e8d4a8] transition hover:bg-rantau-gold hover:text-neutral-900 sm:px-4 sm:text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.bookNav}
            </a>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div
            id="mobile-nav"
            className="border-t border-[#c4a35a]/20 bg-[#121110]/95 backdrop-blur-md lg:hidden"
          >
            <ul className="mx-auto max-w-6xl space-y-1 px-5 py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block rounded-lg px-3 py-3 text-sm text-neutral-300 transition hover:bg-[#c4a35a]/10 hover:text-rantau-gold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main>
        <HeroSection lang={lang} t={t} />

        <Section
          id="about"
          kicker={t.sectionKicker}
          title={t.aboutTitle}
        >
          <div className="grid items-start gap-8 md:grid-cols-[2fr_3fr] md:items-center md:gap-10">
            <div className="w-full overflow-hidden rounded-3xl border border-[#c4a35a]/20 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
              <img
                src={chefHaziq}
                alt={t.chefPhotoAlt}
                className="block h-auto w-full object-contain object-top"
              />
            </div>
            <div className="flex w-full flex-col justify-center space-y-6 text-neutral-400">

            <h2 className="text-rantau-gold text-2xl font-semibold">
              {t.aboutMeetChef}
              </h2>
              <p className="text-justify leading-relaxed">
              {t.aboutP1}
              </p>
              <p className="text-justify leading-relaxed">
                {t.aboutP2}
                </p>
                <p className="text-justify leading-relaxed">
                {t.aboutP3}
                </p>

              <div className="grid grid-cols-2 gap-4">
               
                <div className="rounded-xl border border-[#c4a35a]/25 bg-[#1a1816]/70 p-4 backdrop-blur-sm">
                  <p className="text-sm text-neutral-500">{t.cuisineFocusLabel}</p>
                  <p className="text-xl font-semibold text-[#f5eed8]">{t.cuisineFocusValue}</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="services" kicker={t.sectionKicker} title={t.servicesTitle}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rantauDifferentiators.map((item) => (
              <motion.article
                key={item.en}
                className="rounded-2xl border border-[#c4a35a]/25 bg-[#1a1816]/70 p-5 backdrop-blur-sm transition hover:border-rantau-gold"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-rantau-gold">—</span>
                  <h3 className="text-lg font-semibold text-[#f5eed8]">{pick(item, lang)}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="timeline" kicker={t.sectionKicker} title={t.timelineTitle}>
          <div className="max-w-xl">
            <StepList items={experienceTimeline} lang={lang} />
          </div>
        </Section>

        <Section id="booking" kicker={t.sectionKicker} title={t.bookingTitle}>
          <div className="max-w-xl">
            <StepList items={bookingProcess} lang={lang} />
          </div>
        </Section>

        <Section id="terms" kicker={t.sectionKicker} title={t.termsTitle}>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-[#c4a35a]/25 bg-[#1a1816]/70 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-[#f5eed8]">{t.termsReservation}</h3>
              <div className="mt-4">
                <BulletList items={termsContent.reservation} lang={lang} />
              </div>
            </article>
            <article className="rounded-2xl border border-[#c4a35a]/25 bg-[#1a1816]/70 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-[#f5eed8]">{t.termsCancellation}</h3>
              <div className="mt-4">
                <BulletList items={termsContent.cancellation} lang={lang} />
              </div>
            </article>
          </div>
        </Section>

        <Section id="gallery" kicker={t.sectionKicker} title={t.galleryTitle}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {galleryImages.map((image) => (
              <div key={image.alt.en} className="overflow-hidden rounded-xl border border-[#c4a35a]/20">
                <img
                  src={image.src}
                  alt={pick(image.alt, lang)}
                  className="h-56 w-full object-cover transition duration-500 hover:scale-110 md:h-72"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-[#c4a35a]/25 bg-[#1a1816]/70 p-6 backdrop-blur-sm md:p-8">
              <h3 className="font-brand text-2xl font-semibold text-[#f5eed8] md:text-3xl">
                {t.experienceMenuTitle}
              </h3>
              <p className="mt-4 text-justify leading-relaxed text-neutral-400">
                {t.experienceMenuText}
              </p>
            </article>

            <article className="rounded-2xl border border-[#c4a35a]/25 bg-[#1a1816]/70 p-6 backdrop-blur-sm md:p-8">
              <h3 className="font-brand text-2xl font-semibold text-[#f5eed8] md:text-3xl">
                {t.customExperienceTitle}
              </h3>
              <p className="mt-4 text-justify leading-relaxed text-neutral-400">
                {t.customExperienceText}
              </p>
            </article>
          </div>
          <Section id="testimonials" kicker={t.sectionKicker} title={t.testimonialsTitle}>
          <div className="mb-8 flex flex-wrap gap-3 text-sm text-neutral-500">
            {['Aurelia Hotels', 'Nexa Group', 'The Ashford Family Office', 'Lumiere Events'].map(
              (client) => (
                <span key={client} className="rounded-full border border-[#c4a35a]/30 bg-[#1a1816]/50 px-4 py-2 text-neutral-400">
                  {client}
                </span>
              ),
            )}
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-2xl border border-[#c4a35a]/25 bg-[#1a1816]/70 p-6 backdrop-blur-sm">
                <p className="text-rantau-gold">★★★★★</p>
                <p className="mt-3 text-neutral-400">{pick(item.review, lang)}</p>
                <p className="mt-4 text-sm font-semibold text-[#f5eed8]">{item.name}</p>
              </article>
            ))}
          </div>
        </Section>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-[#f5eed8]">{t.galleryVideosTitle}</h3>
            <p className="mt-2 max-w-2xl text-sm text-neutral-400">{t.galleryVideosSub}</p>
            <VideoCarousel
              videos={clientVideos}
              lang={lang}
              clickLabel={t.clickToPlay}
              prevLabel={t.videoPrev}
              nextLabel={t.videoNext}
              loadingLabel={t.loading}
              goToVideoLabel={t.goToVideo}
              viewVideoLabel={t.viewVideo}
            />
          </div>
        </Section>
        

        <Section id="faq" kicker={t.sectionKicker} title={t.faqTitle}>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <article key={faq.q.en} className="rounded-xl border border-[#c4a35a]/25 bg-[#1a1816]/70 backdrop-blur-sm">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-medium text-[#f5eed8]">{pick(faq.q, lang)}</span>
                  <span className="text-rantau-gold">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <p className="px-5 pb-4 text-sm text-neutral-400">{pick(faq.a, lang)}</p>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" kicker={t.sectionKicker} title={t.contactTitle} subtitle={t.contactSub}>
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="rounded-2xl border border-[#c4a35a]/30 bg-[#1a1816]/80 p-6 backdrop-blur-sm lg:col-span-3 lg:p-8">
              <ReservationForm lang={lang} t={t} />
            </div>
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl border border-[#c4a35a]/30 bg-[#1a1816]/80 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-[#f5eed8]">{t.reservationPolicyTitle}</h3>
                <div className="mt-4">
                  <BulletList items={reservationPolicies} lang={lang} />
                </div>
              </div>
              <div className="rounded-2xl border border-[#c4a35a]/30 bg-[#1a1816]/80 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-[#f5eed8]">{t.directContact}</h3>
                <div className="mt-4 space-y-2 text-neutral-300">
                  
                <a
                    className="block transition hover:text-[#9a7b3c]"
                    href={buildWhatsAppUrl(t.whatsappPrefill)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.whatsappContact}
                  </a>
                  
                  <a
                    className="block transition hover:text-[#9a7b3c]"
                    href="https://www.instagram.com/rantau.privatedining?igsh=NDg5NHZmM2w1enh4&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.instagramContact}
                  </a>
                  <a
                    className="block transition hover:text-[#9a7b3c]"
                    href="https://www.tiktok.com/@rantau.bychefhaziq?_r=1&_t=ZS-97usG6SXZ2K"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.tiktokContact}
                  </a>
                </div>
              </div>
              {/* <div className="rounded-2xl border border-[#c4a35a]/30 bg-[#1a1816]/80 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-[#f5eed8]">Pricing</h3>
                <div className="mt-4">
                  <BulletList items={pricingItems} />
                </div>
              </div> */}
              <p className="text-sm text-neutral-500">{t.formWhatsappHint}</p>
            </div>
          </div>
        </Section>
      </main>

      <ScrollToTopButton label={t.scrollToTop} />

      <a
        href={buildWhatsAppUrl(t.whatsappPrefill)}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-500"
      >
        {t.whatsappFloat}
      </a>

      <footer className="border-t border-[#c4a35a]/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-3">
            <img src={logoRantau} alt="" className="h-10 w-10 rounded-sm object-cover opacity-90" aria-hidden="true" />
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Rantau by Chef Haziq. {t.footerRights}
            </p>
          </div>
          <div className="flex gap-4 text-sm text-neutral-400">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-rantau-gold">
              Instagram
            </a>
            <a href={buildWhatsAppUrl(t.whatsappPrefill)} target="_blank" rel="noreferrer" className="hover:text-rantau-gold">
              WhatsApp
            </a>
            <a href="https://www.tiktok.com/@rantau.bychefhaziq?_r=1&_t=ZS-97usG6SXZ2K" className="hover:text-rantau-gold">
             TikTok
            </a>
          </div>
        </div>
      </footer>
    </BrandBackground>
  )
}

export default App

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BrandBackground } from './components/BrandBackground'
import logoRantau from './assets/logo-rantau.png'
import chefHaziq from './assets/haziq.PNG'
import dessert1 from './assets/dessert-1.PNG'
import dessert3 from './assets/dessert-3.PNG'
import dessert2 from './assets/dessert-2.PNG'
import dessert4 from './assets/dessert-4.PNG'


const navItems = [
  { id: 'about', en: 'About', ms: 'Tentang' },
  { id: 'services', en: 'Services', ms: 'Perkhidmatan' },
  { id: 'menu', en: 'Menu', ms: 'Menu' },
  { id: 'testimonials', en: 'Testimonials', ms: 'Testimoni' },
  { id: 'gallery', en: 'Gallery', ms: 'Galeri' },
  { id: 'faq', en: 'FAQ', ms: 'Soalan Lazim' },
  { id: 'contact', en: 'Contact', ms: 'Hubungi' },
]

const rantauDifferentiators = [
  'Private dining',
  'Modern Malaysian cuisine',
  'Signature mocktail pairing',
  'Personal chef experience',
  'Halal dining experience',
  'Fresh ingredients',
]

const experienceTimeline = [
  'Booking',
  'Menu discussion',
  'Confirmation',
  'Chef arrives',
  'Private dining experience',
  'Cleanup',
]

const bookingProcess = [
  'Choose your preferred date',
  'Submit your enquiry',
  'Consultation',
  '50% deposit',
  'Booking confirmed',
]

const termsContent = {
  reservation: [
    '50% deposit required',
    'Reservation confirmed only after deposit received',
  ],
  cancellation: [
    'Deposit is non-refundable',
    'One date reschedule allowed with minimum 7 days notice',
  ],
}

// const pricingItems = [
//   'RM265 per guest — available for reservations of 4–5 guests.',
//   'Private Dining for 1–3 guests: a minimum booking value of RM1,060 applies to ensure the same carefully curated dining experience and level of service.',
//   'Maximum capacity: up to 5 guests per dining experience.',
//   'Recommended for groups of 4–5 guests for the best dining experience.',
// ]

const galleryImages = [
  { src: dessert1, alt: 'Rantau dessert course' },
  { src: dessert3, alt: 'Rantau plated dessert' },
  { src: dessert2, alt: 'Rantau dessert presentation' },
  { src: dessert4, alt: 'Rantau dessert detail' },
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

/** Malaysian-style menu — copy switches with EN / BM toggle */
const dishes = [
  {
    category: { en: 'Heritage rice & sambal', ms: 'Nasi warisan & sambal' },
    name: {
      en: 'Nasi Lemak Ayam Berempah',
      ms: 'Nasi Lemak Ayam Berempah',
    },
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80',
    price: 'RM 38',
    description: {
      en: 'Coconut rice, house sambal tumis, ikan bilis & peanuts, cucumber, telur goreng, and spiced fried chicken.',
      ms: 'Nasi lemak, sambal tumis buatan sendiri, ikan bilis & kacang, timun, telur goreng, dan ayam goreng berempah.',
    },
  },
  {
    category: { en: 'Slow-cooked classics', ms: 'Klasik dimasak perlahan' },
    name: {
      en: 'Rendang Daging Lembu',
      ms: 'Rendang Daging Lembu',
    },
    image:
      'https://images.unsplash.com/photo-1565557623262-b40e9eC5970b?auto=format&fit=crop&w=900&q=80',
    price: 'RM 48',
    description: {
      en: 'Dry-style beef rendang with kerisik, coconut cream reduction, and aromatic Malay spices — served with ketupat or nasi minyak.',
      ms: 'Rendang daging kering dengan kerisik, pekat santan, dan rempah ratus — dihidang dengan ketupat atau nasi minyak.',
    },
  },
  {
    category: { en: 'From the grill', ms: 'Dari pembakar' },
    name: {
      en: 'Satay Ayam & Daging',
      ms: 'Satay Ayam & Daging',
    },
    image:
      'https://images.unsplash.com/photo-1529566652340-2c41cd1e6596?auto=format&fit=crop&w=900&q=80',
    price: 'RM 42',
    description: {
      en: 'Charcoal-grilled skewers, kuah kacang, nasi impit, cucumber-onion acar — a mamak-night favourite, elevated.',
      ms: 'Satay dibakar arang, kuah kacang, nasi impit, acar timun-bawang — rasa mamak, diperhalusi.',
    },
  },
  {
    category: { en: 'Noodle bowls', ms: 'Mangkuk mi' },
    name: {
      en: 'Laksa Lemak (Curry Laksa)',
      ms: 'Laksa Lemak',
    },
    image:
      'https://images.unsplash.com/photo-1617093727343-374928b6facd?auto=format&fit=crop&w=900&q=80',
    price: 'RM 44',
    description: {
      en: 'Coconut curry broth, prawns, tofu pok, beansprouts, and egg — fragrant laksa leaves and lime on the side.',
      ms: 'Kuah kari santan, udang, tauhu pok, taugeh, dan telur — daun kesum dan limau nipis di tepi.',
    },
  },
  {
    category: { en: 'Salads & kerabu', ms: 'Kerabu' },
    name: {
      en: 'Kerabu Pucuk Paku & Udang',
      ms: 'Kerabu Pucuk Paku & Udang',
    },
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
    price: 'RM 32',
    description: {
      en: 'Blanched fiddlehead fern, grilled prawns, toasted coconut kerisik, and a bright limau nipis dressing.',
      ms: 'Pucuk paku celur, udang bakar, kerisik sangai, dan air limau nipis yang segar.',
    },
  },
  {
    category: { en: 'Sweet traditions', ms: 'Manisan tradisional' },
    name: {
      en: 'Sago Gula Melaka',
      ms: 'Sago Gula Melaka',
    },
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    price: 'RM 22',
    description: {
      en: 'Chilled pearl sago, gula Melaka syrup, and salted coconut cream — a gentle Malaysian dessert.',
      ms: 'Sago mutiara sejuk, sirap gula Melaka, dan santan masin — pencuci mulut lembut.',
    },
  },
]

const heroCopy = {
  kicker: { en: 'A journey of Malaysian flavours.', ms: 'Satu perjalanan cita rasa Malaysia.' },
  title: {
    en: 'A journey of Malaysian flavours.',
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
  'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1800&q=80',
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
    viewMenu: 'View Menu',
    bookNow: 'Book Now',
    heroCta: 'Ready to experience Malaysian fine dining like never before?',
    menuTitle: 'Malaysian-inspired menu',
    menuSub:
      'Heritage flavours, halal-friendly options on request, and premium plating — swap dishes anytime for your event.',
    sectionKicker: 'Rantau',
    contactTitle: 'Make a Reservation',
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
  },
  ms: {
    bookNav: 'Tempahan',
    heroKicker: 'Perjalanan Citarasa Melayu',
    heroTitle: 'Makan Malam Peribadi, Dicipta Dengan Warisan & Kasih',
    heroSub:
      'Rantau by Chef Haziq membawa masakan Melayu yang halus ke meja anda — menu khas, hidangan elegan, dan pengalaman makan malam peribadi untuk rumah, sambutan, dan mesyuarat eksekutif.',
    viewMenu: 'Lihat Menu',
    bookNow: 'Tempah Sekarang',
    heroCta: 'Bersedia untuk merasai hidangan Malaysia moden yang tiada tandingan?',
    menuTitle: 'Menu ilham Malaysia',
    menuSub:
      'Citarasa warisan, pilihan mesra halal atas permintaan, dan hidangan premium — tukar hidangan mengikut acara anda.',
    sectionKicker: 'Rantau',
    contactTitle: 'Buat Tempahan',
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
  },
}

const testimonials = [
  {
    name: 'Amina R.',
    review:
      'Every dish was artfully plated and deeply flavorful. It felt like a Michelin-level dinner at home.',
  },
  {
    name: 'Harith & Co.',
    review:
      'Chef service for our executive dinner was flawless. Seamless setup, outstanding taste, premium hospitality.',
  },
  {
    name: 'Nadia K.',
    review:
      'From menu customization to final dessert, the experience was intimate, elegant, and unforgettable.',
  },
]

const faqs = [
  {
    q: 'Do you travel outside KL?',
    a: 'Complimentary travel within Kuala Lumpur and selected nearby areas in Selangor. A travel fee may apply for locations further from Kuala Lumpur. Please contact us to confirm your location.',
  },
  {
    q: 'Can I request menu changes?',
    a: 'My signature four-course menu is recommended for the best dining experience. Custom menus are available upon request and will be quoted separately based on your preferences and ingredient selection.',
  },
  {
    q: 'How long is the dinner?',
    a: 'The experience typically lasts around 1.5 hours, depending on the pace of service and your dining preferences. In some cases, it may be completed in about 1 hour if everything runs smoothly.',
  },
  {
    q: 'What if I have allergies?',
    a: 'Please let me know in advance, and I’ll do my best to accommodate your dietary requirements or allergies. Minor adjustments are usually included, while more extensive menu changes may require a revised quotation.',
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
            placeholder="e.g. 8"
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

function VideoPreviewCard({ src, title, onSelect, position }) {
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
      aria-label={`View video: ${title}`}
    >
      <div className="relative h-[160px] w-full overflow-hidden bg-[#0d0c0b] sm:h-[220px] md:h-[300px] lg:h-[360px]">
        <video
          key={src}
          ref={videoRef}
          src={src}
          className="h-full w-full object-contain opacity-80 transition group-hover:opacity-100"
          playsInline
          muted
          preload="metadata"
          tabIndex={-1}
        />
        {!thumbnailReady && (
          <span className="absolute inset-0 flex items-center justify-center text-xs text-neutral-500">
            Loading…
          </span>
        )}
      </div>
      <p className="truncate px-3 py-2 text-xs font-medium text-neutral-400 group-hover:text-[#e8d4a8]">
        {title}
      </p>
    </button>
  )
}

function ClientVideo({ src, title, clickLabel, isActive = true }) {
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

  function handlePlay() {
    const video = videoRef.current
    if (!video) return

    setPlaying(true)
    video.muted = false
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
          className="h-full w-full object-contain"
          controls={playing}
          playsInline
          muted
          preload="metadata"
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
              <span className="text-xs uppercase tracking-widest text-neutral-400">Loading…</span>
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

function VideoCarousel({ videos, lang, clickLabel, prevLabel, nextLabel }) {
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
          />

          <div className="z-10 rounded-2xl shadow-[0_8px_32px_rgba(196,163,90,0.12)] ring-2 ring-rantau-gold/35">
            <ClientVideo
              key={centerVideo.src}
              src={centerVideo.src}
              title={centerVideo.title[lang]}
              clickLabel={clickLabel}
              isActive
            />
          </div>

          <VideoPreviewCard
            key={`right-${nextVideo.src}`}
            src={nextVideo.src}
            title={nextVideo.title[lang]}
            onSelect={() => goTo(nextIndex)}
            position="right"
          />
        </div>
      ) : (
        <ClientVideo
          src={centerVideo.src}
          title={centerVideo.title[lang]}
          clickLabel={clickLabel}
          isActive
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
                aria-label={`Go to video ${index + 1}`}
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

function BulletList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-neutral-400">
          <span className="mt-0.5 shrink-0 text-rantau-gold">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function StepList({ items }) {
  return (
    <ol className="space-y-4">
      {items.map((item, index) => (
        <li key={item} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c4a35a]/40 bg-[#1a1816]/80 text-sm font-semibold text-rantau-gold">
            {index + 1}
          </span>
          <span className="pt-1 text-neutral-400">{item}</span>
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
            alt="Rantau by Chef Haziq — A Journey of Malay Flavours, Private Dining"
            className="mx-auto w-[min(88vw,340px)] drop-shadow-[0_8px_32px_rgba(196,163,90,0.25)] md:w-[380px]"
          />
        </motion.div>

        <div className="max-w-xl text-center md:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.33em] text-[#e8d4a8]">
              {heroCopy.kicker[lang]}
            </p>
            <h1 className="font-brand mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
              {heroCopy.title[lang]}
            </h1>
            <p className="mt-6 text-base text-white/80 md:text-lg">{heroCopy.sub[lang]}</p>
          </div>

          <p className="font-brand mt-8 text-lg text-[#e8d4a8] md:text-xl">{t.heroCta}</p>

          <div className="mt-5 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#menu"
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
                aria-label={`Go to slide ${index + 1}`}
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
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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
          title="About Chef "
        >
          <div className="grid items-start gap-8 md:grid-cols-[2fr_3fr] md:items-center md:gap-10">
            <div className="w-full overflow-hidden rounded-3xl border border-[#c4a35a]/20 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
              <img
                src={chefHaziq}
                alt="Chef Haziq"
                className="block h-auto w-full object-contain object-top"
              />
            </div>
            <div className="flex w-full flex-col justify-center space-y-6 text-neutral-400">

            <h2 className="text-rantau-gold text-2xl font-semibold">
              Meet Chef Haziq
              </h2>
              <p className="text-justify leading-relaxed">
              Chef Haziq began his culinary journey in some of Malaysia’s most demanding professional kitchens, 
              including luxury five-star hotels and a Michelin restaurant. These experiences shaped his discipline, 
              attention to detail, and appreciation for refined dining.
              </p>
              <p className="text-justify leading-relaxed">
                Driven by a passion for Malaysian cuisine, he founded RANTAU 
                to present familiar local flavours through a contemporary lens. Each menu is carefully curated to honour 
                tradition while embracing modern techniques, allowing every guest to experience Malaysia in a new and 
                memorable way.  
                </p>
                <p className="text-justify leading-relaxed">
                Every dinner is personally planned, prepared, and presented by Chef Haziq, ensuring an intimate dining 
                experience where every course reflects craftsmanship, hospitality, and the rich diversity of Malaysian 
                flavours.  
                </p>

              <div className="grid grid-cols-2 gap-4">
               
                <div className="rounded-xl border border-[#c4a35a]/25 bg-[#1a1816]/70 p-4 backdrop-blur-sm">
                  <p className="text-sm text-neutral-500">Cuisine Focus</p>
                  <p className="text-xl font-semibold text-[#f5eed8]">Malaysian Contemporary Cuisine</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="services" kicker={t.sectionKicker} title="What Makes Rantau Different">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rantauDifferentiators.map((item) => (
              <motion.article
                key={item}
                className="rounded-2xl border border-[#c4a35a]/25 bg-[#1a1816]/70 p-5 backdrop-blur-sm transition hover:border-rantau-gold"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-rantau-gold">—</span>
                  <h3 className="text-lg font-semibold text-[#f5eed8]">{item}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="timeline" kicker={t.sectionKicker} title="The Timeline">
          <div className="max-w-xl">
            <StepList items={experienceTimeline} />
          </div>
        </Section>

        <Section id="booking" kicker={t.sectionKicker} title="Booking Process">
          <div className="max-w-xl">
            <StepList items={bookingProcess} />
          </div>
        </Section>

        <Section id="terms" kicker={t.sectionKicker} title="Terms & Conditions">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-[#c4a35a]/25 bg-[#1a1816]/70 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-[#f5eed8]">Reservation</h3>
              <div className="mt-4">
                <BulletList items={termsContent.reservation} />
              </div>
            </article>
            <article className="rounded-2xl border border-[#c4a35a]/25 bg-[#1a1816]/70 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-[#f5eed8]">Cancellation</h3>
              <div className="mt-4">
                <BulletList items={termsContent.cancellation} />
              </div>
            </article>
          </div>
        </Section>

        <Section id="menu" kicker={t.sectionKicker} title={t.menuTitle} subtitle={t.menuSub}>
          <p className="mb-8 max-w-2xl text-sm text-neutral-500">
            {lang === 'en'
              ? 'Prices shown as a sample guide — final quotation follows your headcount and menu.'
              : 'Harga sebagai panduan — sebut harga akhir mengikut bilangan tetamu dan menu.'}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((dish) => (
              <article
                key={dish.name.en}
                className="overflow-hidden rounded-2xl border border-[#c4a35a]/25 bg-[#1a1816]/70 backdrop-blur-sm"
              >
                <div className="overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name[lang]}
                    className="h-56 w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-rantau-gold">
                    {dish.category[lang]}
                  </p>
                  <h3 className="text-xl font-semibold text-[#f5eed8]">{dish.name[lang]}</h3>
                  <p className="text-sm text-neutral-400">{dish.description[lang]}</p>
                  <p className="pt-1 text-base font-semibold text-rantau-gold">{dish.price}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="testimonials" kicker={t.sectionKicker} title="Trusted by Premium Clients">
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
                <p className="mt-3 text-neutral-400">{item.review}</p>
                <p className="mt-4 text-sm font-semibold text-[#f5eed8]">{item.name}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="gallery" kicker={t.sectionKicker} title="Gallery">
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-[#f5eed8]">{t.galleryVideosTitle}</h3>
            <p className="mt-2 max-w-2xl text-sm text-neutral-400">{t.galleryVideosSub}</p>
            <VideoCarousel
              videos={clientVideos}
              lang={lang}
              clickLabel={t.clickToPlay}
              prevLabel={t.videoPrev}
              nextLabel={t.videoNext}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {galleryImages.map((image) => (
              <div key={image.alt} className="overflow-hidden rounded-xl border border-[#c4a35a]/20">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-56 w-full object-cover transition duration-500 hover:scale-110 md:h-72"
                />
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq" kicker={t.sectionKicker} title="Frequently Asked Questions">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <article key={faq.q} className="rounded-xl border border-[#c4a35a]/25 bg-[#1a1816]/70 backdrop-blur-sm">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-medium text-[#f5eed8]">{faq.q}</span>
                  <span className="text-rantau-gold">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <p className="px-5 pb-4 text-sm text-neutral-400">{faq.a}</p>
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
                <h3 className="text-xl font-semibold text-[#f5eed8]">Direct Contact</h3>
                <div className="mt-4 space-y-2 text-neutral-300">
                  <p>WhatsApp: 017-204 6561</p>
                  <a
                    className="block text-rantau-gold transition hover:text-[#9a7b3c]"
                    href="https://www.instagram.com/rantau.privatedining?igsh=NDg5NHZmM2w1enh4&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram: @rantau.privatedining

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
        href={buildWhatsAppUrl('Hi, I would like to enquire about Rantau private dining.')}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-500"
      >
        WhatsApp
      </a>

      <footer className="border-t border-[#c4a35a]/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-3">
            <img src={logoRantau} alt="" className="h-10 w-10 rounded-sm object-cover opacity-90" aria-hidden="true" />
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Rantau by Chef Haziq. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4 text-sm text-neutral-400">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-rantau-gold">
              Instagram
            </a>
            <a href={buildWhatsAppUrl('Hi, I would like to enquire about Rantau private dining.')} target="_blank" rel="noreferrer" className="hover:text-rantau-gold">
              WhatsApp
            </a>
            <a href="https://www.tiktok.com/@rantau.bychefhaziq?_r=1&_t=ZS-97usG6SXZ2K" className="hover:text-rantau-gold">
             Tiktok
            </a>
          </div>
        </div>
      </footer>
    </BrandBackground>
  )
}

export default App

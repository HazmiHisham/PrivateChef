import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrandBackground } from './components/BrandBackground'
import logoRantau from './assets/logo-rantau.png'

const navItems = [
  { id: 'about', en: 'About', ms: 'Tentang' },
  { id: 'services', en: 'Services', ms: 'Perkhidmatan' },
  { id: 'menu', en: 'Menu', ms: 'Menu' },
  { id: 'testimonials', en: 'Testimonials', ms: 'Testimoni' },
  { id: 'experience', en: 'Experience', ms: 'Pengalaman' },
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

const heroSlides = [
  {
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80',
    kicker: { en: 'A journey of Malaysian flavours.', ms: 'Satu perjalanan cita rasa Malaysia.' },
    title: {
      en: 'A journey of Malaysian flavours.',
      ms: 'Satu perjalanan cita rasa Malaysia.',
    },
    sub: {
      en: 'Rantau by chef haziq brings modern Malaysian cuisine into a private dining experience,carefully curated with seasonal ingredients ,refined techniques and personalised hospitality.',
      ms: 'Rantau oleh Chef Haziq membawakan hidangan Malaysia moden ke dalam pengalaman menjamu selera yang eksklusif, yang disusun rapi menggunakan bahan-bahan bermusim, teknik penyediaan yang halus, serta layanan yang diperibadikan.',
    },
  },
  {
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=80',
    kicker: { en: 'A journey of Malaysian flavours.', ms: 'Satu perjalanan cita rasa Malaysia.' },
    title: {
      en: 'Unforgettable Gatherings, Beautifully Served',
      ms: 'Perhimpunan Unik, Dihidang Dengan Indah',
    },
    sub: {
      en: 'From corporate dinners to wedding celebrations — full-service catering with elegant plating and warm hospitality.',
      ms: 'Daripada majlis korporat hingga perkahwinan — katering penuh dengan hidangan elegan dan layanan mesra.',
    },
  },
  {
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1800&q=80',
    kicker: { en: 'A journey of Malaysian flavours.', ms: 'Satu perjalanan cita rasa Malaysia.' },
    title: {
      en: 'Authentic Malay Flavours, Refined for Today',
      ms: 'Citarasa Melayu Asli, Diperhalusi untuk Kini',
    },
    sub: {
      en: 'Nasi lemak, rendang, satay, and more — heritage recipes elevated with premium ingredients and modern presentation.',
      ms: 'Nasi lemak, rendang, satay, dan lagi — resipi warisan diperhalusi dengan bahan premium dan penyediaan moden.',
    },
  },
  {
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80',
    kicker: { en: 'A journey of Malaysian flavours.', ms: 'Satu perjalanan cita rasa Malaysia.' },
    title: {
      en: 'Menus Tailored to Every Occasion',
      ms: 'Menu Disesuaikan untuk Setiap Majlis',
    },
    sub: {
      en: 'Halal-friendly options, dietary customisation, and tasting menus designed around your guests and your vision.',
      ms: 'Pilihan mesra halal, penyesuaian diet, dan menu degustasi direka mengikut tetamu dan visi anda.',
    },
  },
]

const SLIDE_INTERVAL_MS = 5000

const uiCopy = {
  en: {
    bookNav: 'Booking',
    heroKicker: 'A Journey of Malay Flavours',
    heroTitle: 'Private Dining, Crafted With Heritage & Heart',
    heroSub:
      'Rantau by Chef Haziq brings refined Malay cuisine to your table — bespoke menus, elegant plating, and intimate dining for homes, celebrations, and executive gatherings.',
    viewMenu: 'View Menu',
    bookNow: 'Book Now',
    menuTitle: 'Malaysian-inspired menu',
    menuSub:
      'Heritage flavours, halal-friendly options on request, and premium plating — swap dishes anytime for your event.',
    sectionKicker: 'Rantau',
  },
  ms: {
    bookNav: 'Tempahan',
    heroKicker: 'Perjalanan Citarasa Melayu',
    heroTitle: 'Makan Malam Peribadi, Dicipta Dengan Warisan & Kasih',
    heroSub:
      'Rantau by Chef Haziq membawa masakan Melayu yang halus ke meja anda — menu khas, hidangan elegan, dan pengalaman makan malam peribadi untuk rumah, sambutan, dan mesyuarat eksekutif.',
    viewMenu: 'Lihat Menu',
    bookNow: 'Tempah Sekarang',
    menuTitle: 'Menu ilham Malaysia',
    menuSub:
      'Citarasa warisan, pilihan mesra halal atas permintaan, dan hidangan premium — tukar hidangan mengikut acara anda.',
    sectionKicker: 'Rantau',
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
    q: 'How far in advance should I book?',
    a: 'For weekend events, 2-3 weeks is ideal. Last-minute bookings are accepted based on availability.',
  },
  {
    q: 'Can menus be customized for dietary preferences?',
    a: 'Yes. Menus are tailored for allergies, halal, vegetarian, and other dietary requirements.',
  },
  {
    q: 'Do you provide table setup and serving staff?',
    a: 'Premium packages include styling support and optional service staff for a full dining experience.',
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
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  const slide = heroSlides[activeSlide]

  return (
    <section id="hero" className="relative min-h-[92vh] overflow-hidden border-b border-[#c4a35a]/20">
      {heroSlides.map((item, index) => (
        <motion.img
          key={item.image}
          src={item.image}
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
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.33em] text-[#e8d4a8]">
                {slide.kicker[lang]}
              </p>
              <h1 className="font-brand mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
                {slide.title[lang]}
              </h1>
              <p className="mt-6 text-base text-white/80 md:text-lg">{slide.sub[lang]}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
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
            {heroSlides.map((_, index) => (
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

function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const [lang, setLang] = useState('en')

  useEffect(() => {
    document.documentElement.lang = lang === 'ms' ? 'ms' : 'en'
  }, [lang])

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
            <LanguageToggle lang={lang} onChange={setLang} dark />
            <a
              href="#contact"
              className="rounded-full border border-rantau-gold px-3 py-2 text-center text-xs font-medium leading-tight text-[#e8d4a8] transition hover:bg-rantau-gold hover:text-neutral-900 sm:px-4 sm:text-sm"
            >
              {t.bookNav}
            </a>
          </div>
        </nav>
      </header>

      <main>
        <HeroSection lang={lang} t={t} />

        <Section
          id="about"
          kicker={t.sectionKicker}
          title="About Chef Haziq"
          subtitle="Chef Haziq began his culinary journey in some of Malaysia’s most demanding professional kitchens, including luxury five-star hotels and a Michelin restaurant. These experiences shaped his discipline, attention to detail, and appreciation for refined dining. Driven by a passion for Malaysian cuisine, he founded Rantau to present familiar local flavours through a contemporary lens. Each menu is carefully curated to honour tradition while embracing modern techniques, allowing every guest to experience Malaysia in a new and memorable way.
                    Every dinner is personally planned, prepared, and presented by Chef Haziq, ensuring an intimate dining experience where every course reflects craftsmanship, hospitality, and the rich diversity of Malaysian flavours."
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=1000&q=80"
              alt="Chef Haziq in the kitchen"
              className="h-[420px] w-full rounded-2xl object-cover transition duration-300 hover:scale-[1.02]"
            />
            <div className="space-y-4 text-neutral-400">
              <p>
                Chef Haziq crafts personalized menus that honour traditional Malay flavours while
                elevating every plate with modern presentation and premium ingredients.
              </p>
              <p>
                From private residences to exclusive celebrations, Rantau delivers tasting menus,
                live chef tables, and elegant plated service — a journey of Malay flavours, made
                personal.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl border border-[#c4a35a]/25 bg-[#1a1816]/70 p-4 backdrop-blur-sm">
                  <p className="text-sm text-neutral-500">Experience</p>
                  <p className="text-xl font-semibold text-[#f5eed8]">12+ Years</p>
                </div>
                <div className="rounded-xl border border-[#c4a35a]/25 bg-[#1a1816]/70 p-4 backdrop-blur-sm">
                  <p className="text-sm text-neutral-500">Cuisine Focus</p>
                  <p className="text-xl font-semibold text-[#f5eed8]">Malay Heritage</p>
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

        <Section id="experience" kicker={t.sectionKicker} title="Experience & Achievements">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#c4a35a]/25 bg-[#1a1816]/70 p-6 text-center backdrop-blur-sm">
                <p className="text-4xl font-semibold text-rantau-gold">{stat.value}</p>
                <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="gallery" kicker={t.sectionKicker} title="Gallery">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              'photo-1498837167922-ddd27525d352',
              'photo-1551218808-94e220e084d2',
              'photo-1517248135467-4c7edcad34c4',
              'photo-1466978913421-dad2ebd01d17',
              'photo-1476224203421-9ac39bcb3327',
              'photo-1559339352-11d035aa65de',
              'photo-1481833761820-0509d3217039',
              'photo-1414235077428-338989a2e8c0',
            ].map((imageId) => (
              <div key={imageId} className="overflow-hidden rounded-xl">
                <img
                  src={`https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=800&q=80`}
                  alt="Private chef service gallery item"
                  className="h-36 w-full object-cover transition duration-500 hover:scale-110 md:h-44"
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

        <Section id="contact" kicker={t.sectionKicker} title="Let’s Craft Your Next Event">
          <div className="grid gap-6 rounded-2xl border border-[#c4a35a]/30 bg-[#1a1816]/80 p-6 backdrop-blur-sm md:grid-cols-2 md:p-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#f5eed8]">Direct Contact</h3>
              <p className="mt-3 text-neutral-400">
                Connect directly with Rantau for menu consultation, availability, and custom requests.
              </p>
              <div className="mt-6 space-y-2 text-neutral-300">
                <p>Email: hello@rantau.my</p>
                <p>Phone: +60 12-345 6789</p>
                <a
                  className="block text-rantau-gold transition hover:text-[#9a7b3c]"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram: @rantau.by.chefhaziq
                </a>
              </div>
            </div>
            <div className="flex items-center justify-start md:justify-end">
              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-emerald-600 px-6 py-3 font-medium text-white transition hover:scale-105 hover:bg-emerald-500"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Section>
      </main>

      <a
        href="https://wa.me/60123456789"
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
            <a href="https://wa.me/60123456789" target="_blank" rel="noreferrer" className="hover:text-rantau-gold">
              WhatsApp
            </a>
            <a href="mailto:hello@rantau.my" className="hover:text-rantau-gold">
              Email
            </a>
          </div>
        </div>
      </footer>
    </BrandBackground>
  )
}

export default App

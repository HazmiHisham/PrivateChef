import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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

const services = [
  'Private Dining',
  'Event Catering',
  'Meal Prep',
  'Corporate Events',
  'Wedding Events',
  'Custom Requests',
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

const uiCopy = {
  en: {
    bookNav: 'Book Consultation',
    heroKicker: 'Luxury Private Dining',
    heroTitle: 'Private Dining Experience Crafted Just For You',
    heroSub:
      'Bespoke menus, refined presentation, and personalized culinary experiences for homes, events, and executive gatherings.',
    viewMenu: 'View Menu',
    bookNow: 'Book Now',
    menuTitle: 'Malaysian-inspired menu',
    menuSub:
      'Heritage flavours, halal-friendly options on request, and premium plating — swap dishes anytime for your event.',
  },
  ms: {
    bookNav: 'Tempah Perundingan',
    heroKicker: 'Makan Malam Peribadi Mewah',
    heroTitle: 'Pengalaman Makan Malam Peribadi Dicipta Khas Untuk Anda',
    heroSub:
      'Menu khas, penyediaan kemas, dan pengalaman kulinari peribadi untuk rumah, acara, dan mesyuarat eksekutif.',
    viewMenu: 'Lihat Menu',
    bookNow: 'Tempah Sekarang',
    menuTitle: 'Menu ilham Malaysia',
    menuSub:
      'Citarasa warisan, pilihan mesra halal atas permintaan, dan hidangan premium — tukar hidangan mengikut acara anda.',
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

function Section({ id, title, subtitle, children }) {
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
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
          Private Chef
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          {title}
        </h2>
        {subtitle && <p className="mt-3 max-w-2xl text-neutral-600">{subtitle}</p>}
      </div>
      {children}
    </motion.section>
  )
}

function LanguageToggle({ lang, onChange }) {
  return (
    <div
      className="flex rounded-full border border-neutral-200 bg-neutral-50 p-0.5 text-xs font-semibold"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => onChange('en')}
        className={`rounded-full px-3 py-1.5 transition ${
          lang === 'en'
            ? 'bg-white text-neutral-900 shadow-sm'
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
            ? 'bg-white text-neutral-900 shadow-sm'
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
    <div className="bg-white text-neutral-800">
      <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 md:px-8">
          <a href="#hero" className="text-lg font-semibold tracking-[0.16em] text-neutral-900">
            PRIVATE CHEF
          </a>
          <ul className="hidden gap-5 text-sm text-neutral-600 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition hover:text-amber-700">
                  {item[lang]}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LanguageToggle lang={lang} onChange={setLang} />
            <a
              href="#contact"
              className="rounded-full border border-neutral-900 px-3 py-2 text-center text-xs font-medium leading-tight transition hover:bg-neutral-900 hover:text-white sm:px-4 sm:text-sm"
            >
              {t.bookNav}
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="hero"
          className="relative min-h-[90vh] overflow-hidden border-b border-neutral-100"
        >
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80"
            alt="Elegant dining table with gourmet dishes"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative mx-auto flex min-h-[90vh] max-w-6xl items-center px-5 py-20 md:px-8">
            <motion.div
              className="max-w-3xl text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.33em] text-amber-200">
                {t.heroKicker}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
                {t.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-base text-white/85 md:text-lg">{t.heroSub}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#menu"
                  className="rounded-full bg-amber-200 px-6 py-3 font-medium text-neutral-900 transition hover:scale-105 hover:bg-amber-100"
                >
                  {t.viewMenu}
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/70 px-6 py-3 font-medium transition hover:scale-105 hover:bg-white hover:text-neutral-900"
                >
                  {t.bookNow}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Section
          id="about"
          title="Meet Chef Adam Laurent"
          subtitle="A private chef dedicated to intimate, memorable dining with seasonal ingredients and globally inspired techniques."
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=1000&q=80"
              alt="Private chef portrait in kitchen"
              className="h-[420px] w-full rounded-2xl object-cover transition duration-300 hover:scale-[1.02]"
            />
            <div className="space-y-4 text-neutral-600">
              <p>
                With over 12 years in fine dining kitchens, Chef Adam creates personalized menus
                that blend modern European techniques with Southeast Asian flavors.
              </p>
              <p>
                Specialties include tasting menus, live chef tables, and elegant plated service for
                private residences and exclusive events.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl border border-neutral-200 p-4">
                  <p className="text-sm text-neutral-500">Experience</p>
                  <p className="text-xl font-semibold text-neutral-900">12+ Years</p>
                </div>
                <div className="rounded-xl border border-neutral-200 p-4">
                  <p className="text-sm text-neutral-500">Cuisine Focus</p>
                  <p className="text-xl font-semibold text-neutral-900">Modern Fusion</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="services" title="Signature Services">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.article
                key={service}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
                whileHover={{ y: -4 }}
              >
                <h3 className="text-xl font-semibold text-neutral-900">{service}</h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Bespoke menu planning, premium ingredients, and elevated service tailored to your
                  occasion.
                </p>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="menu" title={t.menuTitle} subtitle={t.menuSub}>
          <p className="mb-8 max-w-2xl text-sm text-neutral-500">
            {lang === 'en'
              ? 'Prices shown as a sample guide — final quotation follows your headcount and menu.'
              : 'Harga sebagai panduan — sebut harga akhir mengikut bilangan tetamu dan menu.'}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((dish) => (
              <article
                key={dish.name.en}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
              >
                <div className="overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name[lang]}
                    className="h-56 w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
                    {dish.category[lang]}
                  </p>
                  <h3 className="text-xl font-semibold text-neutral-900">{dish.name[lang]}</h3>
                  <p className="text-sm text-neutral-600">{dish.description[lang]}</p>
                  <p className="pt-1 text-base font-semibold text-neutral-900">{dish.price}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="testimonials" title="Trusted by Premium Clients">
          <div className="mb-8 flex flex-wrap gap-3 text-sm text-neutral-500">
            {['Aurelia Hotels', 'Nexa Group', 'The Ashford Family Office', 'Lumiere Events'].map(
              (client) => (
                <span key={client} className="rounded-full border border-neutral-200 px-4 py-2">
                  {client}
                </span>
              ),
            )}
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-2xl border border-neutral-200 p-6">
                <p className="text-amber-600">★★★★★</p>
                <p className="mt-3 text-neutral-600">{item.review}</p>
                <p className="mt-4 text-sm font-semibold text-neutral-900">{item.name}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience & Achievements">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-neutral-200 p-6 text-center">
                <p className="text-4xl font-semibold text-neutral-900">{stat.value}</p>
                <p className="mt-2 text-sm text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="gallery" title="Gallery">
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

        <Section id="faq" title="Frequently Asked Questions">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <article key={faq.q} className="rounded-xl border border-neutral-200">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-medium text-neutral-900">{faq.q}</span>
                  <span className="text-amber-700">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <p className="px-5 pb-4 text-sm text-neutral-600">{faq.a}</p>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Let’s Craft Your Next Event">
          <div className="grid gap-6 rounded-2xl border border-neutral-200 p-6 md:grid-cols-2 md:p-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900">Direct Contact</h3>
              <p className="mt-3 text-neutral-600">
                Connect directly for menu consultation, availability, and custom requests.
              </p>
              <div className="mt-6 space-y-2 text-neutral-700">
                <p>Email: hello@privatechef.example</p>
                <p>Phone: +60 12-345 6789</p>
                <a
                  className="block text-amber-700 transition hover:text-amber-800"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram: @privatechef
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

      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Private Chef. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-amber-700">
              Instagram
            </a>
            <a href="https://wa.me/60123456789" target="_blank" rel="noreferrer" className="hover:text-amber-700">
              WhatsApp
            </a>
            <a href="mailto:hello@privatechef.example" className="hover:text-amber-700">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

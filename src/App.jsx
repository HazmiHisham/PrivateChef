import { useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  'about',
  'services',
  'menu',
  'testimonials',
  'experience',
  'gallery',
  'faq',
  'contact',
]

const services = [
  'Private Dining',
  'Event Catering',
  'Meal Prep',
  'Corporate Events',
  'Wedding Events',
  'Custom Requests',
]

const dishes = [
  {
    name: 'Truffle Seared Scallops',
    category: 'Signature Starters',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    price: '$24',
    description: 'Velvety cauliflower puree, brown butter, micro herbs.',
  },
  {
    name: 'Herb-Crusted Lamb',
    category: 'Main Courses',
    image:
      'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80',
    price: '$42',
    description: 'Rosemary jus, roasted root vegetables, charred shallots.',
  },
  {
    name: 'Citrus Vanilla Tart',
    category: 'Desserts',
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
    price: '$16',
    description: 'Lemon curd, vanilla cream, seasonal berries.',
  },
]

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

function App() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="bg-white text-neutral-800">
      <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#hero" className="text-lg font-semibold tracking-[0.16em] text-neutral-900">
            PRIVATE CHEF
          </a>
          <ul className="hidden gap-6 text-sm capitalize text-neutral-600 lg:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="transition hover:text-amber-700">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full border border-neutral-900 px-4 py-2 text-sm font-medium transition hover:bg-neutral-900 hover:text-white"
          >
            Book Consultation
          </a>
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
                Luxury Private Dining
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
                Private Dining Experience Crafted Just For You
              </h1>
              <p className="mt-6 max-w-2xl text-base text-white/85 md:text-lg">
                Bespoke menus, refined presentation, and personalized culinary experiences for
                homes, events, and executive gatherings.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#menu"
                  className="rounded-full bg-amber-200 px-6 py-3 font-medium text-neutral-900 transition hover:scale-105 hover:bg-amber-100"
                >
                  View Menu
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/70 px-6 py-3 font-medium transition hover:scale-105 hover:bg-white hover:text-neutral-900"
                >
                  Book Now
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

        <Section id="menu" title="Curated Menu Highlights">
          <div className="grid gap-6 md:grid-cols-3">
            {dishes.map((dish) => (
              <article
                key={dish.name}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
              >
                <div className="overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-56 w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-700">{dish.category}</p>
                  <h3 className="text-xl font-semibold text-neutral-900">{dish.name}</h3>
                  <p className="text-sm text-neutral-600">{dish.description}</p>
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

/* eslint-disable @next/next/no-img-element */
import {
  Bone,
  Cat,
  Clock3,
  Dog,
  HeartHandshake,
  HeartPulse,
  MapPin,
  MessageCircle,
  PackageCheck,
  PawPrint,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Stethoscope,
  Store,
  Syringe,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const phone = '664 976 3634';
const whatsappUrl =
  'https://wa.me/526649763634?text=Hola%20La%20Manada%2C%20quiero%20agendar%20una%20cita';
const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=P.%C2%BA%20del%20Cedro%2011007%2C%20Urbiquinta%20Del%20Cedro%2C%20Tijuana%2C%20B.C.';
const facebookUrl = 'https://www.facebook.com/LaManadaMx/?ref=fb';

const photos = {
  hero:
    'https://images.unsplash.com/photo-1727419780738-8b9e85ab9ca6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0JTIwYW5kJTIwZG9nZXRoZXJ8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=72&w=2200',
  vet: 'https://unsplash.com/photos/u2H8mUzoF2Q/download?force=true&w=1200',
  accessories: 'https://unsplash.com/photos/oU6KZTXhuvk/download?force=true&w=1200',
  playful: 'https://unsplash.com/photos/Qb7D1xw28Co/download?force=true&w=1200',
  food: 'https://unsplash.com/photos/zxqaAkkayP8/download?force=true&w=1200',
};

type IconCard = {
  title: string;
  copy: string;
  Icon: LucideIcon;
  color: string;
};

const highlights = [
  { value: '4.5+', label: 'valoración pública', Icon: Star, color: 'bg-[#fff1c7] text-[#9a5b00]' },
  { value: '100+', label: 'reseñas reportadas', Icon: PawPrint, color: 'bg-[#d9f8ee] text-[#087b65]' },
  { value: 'Tijuana', label: 'Urbiquinta Del Cedro', Icon: MapPin, color: 'bg-[#e4ecff] text-[#073b75]' },
];

const quickLinks = [
  {
    href: '#veterinaria',
    eyebrow: 'Veterinaria',
    title: 'Consulta y prevención',
    copy: 'Atención para cuidar su salud y dar seguimiento a cada etapa.',
    Icon: Stethoscope,
    color: 'bg-[#dbf7ff] text-[#036b85]',
  },
  {
    href: '#tienda',
    eyebrow: 'Tienda',
    title: 'Alimento y accesorios',
    copy: 'Productos para perros y gatos, con orientación cercana.',
    Icon: ShoppingBag,
    color: 'bg-[#fff0bd] text-[#9a5b00]',
  },
  {
    href: '#contacto',
    eyebrow: 'WhatsApp',
    title: 'Agenda o consulta',
    copy: 'Resuelve dudas, confirma horarios y pregunta por disponibilidad.',
    Icon: MessageCircle,
    color: 'bg-[#dff8da] text-[#27780e]',
  },
];

const services = [
  {
    title: 'Consulta veterinaria',
    copy: 'Evaluación profesional, orientación y seguimiento para cuidar el bienestar de tu mascota.',
    image: photos.vet,
    alt: 'Perro pequeño en una revisión veterinaria',
    Icon: Stethoscope,
    color: 'bg-[#dbf7ff] text-[#036b85]',
  },
  {
    title: 'Vacunación y prevención',
    copy: 'Cuidado preventivo para perros y gatos, con recomendaciones claras para casa.',
    image: photos.hero,
    alt: 'Perro y gato conviviendo en casa',
    Icon: Syringe,
    color: 'bg-[#ffe2dd] text-[#b42318]',
  },
  {
    title: 'Estética e higiene',
    copy: 'Baños, limpieza y soluciones de cuidado para que se sientan cómodos.',
    image: photos.playful,
    alt: 'Perrito pequeño con fondo amarillo',
    Icon: Sparkles,
    color: 'bg-[#fff0bd] text-[#9a5b00]',
  },
  {
    title: 'Tienda para mascotas',
    copy: 'Alimentos, premios, accesorios y productos de bienestar en el mismo lugar.',
    image: photos.accessories,
    alt: 'Perro con ropa colorida sobre fondo azul',
    Icon: Store,
    color: 'bg-[#e6e1ff] text-[#5536a8]',
  },
];

const storeCategories = [
  { title: 'Alimentos', Icon: Bone, color: 'bg-[#fff3c4] text-[#8a5800]' },
  { title: 'Premios', Icon: Dog, color: 'bg-[#dff8da] text-[#27780e]' },
  { title: 'Higiene y cuidado', Icon: Sparkles, color: 'bg-[#d9f7ff] text-[#036b85]' },
  { title: 'Accesorios', Icon: ShoppingBag, color: 'bg-[#ffe2dd] text-[#b42318]' },
  { title: 'Gatos', Icon: Cat, color: 'bg-[#e6e1ff] text-[#5536a8]' },
  { title: 'Bienestar', Icon: HeartPulse, color: 'bg-[#e1f7ea] text-[#0b7f50]' },
];

const reasons: IconCard[] = [
  {
    title: 'Bienestar primero',
    copy: 'Productos y servicios pensados para su salud, comodidad y rutina diaria.',
    Icon: ShieldCheck,
    color: 'bg-[#dbf7ff] text-[#036b85]',
  },
  {
    title: 'Atención cercana',
    copy: 'Trato amable para los animales y comunicación clara para sus familias.',
    Icon: HeartHandshake,
    color: 'bg-[#ffe2dd] text-[#b42318]',
  },
  {
    title: 'Todo en un lugar',
    copy: 'Veterinaria, estética, alimento, higiene y accesorios sin complicarte.',
    Icon: PackageCheck,
    color: 'bg-[#fff0bd] text-[#9a5b00]',
  },
  {
    title: 'Parte de la familia',
    copy: 'Una marca construida alrededor de una idea simple: los queremos tanto como tú.',
    Icon: PawPrint,
    color: 'bg-[#dff8da] text-[#27780e]',
  },
];

const visualMoments = [
  {
    title: 'Cuidado preventivo',
    copy: 'Revisión, vacunas y orientación para que vivan mejor.',
    image: photos.vet,
    alt: 'Mascota en consulta veterinaria',
    Icon: Stethoscope,
    color: 'bg-[#dbf7ff] text-[#036b85]',
  },
  {
    title: 'Tienda con personalidad',
    copy: 'Accesorios, detalles y productos que hacen más feliz su rutina.',
    image: photos.accessories,
    alt: 'Perro con accesorio colorido',
    Icon: ShoppingBag,
    color: 'bg-[#e6e1ff] text-[#5536a8]',
  },
  {
    title: 'Higiene y estilo',
    copy: 'Baño, limpieza y cuidado para sentirse cómodos.',
    image: photos.playful,
    alt: 'Perro pequeño sobre fondo amarillo',
    Icon: Scissors,
    color: 'bg-[#fff0bd] text-[#9a5b00]',
  },
];

const faqs = [
  {
    q: '¿Puedo agendar por WhatsApp?',
    a: 'Sí. El acceso principal de la página lleva directo al WhatsApp de La Manada para pedir cita o consultar productos.',
  },
  {
    q: '¿Venden productos para perros y gatos?',
    a: 'Sí. La tienda se presenta como catálogo consultivo de alimentos, higiene, premios y accesorios.',
  },
  {
    q: '¿El horario ya está confirmado?',
    a: 'Hay horarios publicados en directorios, pero varían entre fuentes. Por eso la página invita a confirmar por WhatsApp antes de visitar.',
  },
];

function CtaButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={whatsappUrl}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#ff8a1d] px-7 text-base font-black text-white shadow-[0_14px_30px_rgba(255,138,29,0.32)] transition hover:bg-[#e7740b] focus:outline-none focus:ring-4 focus:ring-[#ffcf9c]"
      >
        <MessageCircle aria-hidden="true" className="mr-2 h-5 w-5" />
        Agendar cita
      </a>
      <a
        href="#tienda"
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/55 bg-white/18 px-7 text-base font-black text-white transition hover:bg-white/28 focus:outline-none focus:ring-4 focus:ring-white/35"
      >
        <Store aria-hidden="true" className="mr-2 h-5 w-5" />
        Conocer la tienda
      </a>
    </div>
  );
}

function IconBubble({ Icon, className }: { Icon: LucideIcon; className: string }) {
  return (
    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${className}`}>
      <Icon aria-hidden="true" className="h-6 w-6" />
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fbf5] text-[#102b36]">
      <header className="sticky top-0 z-40 border-b border-[#d7ebe4] bg-[#f7fbf5]/94 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
          <a href="#inicio" className="flex min-w-0 items-center gap-3" aria-label="Ir al inicio">
            <img
              src="/la-manada-isotipo.png"
              alt="Isotipo de La Manada"
              className="h-12 w-12 shrink-0 rounded-full bg-[#073b75] object-contain p-1"
            />
            <span className="hidden text-lg font-black text-[#073b75] sm:block">LA MANADA</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-bold text-[#16445a] md:flex">
            <a className="transition hover:text-[#0b7f78]" href="#inicio">
              Inicio
            </a>
            <a className="transition hover:text-[#0b7f78]" href="#veterinaria">
              Veterinaria
            </a>
            <a className="transition hover:text-[#0b7f78]" href="#tienda">
              Tienda
            </a>
            <a className="transition hover:text-[#0b7f78]" href="#nosotros">
              Nosotros
            </a>
            <a className="transition hover:text-[#0b7f78]" href="#contacto">
              Contacto
            </a>
          </div>
          <a
            href={whatsappUrl}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#ff8a1d] px-5 text-sm font-black text-white shadow-[0_10px_24px_rgba(255,138,29,0.28)] transition hover:bg-[#e7740b] focus:outline-none focus:ring-4 focus:ring-[#ffcf9c]"
          >
            <MessageCircle aria-hidden="true" className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
        </nav>
      </header>

      <section id="inicio" className="relative overflow-hidden bg-[#073b75] text-white">
        <img
          src={photos.hero}
          alt="Perro y gato juntos en casa"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#052e5b]/78" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[#f7fbf5]" />

        <div className="relative mx-auto grid min-h-[820px] max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:px-10 lg:py-14">
          <div className="flex flex-col justify-center">
            <img
              src="/la-manada-logo.png"
              alt="La Manada, los queremos tanto como tú"
              className="mb-8 w-[min(430px,100%)] rounded-lg bg-[#073b75]/95 p-4 shadow-2xl"
            />
            <p className="w-fit rounded-full border border-white/28 bg-white/14 px-4 py-2 text-sm font-black text-white backdrop-blur">
              Veterinaria y tienda para mascotas en Tijuana
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
              Todo para su bienestar, en un solo lugar.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#eef9f6] sm:text-xl">
              Veterinaria, cuidado preventivo, estética, alimentos y accesorios para
              acompañarlos con cariño en cada etapa de su vida.
            </p>
            <div className="mt-8">
              <CtaButtons />
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {quickLinks.map(({ href, title, Icon, color }) => (
                <a
                  key={title}
                  href={href}
                  className="flex min-h-16 items-center gap-3 rounded-lg border border-white/28 bg-white/14 p-3 font-black text-white backdrop-blur transition hover:bg-white/24 focus:outline-none focus:ring-4 focus:ring-white/35"
                >
                  <IconBubble Icon={Icon} className={color} />
                  {title}
                </a>
              ))}
            </div>
          </div>

          <div className="grid content-center gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-lg border border-white/28 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:col-span-2">
              <img
                src={photos.vet}
                alt="Mascota recibiendo atención veterinaria"
                className="h-60 w-full object-cover sm:h-72"
              />
              <figcaption className="flex items-center gap-3 bg-white p-4 text-[#073b75]">
                <IconBubble Icon={Stethoscope} className="bg-[#dbf7ff] text-[#036b85]" />
                <span className="text-lg font-black">Cuidado cercano desde la consulta</span>
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-white/28 bg-[#fff0bd] shadow-[0_18px_42px_rgba(0,0,0,0.18)]">
              <img
                src={photos.accessories}
                alt="Perro con accesorio colorido"
                className="h-48 w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="p-4 text-lg font-black text-[#073b75]">Accesorios</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-white/28 bg-[#dff8da] shadow-[0_18px_42px_rgba(0,0,0,0.18)]">
              <img
                src={photos.food}
                alt="Croquetas para mascota en un plato"
                className="h-48 w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="p-4 text-lg font-black text-[#073b75]">Nutrición</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf5]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-7 sm:px-8 md:grid-cols-3 lg:px-10">
          {highlights.map(({ value, label, Icon, color }) => (
            <div key={label} className="flex items-center gap-4 rounded-lg border border-[#d7ebe4] bg-white p-5 shadow-sm">
              <IconBubble Icon={Icon} className={color} />
              <div>
                <p className="text-3xl font-black text-[#073b75]">{value}</p>
                <p className="mt-1 font-bold text-[#48636a]">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-[#0b7f78]">Experiencia La Manada</p>
            <h2 className="mt-3 text-4xl font-black text-[#073b75] sm:text-5xl">
              Más color, más confianza y más cariño en cada visita.
            </h2>
          </div>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {visualMoments.map(({ title, copy, image, alt, Icon, color }) => (
              <article key={title} className="overflow-hidden rounded-lg border border-[#dcece7] bg-[#fbfdf9] shadow-sm">
                <img src={image} alt={alt} className="h-64 w-full object-cover" loading="lazy" decoding="async" />
                <div className="p-6">
                  <IconBubble Icon={Icon} className={color} />
                  <h3 className="mt-4 text-2xl font-black text-[#073b75]">{title}</h3>
                  <p className="mt-3 leading-7 text-[#48636a]">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="veterinaria" className="bg-[#eaf7ee] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-[#0b7f78]">Servicios</p>
            <h2 className="mt-3 text-4xl font-black text-[#073b75] sm:text-5xl">
              Cuidamos a cada integrante de tu manada.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#48636a]">
              Salud, higiene, tienda y acompañamiento cercano, con una experiencia más cálida desde el primer contacto.
            </p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, copy, image, alt, Icon, color }) => (
              <article key={title} className="overflow-hidden rounded-lg border border-[#d0e8dd] bg-white shadow-sm">
                <img src={image} alt={alt} className="h-44 w-full object-cover" loading="lazy" decoding="async" />
                <div className="p-6">
                  <IconBubble Icon={Icon} className={color} />
                  <h3 className="mt-4 text-xl font-black text-[#073b75]">{title}</h3>
                  <p className="mt-3 leading-7 text-[#48636a]">{copy}</p>
                  <a
                    href={whatsappUrl}
                    className="mt-5 inline-flex min-h-11 items-center font-black text-[#0b7f78] transition hover:text-[#073b75] focus:outline-none focus:ring-4 focus:ring-[#9fe3d3]"
                  >
                    <MessageCircle aria-hidden="true" className="mr-2 h-5 w-5" />
                    Conocer más
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#073b75] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase text-[#98ead7]">Veterinaria</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Su salud también es parte de nuestro vínculo.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#dceee9]">
              En La Manada el cuidado se comunica de forma cálida: atención profesional,
              orientación para casa y seguimiento cuando tu mascota lo necesita.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                { label: 'Atención personalizada', Icon: HeartHandshake },
                { label: 'Cuidado preventivo', Icon: ShieldCheck },
                { label: 'Orientación clara', Icon: MessageCircle },
                { label: 'Seguimiento cercano', Icon: Clock3 },
              ].map(({ label, Icon }) => (
                <div key={label} className="flex items-center gap-3 rounded-lg border border-white/18 bg-white/12 px-4 py-3 font-bold">
                  <Icon aria-hidden="true" className="h-5 w-5 text-[#98ead7]" />
                  {label}
                </div>
              ))}
            </div>
            <a
              href={whatsappUrl}
              className="mt-8 inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-[#ff8a1d] px-7 font-black text-white transition hover:bg-[#e7740b] focus:outline-none focus:ring-4 focus:ring-[#ffcf9c]"
            >
              <MessageCircle aria-hidden="true" className="mr-2 h-5 w-5" />
              Agenda una consulta
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src={photos.vet}
              alt="Perro pequeño en revisión veterinaria"
              className="h-72 w-full rounded-lg object-cover shadow-[0_18px_42px_rgba(0,0,0,0.2)] sm:h-full"
              loading="lazy"
              decoding="async"
            />
            <div className="grid gap-4">
              <div className="rounded-lg bg-[#fff0bd] p-6 text-[#073b75]">
                <IconBubble Icon={PawPrint} className="bg-white text-[#ff8a1d]" />
                <h3 className="mt-4 text-2xl font-black">Los queremos tanto como tú</h3>
              </div>
              <img
                src="/la-manada-isotipo.png"
                alt="Isotipo de La Manada con perro, gato, pez y ave"
                className="rounded-lg bg-white p-8 shadow-[0_18px_42px_rgba(0,0,0,0.16)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="tienda" className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
          <div>
            <p className="text-sm font-black uppercase text-[#0b7f78]">Tienda</p>
            <h2 className="mt-3 text-4xl font-black text-[#073b75] sm:text-5xl">
              Todo lo que necesitan. Y algunas cosas que les van a encantar.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#48636a]">
              Elige por categoría y escríbenos por WhatsApp para confirmar disponibilidad o pedir orientación.
            </p>
            <img
              src={photos.food}
              alt="Croquetas en un plato para mascota"
              className="mt-7 h-64 w-full rounded-lg object-cover shadow-sm"
              loading="lazy"
              decoding="async"
            />
            <a
              href={whatsappUrl}
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#073b75] px-7 text-base font-black text-white transition hover:bg-[#0b4f91] focus:outline-none focus:ring-4 focus:ring-[#9fc7e8]"
            >
              <ShoppingBag aria-hidden="true" className="mr-2 h-5 w-5" />
              Consultar disponibilidad
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {storeCategories.map(({ title, Icon, color }) => (
              <div key={title} className="min-h-40 rounded-lg border border-[#dcece7] bg-[#fbfdf9] p-6 shadow-sm">
                <IconBubble Icon={Icon} className={color} />
                <h3 className="mt-5 text-2xl font-black text-[#073b75]">{title}</h3>
                <p className="mt-2 leading-7 text-[#48636a]">Pregunta por opciones disponibles en sucursal.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="bg-[#f7fbf5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase text-[#0b7f78]">Por qué La Manada</p>
              <h2 className="mt-3 text-4xl font-black text-[#073b75] sm:text-5xl">
                Los queremos tanto como tú.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#48636a]">
                La marca no tiene que sentirse como una clínica fría. Debe transmitir
                confianza, cercanía y la tranquilidad de encontrar cuidado y productos
                útiles en un mismo lugar.
              </p>
              <img
                src={photos.playful}
                alt="Perro pequeño con ropa colorida"
                className="mt-7 h-72 w-full rounded-lg object-cover shadow-sm"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map(({ title, copy, Icon, color }) => (
                <article key={title} className="rounded-lg border border-[#dcece7] bg-white p-6 shadow-sm">
                  <IconBubble Icon={Icon} className={color} />
                  <h3 className="mt-4 text-xl font-black text-[#073b75]">{title}</h3>
                  <p className="mt-3 leading-7 text-[#48636a]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="text-sm font-black uppercase text-[#0b7f78]">Confianza</p>
            <h2 className="mt-3 text-4xl font-black text-[#073b75] sm:text-5xl">
              Ellos ya son parte de La Manada.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#48636a]">
              La página queda preparada para integrar reseñas reales de Facebook o Google cuando el negocio las seleccione.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-lg border border-[#dcece7] bg-[#fbfdf9] p-7 sm:p-10">
              <Star aria-hidden="true" className="h-12 w-12 fill-[#ffcf36] text-[#ffcf36]" />
              <p className="mt-4 text-6xl font-black text-[#ff8a1d]">4.5+</p>
              <h3 className="mt-4 text-3xl font-black text-[#073b75]">Valoración local reportada</h3>
              <p className="mt-4 text-lg leading-8 text-[#48636a]">
                Directorios públicos muestran a La Manada con valoraciones positivas y más de 100 reseñas reportadas.
              </p>
            </div>
            <img
              src={photos.accessories}
              alt="Perro con accesorio sobre fondo azul"
              className="h-full min-h-80 rounded-lg object-cover shadow-sm"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#073b75] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10">
          <div>
            <p className="text-sm font-black uppercase text-[#98ead7]">Contacto</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">¿Tienes dudas sobre tu mascota?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#dceee9]">
              Escríbenos para agendar, confirmar horarios o revisar disponibilidad de
              productos. La acción principal de la página queda centrada en WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#ff8a1d] px-7 text-base font-black text-white transition hover:bg-[#e7740b] focus:outline-none focus:ring-4 focus:ring-[#ffcf9c]"
              >
                <MessageCircle aria-hidden="true" className="mr-2 h-5 w-5" />
                {phone}
              </a>
              <a
                href={mapsUrl}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/45 bg-white/12 px-7 text-base font-black text-white transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/35"
              >
                <MapPin aria-hidden="true" className="mr-2 h-5 w-5" />
                Cómo llegar
              </a>
            </div>
          </div>
          <address className="rounded-lg border border-white/18 bg-white/12 p-7 not-italic leading-8 text-[#eef9f6]">
            <MapPin aria-hidden="true" className="mb-4 h-10 w-10 text-[#98ead7]" />
            <strong className="block text-2xl text-white">Ven a conocernos</strong>
            P.º del Cedro 11007<br />
            Urbiquinta Del Cedro, 22564<br />
            Tijuana, Baja California<br />
            <span className="mt-4 block">Confirma horario y disponibilidad por WhatsApp antes de visitar.</span>
            <a className="mt-4 inline-flex items-center font-black text-[#98ead7]" href={facebookUrl}>
              <PawPrint aria-hidden="true" className="mr-2 h-5 w-5" />
              Facebook: LaManadaMx
            </a>
          </address>
        </div>
      </section>

      <section className="bg-[#eaf7ee] py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-[#0b7f78]">Preguntas frecuentes</p>
            <h2 className="mt-3 text-4xl font-black text-[#073b75]">Listo para publicar con datos finales.</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {faqs.map((item) => (
              <article key={item.q} className="rounded-lg border border-[#cbe4d6] bg-white p-6 shadow-sm">
                <IconBubble Icon={PawPrint} className="bg-[#dff8da] text-[#27780e]" />
                <h3 className="mt-4 text-xl font-black text-[#073b75]">{item.q}</h3>
                <p className="mt-3 leading-7 text-[#48636a]">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] lg:px-10">
          <div>
            <img
              src="/la-manada-logo.png"
              alt="La Manada"
              className="w-72 rounded-lg bg-[#073b75] p-3"
            />
            <p className="mt-5 max-w-2xl leading-7 text-[#48636a]">
              Veterinaria, estética y tienda para mascotas. #LosQueremosTantoComoTú
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-black text-[#073b75]">
            <a href="#veterinaria" className="hover:text-[#0b7f78]">
              Veterinaria
            </a>
            <a href="#tienda" className="hover:text-[#0b7f78]">
              Tienda
            </a>
            <a href={facebookUrl} className="hover:text-[#0b7f78]">
              Facebook
            </a>
            <a href={whatsappUrl} className="hover:text-[#0b7f78]">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

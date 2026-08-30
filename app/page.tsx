/* eslint-disable @next/next/no-img-element */
import {
  Bone,
  Cat,
  Dog,
  HeartHandshake,
  HeartPulse,
  MapPin,
  MessageCircle,
  PawPrint,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Stethoscope,
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
  heroFamily:
    'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=82&w=2200',
  heroCare:
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=82&w=2200',
  heroPlay:
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=82&w=2200',
  heroCat:
    'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=82&w=2200',
  serviceConsult: 'https://unsplash.com/photos/u2H8mUzoF2Q/download?force=true&w=1400',
  shop:
    'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&q=80&w=1600',
  about:
    'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=1400',
};

const heroSlides = [
  {
    image: photos.heroFamily,
    alt: 'Perro y gato juntos en casa',
    position: 'center 45%',
    title: 'Bienestar en un solo lugar.',
    copy: 'Veterinaria, estética, alimento y accesorios.',
  },
  {
    image: photos.heroCare,
    alt: 'Perro pequeño en revisión veterinaria',
    position: 'center 42%',
    title: 'Cuidado cercano para tu mascota.',
    copy: 'Consulta, prevención y orientación clara.',
  },
  {
    image: photos.heroPlay,
    alt: 'Perros caminando juntos',
    position: 'center 55%',
    title: 'Productos que sí les sirven.',
    copy: 'Opciones útiles para perros y gatos.',
  },
  {
    image: photos.heroCat,
    alt: 'Gato mirando a cámara',
    position: 'center 44%',
    title: 'Color, cariño y confianza.',
    copy: 'Amable para ellos y práctica para ti.',
  },
];

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

const services: IconCard[] = [
  {
    title: 'Consulta veterinaria',
    copy: 'Evaluación, orientación y seguimiento.',
    Icon: Stethoscope,
    color: 'bg-[#dbf7ff] text-[#036b85]',
  },
  {
    title: 'Vacunación y prevención',
    copy: 'Cuidado preventivo para perros y gatos.',
    Icon: Syringe,
    color: 'bg-[#ffe2dd] text-[#b42318]',
  },
  {
    title: 'Estética e higiene',
    copy: 'Baño, limpieza y cuidado cotidiano.',
    Icon: Scissors,
    color: 'bg-[#fff0bd] text-[#9a5b00]',
  },
];

const storeCategories = [
  {
    title: 'Alimentos',
    Icon: Bone,
    color: 'bg-[#fff3c4] text-[#8a5800]',
  },
  {
    title: 'Premios',
    Icon: Dog,
    color: 'bg-[#dff8da] text-[#27780e]',
  },
  {
    title: 'Higiene',
    Icon: Sparkles,
    color: 'bg-[#d9f7ff] text-[#036b85]',
  },
  {
    title: 'Accesorios',
    Icon: ShoppingBag,
    color: 'bg-[#ffe2dd] text-[#b42318]',
  },
  {
    title: 'Gatos',
    Icon: Cat,
    color: 'bg-[#e6e1ff] text-[#5536a8]',
  },
  {
    title: 'Bienestar',
    Icon: HeartPulse,
    color: 'bg-[#e1f7ea] text-[#0b7f50]',
  },
];

const reasons: IconCard[] = [
  {
    title: 'Bienestar primero',
    copy: 'Salud, comodidad y rutina diaria.',
    Icon: ShieldCheck,
    color: 'bg-[#dbf7ff] text-[#036b85]',
  },
  {
    title: 'Atención cercana',
    copy: 'Trato amable y comunicación clara.',
    Icon: HeartHandshake,
    color: 'bg-[#ffe2dd] text-[#b42318]',
  },
  {
    title: 'Todo en un lugar',
    copy: 'Veterinaria, estética y tienda sin vueltas.',
    Icon: ShoppingBag,
    color: 'bg-[#fff0bd] text-[#9a5b00]',
  },
  {
    title: 'Parte de la familia',
    copy: 'Los queremos tanto como tú.',
    Icon: PawPrint,
    color: 'bg-[#dff8da] text-[#27780e]',
  },
];

const careSteps = [
  {
    title: 'Escríbenos',
    copy: 'Dinos qué necesita tu mascota.',
    Icon: MessageCircle,
  },
  {
    title: 'Te orientamos',
    copy: 'Agendamos o revisamos disponibilidad.',
    Icon: HeartHandshake,
  },
  {
    title: 'Llegas con confianza',
    copy: 'Visita simple, cálida y útil.',
    Icon: ShieldCheck,
  },
];

function CtaButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={whatsappUrl}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0b7f78] px-7 text-base font-black text-white shadow-[0_14px_30px_rgba(11,127,120,0.3)] transition hover:bg-[#096b66] focus:outline-none focus:ring-4 focus:ring-[#9fe3d3]"
      >
        <MessageCircle aria-hidden="true" className="mr-2 h-5 w-5" />
        Agendar cita
      </a>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-base font-black text-[#073b75] shadow-[0_14px_30px_rgba(7,59,117,0.18)] transition hover:bg-[#eef9f6] focus:outline-none focus:ring-4 focus:ring-white/45"
      >
        <MapPin aria-hidden="true" className="mr-2 h-5 w-5" />
        Conoce nuestra tienda
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
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#0b7f78] px-5 text-sm font-black text-white shadow-[0_10px_24px_rgba(11,127,120,0.24)] transition hover:bg-[#096b66] focus:outline-none focus:ring-4 focus:ring-[#9fe3d3]"
          >
            <MessageCircle aria-hidden="true" className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
        </nav>
      </header>

      <section id="inicio" className="relative overflow-hidden bg-[#eaf7ee] text-white">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.title}
            className="hero-bg-slide absolute inset-0"
            style={{ animationDelay: `${index * 5}s` }}
          >
            <img
              src={slide.image}
              alt=""
              aria-hidden="true"
              fetchPriority={index === 0 ? 'high' : 'auto'}
              className="h-full w-full object-cover saturate-[1.16]"
              style={{ animationDelay: `${index * 5}s`, objectPosition: slide.position }}
            />
          </div>
        ))}
        <div className="hero-readable-overlay absolute inset-0" />
        <div className="relative mx-auto min-h-[560px] max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
          <div className="flex min-h-[460px] max-w-3xl flex-col items-start justify-center text-left">
            <p className="text-base font-light text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)] sm:text-lg">
              Veterinaria y tienda para mascotas en Tijuana
            </p>
            <h1 className="sr-only">Todo para su bienestar, en un solo lugar.</h1>
            <div className="relative mt-5 min-h-[220px] w-full sm:min-h-[230px]" aria-hidden="true">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.title}
                  className="hero-copy-slide absolute inset-0 flex flex-col items-start justify-center"
                  style={{ animationDelay: `${index * 5}s` }}
                >
                  <p className="max-w-3xl text-5xl font-black leading-[0.96] text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.62)] sm:text-6xl lg:text-7xl">
                    {slide.title}
                  </p>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.56)] sm:text-xl">
                    {slide.copy}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <CtaButtons />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7ebe4] bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-[#d7ebe4] px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-10">
          {highlights.map(({ value, label, Icon, color }) => (
            <div key={label} className="flex items-center gap-4 py-5 md:justify-center">
              <IconBubble Icon={Icon} className={color} />
              <div>
                <p className="text-3xl font-black text-[#073b75]">{value}</p>
                <p className="mt-1 font-bold text-[#48636a]">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="veterinaria" className="bg-[#f7fbf5] py-12 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="relative min-h-[380px] overflow-hidden rounded-lg bg-[#073b75] shadow-[0_24px_70px_rgba(7,59,117,0.16)]">
            <img
              src={photos.serviceConsult}
              alt="Perro pequeño en revisión veterinaria"
              className="h-full min-h-[380px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#073b75]/78 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm font-black uppercase text-[#98ead7]">Veterinaria</p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">Cuidado claro, cercano y preventivo.</h2>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase text-[#0b7f78]">Servicios</p>
            <h2 className="mt-3 text-4xl font-black text-[#073b75] sm:text-5xl">
              Cuidamos a cada integrante de tu manada.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#48636a]">
              Atención, prevención y estética con trato cercano.
            </p>
            <div className="mt-7 divide-y divide-[#cfe5de] border-y border-[#cfe5de]">
              {services.map(({ title, copy, Icon, color }) => (
                <article key={title} className="grid gap-4 py-5 sm:grid-cols-[auto_1fr] sm:items-center">
                  <IconBubble Icon={Icon} className={color} />
                  <div>
                    <h3 className="text-2xl font-black text-[#073b75]">{title}</h3>
                    <p className="mt-2 leading-7 text-[#48636a]">{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#073b75] py-12 text-white sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase text-[#98ead7]">Veterinaria</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Su salud también es parte de nuestro vínculo.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#dceee9]">
              El cuidado se comunica de forma cálida: atención profesional,
              orientación para casa y seguimiento cuando tu mascota lo necesita.
            </p>
            <a
              href={whatsappUrl}
              className="mt-7 inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-[#ff8a1d] px-7 font-black text-white transition hover:bg-[#e7740b] focus:outline-none focus:ring-4 focus:ring-[#ffcf9c]"
            >
              <MessageCircle aria-hidden="true" className="mr-2 h-5 w-5" />
              Agenda una consulta
            </a>
          </div>
          <div className="rounded-lg border border-white/18 bg-white/10 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.14)]">
            <p className="text-sm font-black uppercase text-[#fff0bd]">Así funciona</p>
            <div className="mt-6 space-y-6">
              {careSteps.map(({ title, copy, Icon }, index) => (
                <div key={title} className="grid gap-4 border-b border-white/16 pb-6 last:border-0 last:pb-0 sm:grid-cols-[auto_1fr]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg font-black text-[#073b75]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <Icon aria-hidden="true" className="h-5 w-5 text-[#98ead7]" />
                      <h3 className="text-2xl font-black">{title}</h3>
                    </div>
                    <p className="mt-2 leading-7 text-[#dceee9]">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tienda" className="bg-[#fff7e8] py-12 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:px-10">
          <div>
            <p className="text-sm font-black uppercase text-[#c65b00]">Tienda</p>
            <h2 className="mt-3 text-4xl font-black text-[#073b75] sm:text-5xl">
              Un espacio para resolver la rutina de perros y gatos.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f4b32]">
              Productos, disponibilidad y orientación rápida en sucursal.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {storeCategories.map(({ title, Icon, color }) => (
                <div
                  key={title}
                  className="flex min-h-20 items-center gap-4 rounded-lg border-2 border-white bg-white/82 p-4 shadow-[0_10px_28px_rgba(198,91,0,0.08)]"
                >
                  <IconBubble Icon={Icon} className={color} />
                  <h3 className="text-xl font-black text-[#073b75]">{title}</h3>
                </div>
              ))}
            </div>
            <a
              href={whatsappUrl}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#ff8a1d] px-7 text-base font-black text-white shadow-[0_14px_30px_rgba(255,138,29,0.22)] transition hover:bg-[#e7740b] focus:outline-none focus:ring-4 focus:ring-[#ffcf9c]"
            >
              <ShoppingBag aria-hidden="true" className="mr-2 h-5 w-5" />
              Consultar productos
            </a>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-white shadow-[0_24px_60px_rgba(198,91,0,0.16)]">
            <img
              src={photos.shop}
              alt="Perro junto a productos para mascotas"
              className="h-full min-h-[420px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-lg bg-white/92 p-5 text-[#073b75] shadow-[0_18px_38px_rgba(7,59,117,0.14)] backdrop-blur">
              <div className="flex items-center gap-3">
                <IconBubble Icon={Bone} className="bg-[#fff3c4] text-[#8a5800]" />
                <div>
                  <p className="text-sm font-black uppercase text-[#c65b00]">Sucursal</p>
                  <p className="text-2xl font-black">Compra con ayuda, no a ciegas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="bg-[#f7fbf5] py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="overflow-hidden rounded-lg bg-white shadow-[0_18px_46px_rgba(7,59,117,0.1)]">
              <img
                src={photos.about}
                alt="Perro mirando a cámara"
                className="h-80 w-full object-cover sm:h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-black uppercase text-[#0b7f78]">Por qué La Manada</p>
              <h2 className="mt-3 text-4xl font-black text-[#073b75] sm:text-5xl">
                Los queremos tanto como tú.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#48636a]">
                Confianza, cercanía y cuidado útil en un mismo lugar.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {reasons.map(({ title, copy, Icon, color }) => (
                  <article key={title} className="grid gap-4 sm:grid-cols-[auto_1fr]">
                    <IconBubble Icon={Icon} className={color} />
                    <div>
                      <h3 className="text-xl font-black text-[#073b75]">{title}</h3>
                      <p className="mt-2 leading-7 text-[#48636a]">{copy}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 border-t border-[#d7ebe4] pt-6 sm:flex-row">
                <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 font-black text-[#073b75] shadow-sm">
                  <Star aria-hidden="true" className="h-5 w-5 fill-[#ffcf36] text-[#ffcf36]" />
                  4.5+ valoración pública
                </div>
                <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 font-black text-[#073b75] shadow-sm">
                  <PawPrint aria-hidden="true" className="h-5 w-5 text-[#0b7f78]" />
                  100+ reseñas reportadas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#073b75] py-12 text-white sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10">
          <div>
            <p className="text-sm font-black uppercase text-[#98ead7]">Contacto</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">¿Tienes dudas sobre tu mascota?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#dceee9]">
              Escríbenos para agendar, confirmar horarios o revisar productos.
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

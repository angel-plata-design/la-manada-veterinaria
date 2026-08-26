import Image from 'next/image';

const phone = '664 976 3634';
const whatsappUrl =
  'https://wa.me/526649763634?text=Hola%20La%20Manada%2C%20quiero%20agendar%20una%20cita';
const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=P.%C2%BA%20del%20Cedro%2011007%2C%20Urbiquinta%20Del%20Cedro%2C%20Tijuana%2C%20B.C.';
const facebookUrl = 'https://www.facebook.com/LaManadaMx/?ref=fb';

const highlights = [
  ['4.5+', 'valoración pública'],
  ['100+', 'reseñas reportadas'],
  ['Tijuana', 'Urbiquinta Del Cedro'],
];

const quickLinks = [
  {
    href: '#veterinaria',
    eyebrow: 'Veterinaria',
    title: 'Consulta y prevención',
    copy: 'Atención para cuidar su salud y dar seguimiento a cada etapa.',
  },
  {
    href: '#tienda',
    eyebrow: 'Tienda',
    title: 'Alimento y accesorios',
    copy: 'Productos para perros y gatos, con orientación cercana.',
  },
  {
    href: '#contacto',
    eyebrow: 'WhatsApp',
    title: 'Agenda o consulta',
    copy: 'Resuelve dudas, confirma horarios y pregunta por disponibilidad.',
  },
];

const services = [
  {
    title: 'Consulta veterinaria',
    copy: 'Evaluación profesional, orientación y seguimiento para cuidar el bienestar de tu mascota.',
  },
  {
    title: 'Vacunación y prevención',
    copy: 'Cuidado preventivo para perros y gatos, con recomendaciones claras para casa.',
  },
  {
    title: 'Estética e higiene',
    copy: 'Baños, cuidado general y soluciones de higiene para que se sientan cómodos.',
  },
  {
    title: 'Tienda para mascotas',
    copy: 'Alimentos, premios, accesorios y productos de cuidado en el mismo lugar.',
  },
];

const storeCategories = [
  'Alimentos',
  'Premios',
  'Higiene y cuidado',
  'Accesorios',
  'Camas y descanso',
  'Productos de bienestar',
];

const reasons = [
  {
    title: 'Bienestar primero',
    copy: 'Productos y servicios pensados para su salud, comodidad y rutina diaria.',
  },
  {
    title: 'Atención cercana',
    copy: 'Trato amable para los animales y comunicación clara para sus familias.',
  },
  {
    title: 'Todo en un lugar',
    copy: 'Veterinaria, estética, alimento, higiene y accesorios sin complicarte.',
  },
  {
    title: 'Parte de la familia',
    copy: 'Una marca construida alrededor de una idea simple: los queremos tanto como tú.',
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
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#ff8a1d] px-7 text-base font-black text-white shadow-[0_14px_30px_rgba(255,138,29,0.3)] transition hover:bg-[#e7740b] focus:outline-none focus:ring-4 focus:ring-[#ffcf9c]"
      >
        Agendar cita
      </a>
      <a
        href="#tienda"
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/55 bg-white/16 px-7 text-base font-black text-white transition hover:bg-white/25 focus:outline-none focus:ring-4 focus:ring-white/35"
      >
        Conocer la tienda
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fbf5] text-[#102b36]">
      <header className="sticky top-0 z-40 border-b border-[#d7ebe4] bg-[#f7fbf5]/94 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
          <a href="#inicio" className="flex min-w-0 items-center gap-3" aria-label="Ir al inicio">
            <Image
              src="/la-manada-isotipo.png"
              alt="Isotipo de La Manada"
              width={48}
              height={48}
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
            WhatsApp
          </a>
        </nav>
      </header>

      <section id="inicio" className="relative min-h-[760px] overflow-hidden bg-[#073b75] text-white">
        <Image
          src="https://images.unsplash.com/photo-1727419780738-8b9e85ab9ca6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0JTIwYW5kJTIwZG9nZXRoZXJ8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=72&w=2200"
          alt="Perro y gato juntos en casa"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#052e5b]/72" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl flex-col justify-between px-5 py-10 sm:px-8 lg:px-10">
          <div className="max-w-4xl pt-6 sm:pt-12">
            <Image
              src="/la-manada-logo.png"
              alt="La Manada, los queremos tanto como tú"
              width={520}
              height={148}
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
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {quickLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="rounded-lg border border-white/24 bg-white/16 p-5 text-white shadow-[0_18px_36px_rgba(0,0,0,0.18)] backdrop-blur transition hover:bg-white/24 focus:outline-none focus:ring-4 focus:ring-white/35"
              >
                <p className="text-sm font-black text-[#9ff1dc]">{item.eyebrow}</p>
                <h2 className="mt-2 text-2xl font-black">{item.title}</h2>
                <p className="mt-2 leading-7 text-[#eef9f6]">{item.copy}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7ebe4] bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-7 sm:px-8 md:grid-cols-3 lg:px-10">
          {highlights.map(([value, label]) => (
            <div key={label} className="rounded-lg bg-[#f2faf6] p-5">
              <p className="text-3xl font-black text-[#073b75]">{value}</p>
              <p className="mt-1 font-bold text-[#48636a]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="veterinaria" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-[#0b7f78]">Servicios</p>
            <h2 className="mt-3 text-4xl font-black text-[#073b75] sm:text-5xl">
              Cuidamos a cada integrante de tu manada.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#48636a]">
              Una página pensada para comunicar el concepto completo: salud, higiene,
              tienda y acompañamiento cercano.
            </p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="rounded-lg border border-[#dcece7] bg-[#fbfdf9] p-6">
                <div className="mb-5 h-2 w-16 rounded-full bg-[#ff8a1d]" />
                <h3 className="text-xl font-black text-[#073b75]">{service.title}</h3>
                <p className="mt-3 leading-7 text-[#48636a]">{service.copy}</p>
                <a
                  href={whatsappUrl}
                  className="mt-5 inline-flex min-h-11 items-center font-black text-[#0b7f78] transition hover:text-[#073b75] focus:outline-none focus:ring-4 focus:ring-[#9fe3d3]"
                >
                  Conocer más
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf7ee] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="rounded-lg bg-[#073b75] p-7 text-white sm:p-10">
            <p className="text-sm font-black uppercase text-[#98ead7]">Veterinaria</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Su salud también es parte de nuestro vínculo.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#dceee9]">
              En La Manada el cuidado se comunica de forma cálida: atención profesional,
              orientación para casa y seguimiento cuando tu mascota lo necesita.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {['Atención personalizada', 'Cuidado preventivo', 'Orientación clara', 'Seguimiento cercano'].map(
                (item) => (
                  <div key={item} className="rounded-lg border border-white/18 bg-white/12 px-4 py-3 font-bold">
                    {item}
                  </div>
                ),
              )}
            </div>
            <a
              href={whatsappUrl}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#ff8a1d] px-7 font-black text-white transition hover:bg-[#e7740b] focus:outline-none focus:ring-4 focus:ring-[#ffcf9c]"
            >
              Agenda una consulta
            </a>
          </div>
          <div className="flex items-center justify-center rounded-lg border border-[#cbe4d6] bg-white p-8">
            <Image
              src="/la-manada-isotipo.png"
              alt="Isotipo de La Manada con perro, gato, pez y ave"
              width={420}
              height={420}
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      <section id="tienda" className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="text-sm font-black uppercase text-[#0b7f78]">Tienda</p>
            <h2 className="mt-3 text-4xl font-black text-[#073b75] sm:text-5xl">
              Todo lo que necesitan. Y algunas cosas que les van a encantar.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#48636a]">
              La primera etapa funciona como catálogo consultivo. Es más rápido,
              claro y económico que lanzar un ecommerce completo desde el día uno.
            </p>
            <a
              href={whatsappUrl}
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#073b75] px-7 text-base font-black text-white transition hover:bg-[#0b4f91] focus:outline-none focus:ring-4 focus:ring-[#9fc7e8]"
            >
              Consultar disponibilidad
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {storeCategories.map((category) => (
              <div key={category} className="min-h-32 rounded-lg border border-[#dcece7] bg-[#fbfdf9] p-6">
                <div className="h-2 w-14 rounded-full bg-[#78bd2f]" />
                <h3 className="mt-5 text-2xl font-black text-[#073b75]">{category}</h3>
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
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <article key={reason.title} className="rounded-lg border border-[#dcece7] bg-white p-6">
                  <h3 className="text-xl font-black text-[#073b75]">{reason.title}</h3>
                  <p className="mt-3 leading-7 text-[#48636a]">{reason.copy}</p>
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
              En lugar de inventar testimonios, esta sección usa datos públicos de
              valoración y deja preparada la página para integrar reseñas reales de
              Facebook o Google.
            </p>
          </div>
          <div className="rounded-lg border border-[#dcece7] bg-[#fbfdf9] p-7 sm:p-10">
            <p className="text-6xl font-black text-[#ff8a1d]">4.5+</p>
            <h3 className="mt-4 text-3xl font-black text-[#073b75]">Valoración local reportada</h3>
            <p className="mt-4 text-lg leading-8 text-[#48636a]">
              Directorios públicos muestran a La Manada con valoraciones positivas y más
              de 100 reseñas reportadas. Antes de publicar, se pueden sustituir estos
              datos por testimonios reales seleccionados por el negocio.
            </p>
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
                {phone}
              </a>
              <a
                href={mapsUrl}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/45 bg-white/12 px-7 text-base font-black text-white transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/35"
              >
                Cómo llegar
              </a>
            </div>
          </div>
          <address className="rounded-lg border border-white/18 bg-white/12 p-7 not-italic leading-8 text-[#eef9f6]">
            <strong className="block text-2xl text-white">Ven a conocernos</strong>
            P.º del Cedro 11007<br />
            Urbiquinta Del Cedro, 22564<br />
            Tijuana, Baja California<br />
            <span className="mt-4 block">Confirma horario y disponibilidad por WhatsApp antes de visitar.</span>
            <a className="mt-4 inline-block font-black text-[#98ead7]" href={facebookUrl}>
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
              <article key={item.q} className="rounded-lg border border-[#cbe4d6] bg-white p-6">
                <h3 className="text-xl font-black text-[#073b75]">{item.q}</h3>
                <p className="mt-3 leading-7 text-[#48636a]">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] lg:px-10">
          <div>
            <Image
              src="/la-manada-logo.png"
              alt="La Manada"
              width={520}
              height={148}
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

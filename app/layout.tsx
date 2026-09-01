import type { Metadata } from 'next';
import { Geist_Mono, Poppins } from 'next/font/google';
import './globals.css';

const siteUrl = 'https://angel-plata-design.github.io/la-manada-veterinaria';
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['VeterinaryCare', 'PetStore'],
  name: 'La Manada',
  url: siteUrl,
  logo: `${siteUrl}/la-manada-logo-solo.png`,
  image: `${siteUrl}/og.png`,
  slogan: 'Los queremos tanto como tú',
  description:
    'Veterinaria, estética, alimentos y accesorios para mascotas en Tijuana.',
  telephone: '+52 664 976 3634',
  priceRange: '$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Paseo del Cedro 11007, Urbiquinta Del Cedro',
    addressLocality: 'Tijuana',
    addressRegion: 'Baja California',
    addressCountry: 'MX',
  },
  areaServed: {
    '@type': 'City',
    name: 'Tijuana',
  },
  sameAs: ['https://www.facebook.com/LaManadaMx/'],
};
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'La Manada | Veterinaria y tienda de mascotas en Tijuana',
  description:
    'Veterinaria, estética, alimentos y accesorios para mascotas en Tijuana. Los queremos tanto como tú.',
  keywords: [
    'La Manada',
    'veterinaria en Tijuana',
    'tienda de mascotas Tijuana',
    'alimentos para mascotas',
    'estética canina',
    'veterinaria Urbiquinta Del Cedro',
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/la-manada-isotipo.png',
  },
  openGraph: {
    title: 'La Manada | Los queremos tanto como tú',
    description:
      'Veterinaria, estética, alimentos y accesorios para cuidar a cada integrante de tu manada.',
    url: siteUrl,
    siteName: 'La Manada',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'La Manada veterinaria y tienda de mascotas en Tijuana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Manada | Los queremos tanto como tú',
    description:
      'Veterinaria, estética, alimentos y accesorios para cuidar a cada integrante de tu manada.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://la-manada-veterinaria.angeleplata91.chatgpt.site'),
  title: 'La Manada | Veterinaria y tienda de mascotas en Tijuana',
  description:
    'Veterinaria, estética, alimentos y accesorios para mascotas en Tijuana. Los queremos tanto como tú.',
  icons: {
    icon: '/la-manada-isotipo.png',
  },
  openGraph: {
    title: 'La Manada | Los queremos tanto como tú',
    description:
      'Veterinaria, estética, alimentos y accesorios para cuidar a cada integrante de tu manada.',
    images: ['/og.png'],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

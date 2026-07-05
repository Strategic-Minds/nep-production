import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';

export const metadata: Metadata = {
  title: 'National Epoxy Pros | Epoxy & Concrete Coating Network',
  description:
    'Digital bid in minutes. Real-time job tracking. Lifetime warranty. National Epoxy Pros installs premium epoxy, metallic, quartz, and polished concrete floors — powered by Xtreme Polishing Systems.',
  openGraph: {
    title: 'National Epoxy Pros',
    description:
      'Digital bid in minutes. Real-time job tracking. Lifetime warranty.',
    images: [
      'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/695ab0612_img5_garage_epoxy.png'
    ]
  }
};

export const viewport: Viewport = {
  maximumScale: 1
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${manrope.className}`}>
      <body className="min-h-[100dvh] bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

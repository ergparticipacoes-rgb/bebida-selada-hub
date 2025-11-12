import type { Metadata, Viewport } from "next";
import '../styles/globals.css';
import PageTransition from '../components/PageTransition';
import GlobalHead from '../components/GlobalHead';
import ScrollToTop from '../components/ScrollToTop';
import PWAInstallPrompt from '../components/PWAInstallPrompt';
import Script from 'next/script';
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  fallback: ["Georgia", "serif"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Bebida Selada® – Rede Segura Nacional",
  description: "O primeiro sistema brasileiro de certificação inteligente, rastreabilidade e confiança no setor de bebidas.",
  keywords: "bebida selada, rede segura nacional, certificação, rastreabilidade, selo digital, autenticidade, bebidas brasileiras",
  openGraph: {
    title: "Bebida Selada® – Rede Segura Nacional",
    description: "Padrão nacional de transparência e confiança no setor de bebidas.",
    url: "https://bebidaselada.com",
    siteName: "Bebida Selada®",
    images: [
      {
        url: "https://bebidaselada.com/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Bebida Selada – Rede Segura Nacional",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bebida Selada® – Rede Segura Nacional",
    description: "Certificação inteligente e rastreabilidade no setor de bebidas.",
    images: ["https://bebidaselada.com/og-banner.jpg"],
  },
  authors: [{ name: "Instituto Nacional Bebida Selada® – INBS" }],
  robots: { index: true, follow: true },
  metadataBase: new URL("https://bebidaselada.com"),
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon/favicon-institucional.png',
    apple: '/favicon/favicon-institucional.png',
  },
  alternates: {
    canonical: "https://bebidaselada.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#001F33",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <GlobalHead />
        <meta name="application-name" content="Bebida Selada" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Bebida Selada" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="bg-[#F8F9FB] text-[#222] antialiased">
        {/* JSON-LD Schema.org - Otimizado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Instituto Nacional Bebida Selada®",
              "alternateName": "INBS – Rede Segura Nacional",
              "url": "https://bebidaselada.com",
              "logo": "https://bebidaselada.com/icon-512.png",
              "sameAs": [
                "https://linkedin.com/company/bebidaselada",
                "https://instagram.com/bebidaselada",
                "https://facebook.com/bebidaselada"
              ],
              "description": "O primeiro sistema brasileiro de certificação inteligente e rastreabilidade no setor de bebidas.",
              "foundingDate": "2023",
              "founder": {
                "@type": "Organization",
                "name": "Instituto Nacional Bebida Selada (INBS)"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Atendimento Institucional",
                "email": "contato@bebidaselada.com",
                "areaServed": "BR",
                "availableLanguage": ["pt-BR"]
              }
            }),
          }}
        />

        {/* Google Analytics 4 - Adicionar seu ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        <PageTransition>
          {children}
        </PageTransition>
        <ScrollToTop />
        <PWAInstallPrompt />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/service-worker.js')
                    .then((reg) => console.log('SW registered', reg))
                    .catch((err) => console.log('SW registration failed', err));
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import '../styles/globals.css';
import PageTransition from '../components/PageTransition';
import Script from 'next/script';

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
  themeColor: '#D9B98E',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: {
    icon: '/favicon/favicon-institucional.png',
    apple: '/favicon/favicon-institucional.png',
  },
  alternates: {
    canonical: "https://bebidaselada.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preload de fontes críticas */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" 
          as="style" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Manifest e ícones */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon/favicon-institucional.png" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/favicon-institucional.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <meta name="theme-color" content="#D9B98E" />
        
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
      </head>
      <body className="bg-[#F8F9FB] text-[#222] antialiased">
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

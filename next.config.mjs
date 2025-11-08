import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

// Log informativo da porta (executado apenas durante o build/config load)
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
  console.log(`🚀 Servidor configurado para porta: ${PORT}`);
}

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: {
    port: PORT,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  // Configuração de Webpack para garantir resolução de aliases
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
    };
    return config;
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Language", value: "pt-BR" },
          { key: "Accept-Language", value: "pt-BR" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://fonts.googleapis.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

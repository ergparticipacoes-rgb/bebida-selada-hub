const siteUrl = "https://www.bebidaselada.com.br";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  priority: 0.7,
  trailingSlash: false,
  exclude: [
    "/api/*",
    "/admin",
    "/admin/*",
    "/dashboard",
    "/dashboard/*",
    "/auth/welcome",
    "/offline",
  ],
  transform: async (config, path) => {
    const priorityMap = {
      "/": 1.0,
      "/simulador": 0.9,
      "/representantes": 0.8,
      "/estabelecimentos": 0.75,
      "/prefeituras": 0.75,
      "/universidade": 0.65,
    };

    return {
      loc: `${siteUrl}${path}`,
      changefreq: "weekly",
      priority: priorityMap[path] ?? config.priority ?? 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};


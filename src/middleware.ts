import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Rotas validadas com conteúdo completo
const existingRoutes = [
  "/",
  "/universidade",
  "/universidade/representante-digital",
  "/simulador",
  "/noticias",
  "/noticias/exame-certificacao",
  "/noticias/estadao-selo-municipios",
  "/noticias/valor-blockchain",
  "/imprensa",
  "/prefeituras",
  "/representantes",
  "/estabelecimentos",
  "/certificados",
  "/auth/login",
  "/auth/register",
  "/dashboard",
  "/dashboard/admin",
  "/dashboard/estabelecimento",
  "/dashboard/representante",
  "/atualizacao",
  "/api",
  "/offline",
];

export function middleware(req: NextRequest) {
  const session = req.cookies.get("next-auth.session-token");
  const url = req.nextUrl.clone();
  const { pathname } = url;

  // Proteção de rotas do dashboard
  if (!session && pathname.startsWith("/dashboard")) {
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  // Redirecionar rotas não validadas para /atualizacao
  // Ignorar arquivos estáticos, API routes e rotas já validadas
  if (
    !pathname.startsWith("/api") &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/favicon") &&
    !pathname.startsWith("/manifest") &&
    !pathname.startsWith("/logo") &&
    !pathname.startsWith("/icon") &&
    !pathname.startsWith("/sounds") &&
    !existingRoutes.some((route) => pathname === route || pathname.startsWith(route + "/"))
  ) {
    url.pathname = "/atualizacao";
    return NextResponse.redirect(url);
  }

  // Configurar headers de idioma padrão
  const response = NextResponse.next();
  response.headers.set('Content-Language', 'pt-BR');
  response.headers.set('Accept-Language', 'pt-BR');
  
  return response;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/((?!_next/static|_next/image|favicon.ico|manifest.json|logo.svg|icon-.*\\.png|sw\\.js).*)",
  ],
};

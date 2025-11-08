import { NextResponse } from "next/server";

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto
const RATE_LIMIT_MAX = 30;
const requests = new Map<string, number[]>();

export function rateLimit(request: Request): NextResponse | undefined {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? 
              request.headers.get("x-real-ip") ?? 
              "global";
  const now = Date.now();
  const timestamps = requests.get(ip) || [];
  const filtered = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);

  if (filtered.length >= RATE_LIMIT_MAX) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  filtered.push(now);
  requests.set(ip, filtered);
  return undefined;
}


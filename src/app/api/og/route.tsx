import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          color: "#D9B98E",
          background: "#001F33",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          flexDirection: "column",
          padding: "40px",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: "bold", marginBottom: 20 }}>
          Rede Segura Nacional
        </div>
        <div style={{ fontSize: 48, color: "#E1C7A0" }}>
          Bebida Selada®
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}


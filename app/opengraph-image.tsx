import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F7F5",
          color: "#151515",
          padding: "56px",
          fontFamily: "sans-serif",
          border: "1px solid rgba(15,23,42,0.12)",
        }}
      >
        <div style={{ fontSize: 18, letterSpacing: "0.28em", color: "#5F6368" }}>RU / SOFTWARE ENGINEER</div>
        <div style={{ maxWidth: 960, display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, lineHeight: 1.06, fontWeight: 700 }}>
            Full Stack, AI, and Cloud Systems
          </div>
          <div style={{ marginTop: 22, fontSize: 30, color: "#2563EB" }}>Ruthvik Uttarala — Penn State CS</div>
        </div>
        <div style={{ fontSize: 22, color: "#5F6368" }}>React / TypeScript / Python / AWS / APIs / AI Systems</div>
      </div>
    ),
    { ...size },
  );
}

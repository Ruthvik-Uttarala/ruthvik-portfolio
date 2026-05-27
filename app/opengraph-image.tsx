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
          background: "#0E0D0B",
          color: "#F2EEE7",
          padding: "56px",
          fontFamily: "sans-serif",
          border: "1px solid rgba(242,238,231,0.15)",
        }}
      >
        <div style={{ fontSize: 18, letterSpacing: "0.32em", color: "#9C978F" }}>RU / 26</div>
        <div style={{ maxWidth: 930, display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 66, lineHeight: 1.06, fontWeight: 600 }}>I build AI products that survive real users.</div>
          <div style={{ marginTop: 20, fontSize: 30, color: "#C87842" }}>Ruthvik Uttarala — Software Engineer</div>
        </div>
        <div style={{ fontSize: 22, color: "#9C978F" }}>AI / Cloud / Full Stack</div>
      </div>
    ),
    { ...size },
  );
}

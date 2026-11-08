import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TechVech — Websites, mobile apps and AI. Or hire the developers who build them.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "space-between", padding: 72, background: "#0B0F19", color: "#E7EAF2",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 40 }}>
          <span style={{ color: "#5EEAD4", marginRight: 12 }}>{">_"}</span>techvech
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, display: "flex", flexWrap: "wrap" }}>
          <span>We build your product.&nbsp;</span>
          <span>Or we hand you&nbsp;</span>
          <span style={{ color: "#5EEAD4" }}>the developers</span>
          <span>&nbsp;who can.</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#FDBA74" }}>techvech.com</div>
      </div>
    ),
    { ...size }
  );
}

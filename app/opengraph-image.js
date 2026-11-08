import { ImageResponse } from "next/og";

// Generates the 1200x630 social-share image automatically — no PNG needed.
// Used for Open Graph (WhatsApp, LinkedIn, Facebook, Slack...) on every page.
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
        <div style={{ display: "flex", alignItems: "center", fontSize: 40, color: "#E7EAF2" }}>
          <span style={{ color: "#5EEAD4", marginRight: 12 }}>{">_"}</span>techvech
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, display: "flex", flexWrap: "wrap" }}>
            <span>We build your product.&nbsp;</span>
            <span>Or we hand you&nbsp;</span>
            <span style={{ color: "#5EEAD4" }}>the developers</span>
            <span>&nbsp;who can.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#93A0B8", display: "flex" }}>
            Websites · Mobile Apps · AI Projects · Hire Developers
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#FDBA74" }}>techvech.com</div>
      </div>
    ),
    { ...size }
  );
}

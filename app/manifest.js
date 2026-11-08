export default function manifest() {
  return {
    name: "TechVech",
    short_name: "TechVech",
    description: "Websites, mobile apps and AI products — or hire the developers who build them.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f19",
    theme_color: "#0b0f19",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // don't advertise the framework
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Add real remote image hosts here if you load photos from a CMS later.
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  // Example 301 redirects (uncomment/extend when you change URLs later):
  // async redirects() {
  //   return [{ source: "/old-url", destination: "/services", permanent: true }];
  // },
};

export default nextConfig;

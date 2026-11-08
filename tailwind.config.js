/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // These map to CSS variables defined in app/globals.css so the
        // same class names (bg-base, text-muted, etc.) work in both themes.
        canvas: "var(--bg)",
        panel: "var(--bg-panel)",
        panel2: "var(--bg-panel-2)",
        ink: "var(--text)",
        muted: "var(--text-muted)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        teal: {
          DEFAULT: "var(--teal)",
          dim: "var(--teal-dim)",
        },
        amber: {
          DEFAULT: "var(--amber)",
          dim: "var(--amber-dim)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "14px",
      },
      keyframes: {
        blink: {
          "50%": { opacity: 0 },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        fadeUp: "fadeUp .5s ease forwards",
      },
    },
  },
  plugins: [],
};

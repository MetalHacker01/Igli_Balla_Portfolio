import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /* --------- Editorial theme (root route) --------- */
        paper:    "#FAF6ED",
        "paper-2":"#F1EADB",
        ink:      "#151310",
        "ink-2":  "#2F2B24",
        muted:    "#6E6A5E",
        rule:     "#D9CFB8",
        accent:   "#C5402C",
        sage:     "#8FA688",
        lilac:    "#B5A7CD",

        /* --------- Retro / cyberpunk theme (/retro) --------- */
        neon: {
          primary:   "#ff00ff",  // magenta, main accent
          secondary: "#00ffff",  // cyan, hover / info
          accent:    "#39ff14",  // neon green, success / data
          hot:       "#ff1493",  // hot pink
          blue:      "#0066ff",  // electric blue
          amber:     "#ffaa00",
          danger:    "#ff0040",
        },
        retro: {
          void:    "#0a0a0a",
          panel:   "#1a1a2e",
          surface: "#16213e",
          hover:   "#0f3460",
          border:  "#2d2d44",
          text:    "#e0e0ff",
          muted:   "#8888aa",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans:    ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono:    ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        /* Retro stack */
        pixel:     ["var(--font-press-start)", "monospace"],
        terminal:  ["var(--font-vt323)", "monospace"],
        silkscreen:["var(--font-silkscreen)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
      spacing: {
        px1: "4px",
        px2: "8px",
        px4: "16px",
        px8: "32px",
      },
    },
  },
  plugins: [],
};

export default config;

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f6fb",
          100: "#d9e8f5",
          200: "#b3d0eb",
          300: "#7ba8d9",
          400: "#4a7ec3",
          500: "#1D6FA4",
          600: "#1a6193",
          700: "#165478",
          800: "#134764",
          900: "#0B1F3A",
          950: "#070f1e",
        },
        accent: {
          50: "#f0f7fc",
          100: "#dcedf8",
          200: "#bcddf1",
          300: "#8cc4e6",
          400: "#5aa1d6",
          500: "#1D6FA4",
          600: "#1a6193",
          700: "#165478",
          800: "#134764",
          900: "#0f3850",
          950: "#0a2235",
        },
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        "off-white": "#F8F9FB",
      },
      fontFamily: {
        display: ['"DM Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      spacing: {
        section: "4rem",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#1f2937",
            maxWidth: "65ch",
            a: {
              color: "#1D6FA4",
              textDecoration: "underline",
              "&:hover": {
                color: "#0B1F3A",
              },
            },
            strong: {
              fontWeight: "700",
            },
            h1: {
              fontFamily: '"DM Sans"',
              fontWeight: "700",
            },
            h2: {
              fontFamily: '"DM Sans"',
              fontWeight: "700",
            },
            h3: {
              fontFamily: '"DM Sans"',
              fontWeight: "700",
            },
          },
        },
      },
    },
  },
  plugins: [],
}

import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(20 75% 60% / 0.2)" },
          "50%": { boxShadow: "0 0 40px hsl(20 75% 60% / 0.4)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "mri-scan": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        "mri-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "mri-pulse-ring": {
          "0%": { 
            transform: "scale(0.8)",
            opacity: "0.8",
          },
          "50%": { 
            transform: "scale(1.2)",
            opacity: "0.3",
          },
          "100%": { 
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
        "particle-float": {
          "0%, 100%": { 
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
          "50%": { 
            transform: "translate(20px, -20px)",
            opacity: "0.8",
          },
        },
        "scanner-line": {
          "0%": { 
            transform: "scaleX(0)",
            opacity: "0",
          },
          "50%": { 
            transform: "scaleX(1)",
            opacity: "1",
          },
          "100%": { 
            transform: "scaleX(0)",
            opacity: "0",
          },
        },
        "mri-tunnel-ring": {
          "0%": { 
            transform: "scale(0.8) rotate(0deg)",
            opacity: "0.8",
          },
          "50%": { 
            transform: "scale(1.1) rotate(180deg)",
            opacity: "0.4",
          },
          "100%": { 
            transform: "scale(1.3) rotate(360deg)",
            opacity: "0",
          },
        },
        "mri-scan-line": {
          "0%": { 
            transform: "translateY(-50px)",
            opacity: "0",
          },
          "10%": { 
            opacity: "1",
          },
          "90%": { 
            opacity: "1",
          },
          "100%": { 
            transform: "translateY(50px)",
            opacity: "0",
          },
        },
        "mri-structure": {
          "0%, 100%": { 
            opacity: "0.3",
            transform: "scale(1)",
          },
          "50%": { 
            opacity: "0.8",
            transform: "scale(1.1)",
          },
        },
        "mri-field-line": {
          "0%": { 
            opacity: "0.2",
            transform: "scaleY(0.5)",
          },
          "50%": { 
            opacity: "0.6",
            transform: "scaleY(1.2)",
          },
          "100%": { 
            opacity: "0.2",
            transform: "scaleY(0.5)",
          },
        },
        "mri-data-particle": {
          "0%": { 
            transform: "translateY(0) scale(0.5)",
            opacity: "0",
          },
          "20%": { 
            opacity: "1",
          },
          "80%": { 
            opacity: "1",
          },
          "100%": { 
            transform: "translateY(-100px) scale(1.5)",
            opacity: "0",
          },
        },
        "mri-bed-movement": {
          "0%": { 
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "10%": { 
            opacity: "1",
          },
          "90%": { 
            opacity: "1",
          },
          "100%": { 
            transform: "translateX(100%)",
            opacity: "0",
          },
        },
        "mri-ambient-glow": {
          "0%, 100%": { 
            transform: "scale(1)",
            opacity: "0.3",
          },
          "50%": { 
            transform: "scale(1.2)",
            opacity: "0.6",
          },
        },
        "mri-3d-tunnel": {
          "0%": { 
            transform: "rotateX(60deg) rotateY(0deg) scale(0.8)",
            opacity: "0.8",
          },
          "50%": { 
            transform: "rotateX(60deg) rotateY(180deg) scale(1.1)",
            opacity: "0.5",
          },
          "100%": { 
            transform: "rotateX(60deg) rotateY(360deg) scale(1.4)",
            opacity: "0",
          },
        },
        "mri-orange-scan": {
          "0%": { 
            transform: "rotateX(60deg) translateY(-100px)",
            opacity: "0",
          },
          "10%": { 
            opacity: "1",
          },
          "90%": { 
            opacity: "1",
          },
          "100%": { 
            transform: "rotateX(60deg) translateY(100px)",
            opacity: "0",
          },
        },
        "mri-3d-structure": {
          "0%, 100%": { 
            opacity: "0.4",
            transform: "rotateX(60deg) scale(1)",
          },
          "50%": { 
            opacity: "0.8",
            transform: "rotateX(60deg) scale(1.1)",
          },
        },
        "mri-3d-anatomy": {
          "0%, 100%": { 
            opacity: "0.3",
            transform: "rotateX(60deg) scaleY(0.8)",
          },
          "50%": { 
            opacity: "0.7",
            transform: "rotateX(60deg) scaleY(1.2)",
          },
        },
        "mri-3d-tissue": {
          "0%, 100%": { 
            opacity: "0.2",
            transform: "rotateX(60deg) scale(1)",
          },
          "50%": { 
            opacity: "0.5",
            transform: "rotateX(60deg) scale(1.05)",
          },
        },
        "mri-3d-field": {
          "0%": { 
            opacity: "0.2",
            transform: "rotateX(60deg) scaleY(0.5)",
          },
          "50%": { 
            opacity: "0.6",
            transform: "rotateX(60deg) scaleY(1.3)",
          },
          "100%": { 
            opacity: "0.2",
            transform: "rotateX(60deg) scaleY(0.5)",
          },
        },
        "mri-3d-particle": {
          "0%": { 
            transform: "rotateX(60deg) translateY(0) scale(0.5)",
            opacity: "0",
          },
          "20%": { 
            opacity: "1",
          },
          "80%": { 
            opacity: "1",
          },
          "100%": { 
            transform: "rotateX(60deg) translateY(-120px) scale(1.8)",
            opacity: "0",
          },
        },
        "mri-3d-bed": {
          "0%": { 
            transform: "rotateX(60deg) translateX(-100%)",
            opacity: "0",
          },
          "10%": { 
            opacity: "1",
          },
          "90%": { 
            opacity: "1",
          },
          "100%": { 
            transform: "rotateX(60deg) translateX(100%)",
            opacity: "0",
          },
        },
        "mri-3d-lighting": {
          "0%, 100%": { 
            opacity: "0.3",
            transform: "rotateX(60deg) scale(1)",
          },
          "50%": { 
            opacity: "0.6",
            transform: "rotateX(60deg) scale(1.1)",
          },
        },
        "mri-3d-ambient": {
          "0%, 100%": { 
            transform: "scale(1) rotate(0deg)",
            opacity: "0.4",
          },
          "50%": { 
            transform: "scale(1.3) rotate(180deg)",
            opacity: "0.7",
          },
        },
        "mri-teal-scan": {
          "0%": { 
            transform: "rotateX(60deg) translateY(-100px)",
            opacity: "0",
          },
          "10%": { 
            opacity: "1",
          },
          "90%": { 
            opacity: "1",
          },
          "100%": { 
            transform: "rotateX(60deg) translateY(100px)",
            opacity: "0",
          },
        },
        "mri-teal-glow": {
          "0%, 100%": { 
            transform: "scale(1) rotate(0deg)",
            opacity: "0.3",
          },
          "50%": { 
            transform: "scale(1.4) rotate(180deg)",
            opacity: "0.6",
          },
        },
        "mri-data-stream": {
          "0%": { 
            transform: "rotateX(60deg) translateY(0) scaleY(0.5)",
            opacity: "0",
          },
          "20%": { 
            opacity: "1",
            transform: "rotateX(60deg) translateY(0) scaleY(1)",
          },
          "80%": { 
            opacity: "1",
            transform: "rotateX(60deg) translateY(0) scaleY(1)",
          },
          "100%": { 
            transform: "rotateX(60deg) translateY(-80px) scaleY(0.5)",
            opacity: "0",
          },
        },
        "mri-magnetic-field": {
          "0%, 100%": { 
            opacity: "0.2",
            transform: "rotateX(60deg) scaleY(0.5)",
          },
          "50%": { 
            opacity: "0.6",
            transform: "rotateX(60deg) scaleY(1.3)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-scale": "fade-in-scale 0.5s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "mri-scan": "mri-scan 3s linear infinite",
        "mri-rotate": "mri-rotate 20s linear infinite",
        "mri-pulse-ring": "mri-pulse-ring 3s ease-out infinite",
        "particle-float": "particle-float 4s ease-in-out infinite",
        "scanner-line": "scanner-line 2s ease-in-out infinite",
        "mri-tunnel-ring": "mri-tunnel-ring 4s ease-out infinite",
        "mri-scan-line": "mri-scan-line 3s linear infinite",
        "mri-structure": "mri-structure 2s ease-in-out infinite",
        "mri-field-line": "mri-field-line 3s ease-in-out infinite",
        "mri-data-particle": "mri-data-particle 4s ease-out infinite",
        "mri-bed-movement": "mri-bed-movement 6s linear infinite",
        "mri-ambient-glow": "mri-ambient-glow 4s ease-in-out infinite",
        "mri-3d-tunnel": "mri-3d-tunnel 5s ease-out infinite",
        "mri-orange-scan": "mri-orange-scan 3s linear infinite",
        "mri-3d-structure": "mri-3d-structure 2.5s ease-in-out infinite",
        "mri-3d-anatomy": "mri-3d-anatomy 2s ease-in-out infinite",
        "mri-3d-tissue": "mri-3d-tissue 3s ease-in-out infinite",
        "mri-3d-field": "mri-3d-field 3.5s ease-in-out infinite",
        "mri-3d-particle": "mri-3d-particle 4s ease-out infinite",
        "mri-3d-bed": "mri-3d-bed 7s linear infinite",
        "mri-3d-lighting": "mri-3d-lighting 4s ease-in-out infinite",
        "mri-3d-ambient": "mri-3d-ambient 5s ease-in-out infinite",
        "mri-teal-scan": "mri-teal-scan 3s linear infinite",
        "mri-teal-glow": "mri-teal-glow 4s ease-in-out infinite",
        "mri-data-stream": "mri-data-stream 4s ease-out infinite",
        "mri-magnetic-field": "mri-magnetic-field 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

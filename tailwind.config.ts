import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Flowcore rave theme colors
        "flowcore-black": "#0f0f0f",
        "acid-green": "#39ff14",
        "cyber-blue": "#00c3ff", 
        "rave-purple": "#9d00ff",
        "neon-pink": "#ff0080",
        "electric-yellow": "#ffff00",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'mono': ['IBM Plex Mono', 'monospace'],
        'glitch': ['Courier New', 'monospace'], // Fallback until custom fonts
      },
      animation: {
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'scan': 'scan 2s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'pulse-neon': {
          '0%, 100%': { 
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
          },
          '50%': { 
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
      },
      backgroundImage: {
        'rave-gradient': 'linear-gradient(45deg, #39ff14, #00c3ff, #9d00ff, #ff0080)',
        'cyber-grid': 'linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)',
      },
      backdropBlur: {
        'rave': '20px',
      },
    },
  },
  plugins: [],
} satisfies Config;

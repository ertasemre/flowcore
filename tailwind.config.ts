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
        // Monochrome Flowcore theme colors
        "flowcore-black": "#000000",
        "dark-gray": "#0a0a0a", 
        "medium-gray": "#1a1a1a",
        "light-gray": "#2a2a2a",
        "accent-gray": "#3a3a3a",
        "text-gray": "#666666",
        "light-text": "#999999",
        "silver": "#cccccc",
        "light-silver": "#e5e5e5",
        "pure-white": "#ffffff",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'cs-felice': ['CS Felice Mono', 'JetBrains Mono', 'Fira Code', 'Courier', 'monospace'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Courier', 'monospace'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
        'pulse-mono': 'pulse-mono 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'scan': 'scan 2s linear infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
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
        'pulse-mono': {
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
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.1), 0 0 10px rgba(255, 255, 255, 0.1)',
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.2)',
          },
        },
      },
      backgroundImage: {
        'mono-gradient': 'linear-gradient(45deg, #1a1a1a, #2a2a2a, #3a3a3a, #666666)',
        'cyber-grid': 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      },
      backdropBlur: {
        'mono': '20px',
      },
      letterSpacing: {
        'cs-wide': '0.08em',
        'cs-wider': '0.12em',
        'cs-widest': '0.16em',
      },
    },
  },
  plugins: [],
} satisfies Config;

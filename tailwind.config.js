/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'impeccable-amber': '#CC8800',
        'impeccable-orange': '#C55221',
        'impeccable-cream': '#FDF8F0',
        'impeccable-charcoal': '#111827',
        'tech-blue': '#06b6d4',
        'tech-indigo': '#f97316',
        'tech-sky': '#22d3ee',
        'tech-black': '#020617',
        'tech-gray': '#0f172a',
        'tech-slate': '#1e293b',
        bg: '#020617',
        main: '#CC8800',
        muted: '#94a3b8',
        accent: '#C55221',
        'card-bg': '#0f172a',
        'border-color': '#1e293b',
      },
      fontFamily: {
        display: ['"Chakra Petch"', 'sans-serif'],
        sans: ['"Chakra Petch"', '"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'impeccable': '0 10px 30px -10px rgba(204, 136, 0, 0.25)',
        'tech': '0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)',
        'tech-sm': '0 0 5px rgba(6, 182, 212, 0.4)',
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}


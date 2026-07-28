/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-blue': '#06b6d4',
        'tech-indigo': '#f97316',
        'tech-sky': '#22d3ee',
        'tech-black': '#020617',
        'tech-gray': '#0f172a',
        'tech-slate': '#1e293b',
        bg: '#020617',
        main: '#06b6d4',
        muted: '#94a3b8',
        accent: '#f97316',
        'card-bg': '#0f172a',
        'border-color': '#1e293b',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
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

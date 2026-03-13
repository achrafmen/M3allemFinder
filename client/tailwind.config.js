/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        blue: {
          DEFAULT: 'var(--blue)',
          soft: 'var(--blue-soft)',
        },
        green: {
          DEFAULT: 'var(--green)',
          soft: 'var(--green-soft)',
        },
        red: {
          DEFAULT: 'var(--red)',
          soft: 'var(--red-soft)',
        }
      },
      boxShadow: {
        custom: '0 14px 34px rgba(17, 24, 39, 0.10)',
      },
      borderRadius: {
        xl: 'var(--radius-xl)',
        lg: 'var(--radius-lg)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)',
      },
      fontFamily: {
        sans: ['ui-rounded', '"SF Pro Rounded"', '"Avenir Next Rounded"', '"Nunito Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

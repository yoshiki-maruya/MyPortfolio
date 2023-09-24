/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: [
        'Avenir',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'Hiragino Sans',
        'ヒラギノ角ゴシック',
        'メイリオ',
        'Meiryo',
        'YuGothic',
        'Yu Gothic',
        'ＭＳ Ｐゴシック',
        'MS PGothic',
        'sans-serif'
      ]
    },
    extend: {
      animation: {
        "focus-in-contract": "focus-in-contract 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940), blur-out-expand 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 3s    both",
      },
      keyframes: {
        "focus-in-contract": {
          "0%": {
            "letter-spacing": "1em",
            filter: "blur(12px)",
            opacity: "0"
          },
          to: {
            filter: "blur(0)",
            opacity: "1"
          }
        },
        "blur-out-expand": {
          "0%": {
            opacity: "1"
          },
          to: {
            "letter-spacing": "1em",
            filter: "blur(12px) opacity(0%)",
            "display": "none",
          }
      }
      }
    }
  },
  plugins: [],
}

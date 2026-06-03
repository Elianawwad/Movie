import tailwindcssNoScrollbar from 'tailwindcss-no-scrollbar';
export default {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcssNoScrollbar,
  ]
}


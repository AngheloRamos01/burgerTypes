/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right , rgba(0, 0, 0, 1), rgba(255, 255, 255,0.2)), url('https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')",
      },
      fontFamily: {
        italianno: "Italianno",
        kottaOne: "Kotta One",
        coveat: "Coveat",
      },
    },
  },
  plugins: [],
};

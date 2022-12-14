/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors: {
        'siteblue': '#0094DA',
        'sitegreen': '#93C01F',
        'fieldwhite' : '#F5F8FB',
        'footergrey' : '#1C2126',
        'dangercolor' : '#FF6551',
        'succolor' : '#29C773'
        
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}


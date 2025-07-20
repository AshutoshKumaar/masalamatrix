/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Important for Next.js App Router
  ],
  theme: {
    extend: {
      fontFamily: {
        mooli: ["var(--font-mooli)"], // Use your Mooli font here
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
      fontSize: {
        h1: "28px",
        h2: "24px",
        h3: "20px",
        h4: "14px",
      },
      leading: {
        body: "26px",
        h1: "34px",
        h2: "29px",
        h3: "24px",
        h4: "24px",
        h5: "18px",
      },
      colors: {
        "primary-violet": "#4851b6",
        "primary-light-violet": "#939bf4",
        "primary-very-dark-blue": "#19202D",
        "primary-midnight": "#121721",
        "secondary-light-grey": "#f4f6f8",
        "secondary-grey": "#9daec2",
        "secondary-dark-grey": "#6e8098",
      },
      fontFamily: {
        kumbhSans: ["var(--font-kumbhSans)"],
      },
    },
  },
  plugins: [],
};

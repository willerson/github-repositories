import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#32C0C6',
        'primary-light': '#8FCCCE',
        'primary-dark': '##329599',
        success: '#5CB85C',
        warning: '#FFB22B',
        danger: '#FC4B6C',
        placeholder: '#8C8C8C',
        'grey-neutral': '#616161',
        'gray-dark': '#323232',
        'white-matte': '#F3F3F5',
        'border-line': '#E3E6E9',
      },
    },
  },
  plugins: [],
};
export default config;

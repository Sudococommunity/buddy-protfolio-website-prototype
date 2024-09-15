/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-white": "#fff",
        "primary-black": "#000",
        "zinc-500": "#71717a",
        gainsboro: "#e6e6e6",
        darkslategray: "#333",
        "primary-neutral": "#404040",
        "zinc-300": "#d4d4d8",
        gray: "rgba(255, 255, 255, 0)",
      },
      spacing: {},
      fontFamily: {
        "heading-h6-semibold": "Sora",
      },
      borderRadius: {
        xl: "20px",
        "lg-8": "18.8px",
        "3xs": "10px",
        "10xs": "3px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "9xl": "28px",
      "3xl": "22px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

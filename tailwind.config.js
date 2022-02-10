module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "black",
      transparent: "transparent",
      blue: "#00468E",
      "gray-subtitle": "#484848",
      "gray-nav": "#4B4A4A",
      "gray-info": "#6C6C6C",
      "gray-sub-logo-title": "#666666",
      "gray-unit": "#3C3C3C",
      red: "#B50812",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      gray: "#8492a6",
      white: "white",
      "gray-light": "#d3dce6",
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      fontSize: { "7xl": "5rem" },
      maxWidth: {
        "9xl": "75rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};

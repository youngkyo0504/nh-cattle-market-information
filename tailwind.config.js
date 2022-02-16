module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "hover-light-blue": "#D8E7EF",
      "light-blue": "#F3F6F8",
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
      footer: "#f0f0f0",
      "footer-text": "#4d5864",
    },

    fontFamily: {
      spoqa: ["Spoqa Han Sans ", "sans-serif"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: { content: "1.625rem" },
      fontSize: {
        "7xl": "5rem",
        title: "1.688rem",
        subtitle: "1.34rem",
        table: "0.969rem",
      },
      maxWidth: {
        "9xl": "70rem",
      },
      borderRadius: {
        "4xl": "2.2rem",
      },
    },
  },
};

console.log(JSON.stringify(module.exports));

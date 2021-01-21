const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      custom: {
        color1: "#b8b8b8",
        color2: "#181a1d",
        color3: "#f9f8fb",
        color4: "#4f5154",
        color5: "#898a8d",
        color6: "#393b3f",
      },
      gray: {
        DEFAULT: "#c0ccda",
      },
      green: {
        DEFAULT: "#44e0b7",
      },
      blue: {
        light: "#6948b7",
        normal: "#2563eb",
        DEFAULT: "#5230a2",
        dark: "#200a52",
        color1: "#5635ac",
        color2: "#140539",
      },
      red: colors.rose,
    },
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    keyframes: {
      spin: {
        to: {
          transform: "rotate(360deg)",
        },
      },
      ping: {
        "75%, 100%": {
          transform: "scale(2)",
          opacity: "0",
        },
      },
      pulse: {
        "50%": {
          opacity: ".5",
        },
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
        },
      },
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    borderCollapse: false,
    boxShadow: true,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridTemplateColumns: false,
    gridTemplateRows: false,
    gridAutoFlow: false,
    gridAutoColumns: false,
    gap: false,
    placeItems: false,
    placeSelf: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
  },
};

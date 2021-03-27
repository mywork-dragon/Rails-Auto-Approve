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
      yellow: colors.amber,
      green: colors.emerald,
      indigo: colors.indigo,
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
    extend: {
      fontSize: {
        2.25: '0.5625rem',
        28: '1.75rem',
        32: '2rem',
        37: '37px',
        50: '3.125rem',
        60: '3.75rem',
        90: '5.625rem',
        207: '207px'
      },
      height: {
        50: '3.125rem',
        75: '18.75rem'
      },
      width: {
        47.5: '11.875rem',
        84: '21rem',
        102: '25.5rem'        
      },
      minWidth: {
        '120': '30rem',
        '84': '21rem',
        '64': '16rem'
      },
      maxWidth: {
        '8xl': '120rem'
      },   
      minHeight: {
        '100vh': '100vh'
      },  
      padding: {
        0.25: '1px'
      },
      margin: {
        'initial': 'initial'
      },
      marginBottom: {
        26: '6.5rem'
      },
      body: ['"TypoGrotesk"'],
      display: ['TypoGrotesk'],
      fontFamily: {
        typoGrotesk: 'TypoGrotesk'
      },
      letterSpacing: {
        moretight: '-.035em',
      },
      borderRadius: {
        '24': '1.5rem',
        '22': '1.375rem'
      },
      opacity: {
        '16': '.16'
      },
      transitionProperty: {
        'right': 'right'
      },      
      colors: {
        purple1: '#6948B7',
        purple2: '#5230A2',
        gray1: '#F9F8FB',
        gray2: '#200A52',
        gray3: '#898A8D',
        gray4: '#4F5154',
        gray5: '#181A1D',
        gray6: '#254254',
        gray7: '#A7B4C0',
        gray8: '#393B3F',
        gray9: '#232529',
        gray10: '#65676A',
        gray11: '#BDBEBF',
        gray12: '#D3D3D4',
        gray13: '#FBFAFC',
        gray14: '#B5A3DF',
        gray15: '#E9EAEA',
        gray16: '#ebebeb',
        lightgray1: '#F4F4F4',
        green: '#34D399',
        lightgreen: '#44e0b7',
        lightblue: '#f0fdf9',
        lightyellow: '#fcfdf0',
        yellow: '#d2ca0c'
      },
      zIndex: {
        '-1': '-1',
        '999': '999',
        '9999': '9999'
      }
    },
    screens: {
      'max-3xl': { max: '1920px' },
      // => @media (max-width: 1920px) { ... }

      'max-2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      'max-xl': { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      'max-lg': { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      'max-md': { max: '767px' },
      // => @media (max-width: 767px) { ... }

      'max-sm': { max: '639px' },
      // => @media (max-width: 639px) { ... }



      'min-3xl': { min: '1920px' },
      // => @media (min-width: 1920px) { ... }

      'min-2xl': { min: '1535px' },
      // => @media (min-width: 1535px) { ... }

      'min-xl': { min: '1279px' },
      // => @media (min-width: 1279px) { ... }

      'min-lg': { min: '1023px' },
      // => @media (min-width: 1023px) { ... }

      'min-md': { min: '767px' },
      // => @media (min-width: 767px) { ... }

      'min-sm': { min: '639px' }
      // => @media (min-width: 639px) { ... }
    }
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
      backgroundColor: ['active'],
      tableLayout: ['hover', 'focus'],
    },
  },
  plugins: [],
};

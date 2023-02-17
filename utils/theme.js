const fontFamilyBase =
  'TheButties, Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
const fontSizeBase = 1.6;
const lineHeightBase = 1.5;
const baseline = fontSizeBase * lineHeightBase;
const breakpoints = ["30em", "48em", "62em", "80em"];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const customTheme = {
  colors: {
    customRed: {
      50: "#F6E9EC",
      100: "#F0DBDF",
      200: "#E4BEC5",
      300: "#D9A1AB",
      400: "#CD8491",
      500: "#C16777",
      600: "#AA4657",
      700: "#833543",
      800: "#5B252F",
      900: "#33151A",
    },
    customPurple: {
      50: "#EA91D7",
      100: "#E780D1",
      200: "#E15EC4",
      300: "#DA3BB8",
      400: "#C725A4",
      500: "#A51F88",
      600: "#761661",
      700: "#470D3A",
      800: "#170413",
      900: "#000000",
    },
    customYellow: {
      50: "#F2F3A1",
      100: "#F0F18F",
      200: "#EBEC6A",
      300: "#E6E746",
      400: "#E2E322",
      500: "#C2C319",
      600: "#919113",
      700: "#5F600C",
      800: "#2E2E06",
      900: "#000000",
    },
    customGray: {
      50: "#7E7E7E",
      100: "#747474",
      200: "#5F5F5F",
      300: "#4B4B4B",
      400: "#363636",
      500: "#222222",
      600: "#060606",
      700: "#000000",
      800: "#000000",
      900: "#000000",
    },
    customPink: {
      50: "#FFFFFF",
      100: "#FFFFFF",
      200: "#FCF0F6",
      300: "#F6CEE0",
      400: "#EFABCA",
      500: "#E989B4",
      600: "#E05A96",
      700: "#D72A78",
      800: "#AA205E",
      900: "#7B1744",
    },
  },
  breakpoints,
  fonts: {
    heading: fontFamilyBase,
    body: fontFamilyBase,
    mono: 'Poppins, source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  fontSizes: {
    xs: "1.2rem",
    sm: "1.4rem", // h6
    md: "1.6rem", // h5
    lg: "1.8rem", // h4
    xl: "2rem", // h3
    "2xl": "2.4rem", // h2
    "3xl": "3rem", // h1
    "4xl": "3.6rem",
    "5xl": "4.2rem",
    "6xl": "5rem",
  },
  sizes: {
    container: {
      xl: "110rem",
    },
  },
  space: {
    xs: `${baseline / 3}rem`,
    sm: `${baseline / 2}rem`,
    md: `${baseline}rem`, // 2.4rem
    lg: `${baseline * 2}rem`,
    xl: `${baseline * 3}rem`,
    "2xl": `${baseline * 4}rem`,
  },
};

export default customTheme;

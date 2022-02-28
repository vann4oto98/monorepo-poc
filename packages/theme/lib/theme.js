import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const baseFontFamily = [
  "Helvetica Neue",
  "Arial Nova",
  "Helvetica",
  "Arial",
  "sans-serif",
];

export const unifyFontFamily = ["Unify Sans", ...baseFontFamily].join(",");
export const unifyRgFontFamily = ["Unify Sans Rg", ...baseFontFamily].join(",");
export const unifySerifRgFontFamily = ["Unify Rg", ...baseFontFamily].join(",");

export const serifFontFamily = ["Georgia", "Times New Roman", "serif"].join(
  ","
);

export const panel = {
  zIndex: 1099,
};

export const Colors = {
  alertRed: "#d0021b",
  alertRedBox: "#fff2ee",
  alertRedBoxBorder: "#ffe7e7",
  black: "#000000",
  black80: "rgba(0, 0, 0, 0.8)",
  blue: "#0098f3",
  blue1: "#009bff",
  blue2: "#0098fe",
  blueDark: "#1665cf",
  blueDarkHover: "#0f4690",
  blueDarker: "#0a32a0",
  blueDarkest: "#0a2149",
  blueLight: "#7fbdff",
  blueLightest: "#b9e1ff",
  darkishRed: "#a90b1a",
  gray1: "#262626",
  gray2: "#303030",
  gray3: "#404040",
  gray4: "#626262",
  gray5: "#c2c2c2",
  gray6: "#e0e0e0",
  gray7: "#f0f0f0",
  gray8: "#f8f8f8",
  grayblue: "#344557",
  green: "#3cc37d",
  greenDark: "#1f8a5c",
  greenDarker: "#00553c",
  greenDarkest: "#012b1a",
  greenLight: "#8ad8ad",
  greenLightest: "#c8ebd7",
  indigo: "#7e7bf2",
  indigoDark: "#6662d5",
  indigoDarker: "#4f4bb6",
  indigoDarkest: "#23236e",
  indigoLight: "#a5a6f7",
  indigoLighter: "#cdd2fa",
  mango: "#ffab20",
  navyBlue: "#586BA6",
  opinionHighlight: "#eafe75",
  orange: "#fa9632",
  orangeDark: "#ee6809",
  orangeDarker: "#d34600",
  orangeDarkest: "#932803",
  orangeLight: "#ffbb7c",
  orangeLighter: "#ffe1c3",
  prussianBlue: "#004074",
  purple: "#aa50e6",
  purpleDark: "#8a32a3",
  purpleDarker: "#691464",
  purpleDarkest: "#38043a",
  purpleLight: "#cb90f1",
  purpleLighter: "#e6cdfa",
  red: "#f03c4b",
  redDark: "#cd2d37",
  redDarker: "#aa1e23",
  redDarkest: "#51010b",
  redLight: "#fb8987",
  redLighter: "#fac8c8",
  socialFacebook: "#1877f2",
  socialTwitter: "#55acee",
  succesGreenBoxBorder: "#d4efe0",
  successGreen: "#0a852b",
  successGreenBox: "#f1faf5",
  teal: "#19c8d2",
  tealDark: "#0a9299",
  tealDarker: "#005f64",
  tealDarkest: "#013535",
  tealLight: "#91dce3",
  tealLighter: "#bef9f5",
  warningYellow: "#ffd020",
  white: "#ffffff",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.white,
    },
    secondary: {
      main: Colors.blueDark,
      light: Colors.blue1,
    },
    accessory: {
      navy: Colors.indigoDark,
      lightGrey: Colors.gray5,
      azure: Colors.blue1,
      mango: Colors.mango,
      black: Colors.gray2,
    },
    text: {
      primary: Colors.gray2,
      secondary: Colors.gray3,
      light: Colors.white,
      dark: Colors.gray4,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: Colors.white,
      navigation: Colors.black,
      grey: Colors.gray7,
      darkGrey: Colors.gray6,
    },
    all: {
      ...Colors,
    },
  },
  typography: {
    fontFamily: serifFontFamily,
    color: Colors.gray2,
    h1: {
      fontFamily: unifyFontFamily,
      fontSize: 28,
      fontWeight: "bold",
    },
    h2: {
      fontFamily: unifyFontFamily,
      fontSize: 20,
      fontWeight: "bold",
    },
    h3: {
      fontFamily: unifyFontFamily,
      fontSize: 18,
      fontWeight: "bold",
    },
    h4: {
      fontFamily: unifyFontFamily,
      fontSize: 16,
      fontWeight: "bold",
      color: Colors.gray3,
    },
    h5: {
      fontFamily: unifyFontFamily,
      fontSize: 14,
      fontWeight: "bold",
    },
    h6: {
      fontFamily: unifyFontFamily,
      fontSize: 12,
      fontWeight: "bold",
      color: Colors.gray3,
    },
    subtitle1: {
      fontSize: 14,
      color: Colors.gray2,
    },
    subtitle2: {
      fontSize: 12,
      color: Colors.gray2,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontFamily: unifyFontFamily,
      fontSize: 14,
    },
    caption: {
      fontFamily: unifyRgFontFamily,
    },
    overline: {
      fontSize: 12,
      color: Colors.gray4,
    },
    menuLink: {
      fontFamily: unifyRgFontFamily,
      fontSize: 14,
      color: Colors.gray4,
    },
    input: {
      fontFamily: serifFontFamily,
      fontSize: 14,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: unifyFontFamily,
          fontSize: 14,
          fontWeight: 700,
          textTransform: "capitalize",
          maxHeight: 36,
          minWidth: 145,
          marginBottom: 35,
        },
        contained: {
          backgroundColor: Colors.blueDark,
          color: Colors.white,
          border: `2px solid ${Colors.blueDark}`,
          "&:hover": {
            border: `2px solid ${Colors.blueDarkHover}`,
            backgroundColor: Colors.blueDarkHover,
          },
        },
        outlined: {
          backgroundColor: Colors.white,
          color: Colors.black,
          border: `2px solid ${Colors.blueDark}`,
          "&:hover": {
            color: Colors.white,
            backgroundColor: Colors.blueDark,
            border: `2px solid ${Colors.blueDark}`,
          },
        },
        text: {
          backgroundColor: Colors.white,
          color: Colors.blueDark,
          border: `2px solid ${Colors.white}`,
          "&:hover": {
            border: `2px solid ${Colors.blueDarkHover}`,
            backgroundColor: Colors.blueDarkHover,
            color: Colors.white,
          },
        },
      },
    },
    MuiLink: {
      variants: [
        {
          props: { variant: "basic" },
          style: {
            color: Colors.black,
            fontFamily: unifyRgFontFamily,
            fontSize: 12,
            textDecoration: "underline",
            border: "none",
            boxShadow: "none",
          },
        },
      ],
      styleOverrides: {
        root: {
          borderBottom: `2px solid ${Colors.blue1}`,
          lineHeight: 1,
          boxShadow: `0px 2px 2px -2px rgba(0,155,255,0.7)`,
          cursor: "pointer",
          color: Colors.gray2,
          "&:focus, &:hover, &:visited, &:link, &:active": {
            textDecoration: "none",
            borderBottom: `2px solid ${Colors.blue1}`,
          },
        },
      },
    },
  },
});

export default theme;

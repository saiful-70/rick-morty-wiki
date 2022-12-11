import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9DFE00",
    },
    secondary: {
      main: "#14D9E6",
    },
    common: {
      black: "#191D29",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: ["TTTravels", "Roboto", "sans-serif"].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": ["TTTravels"],
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

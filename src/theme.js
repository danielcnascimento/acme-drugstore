import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#15C3D6",
    },
    secondary: {
      main: "#FFF700",
    },
    text: {
      primary: "#3F76DC",
    },
    //action: "#fff",
  },
  typography: {
    fontFamily: "Poppins",
  },
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

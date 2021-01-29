import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "auto",
    overflowX: "auto",
  },
  container: {
    width: "100%",
    maxHeight: 600,
    [theme.breakpoints.down(370)]: {
      height: 500,
    },
    [theme.breakpoints.down("md")]: {
      maxHeight: 600,
    },
    [theme.breakpoints.up(700)]: {
      maxHeight: 650,
    },
  },
  tableCell: {
    color: "#000",
  },
  cellHeader: {
    fontSize: "1.2rem",
  },
  icnArea: {
    width: "100vmin",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingIcn: {
    width: "20rem",
    height: "auto",
  },
}));

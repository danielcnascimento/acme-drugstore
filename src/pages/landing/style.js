import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme) => ({
  title: {
    fontWeight: "700",
    fontSize: "60px",
    lineHeight: "100px",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px",
    },
  },

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    width: "586px",
    height: "287px",
    [theme.breakpoints.down("xs")]: {
      width: "280px",
      height: "150px",
    },
  },
  button: {
    width: "300px",
    height: "60px",
    margin: " 1.1rem",
    [theme.breakpoints.down("xs")]: {
      width: "200px",
    },
    [theme.breakpoints.up("300px")]: {
      width: "250px",
    },
  },
  btnTitle: {
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  btnContainer: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  modalContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

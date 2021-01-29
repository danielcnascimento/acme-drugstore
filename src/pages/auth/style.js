import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    background: "#fff",
    borderRadius: ".2rem",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  logo: {
    width: "169.47px",
    height: "83px",
    margin: "10px 0",
  },
  entrar: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#7B7B7B",
    fontSize: "24px",
    lineHeight: "36px",
    textTransform: "lowercase",
  },
  form_area: {
    margin: "0 1rem 1rem 1rem",
  },
  input_area: {
    margin: "2rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "402px",
    [theme.breakpoints.down("xs")]: {
      width: "250px",
    },
  },
  sendBtn: {
    width: "402px",
    [theme.breakpoints.down("xs")]: {
      width: "250px",
    },
  },
  btnTitle: {
    fontWeight: "bold",
  },
}));

import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const useStyle = makeStyles((theme) => ({
  closeBtn: {
    color: red[500],
  },
  title: {
    [theme.breakpoints.down("370")]: {
      textAlign: "center",
    },
  },
  input: {
    [theme.breakpoints.down("370")]: {
      marginRight: "0.5rem",
    },
  },
}));

import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Modal,
  Fade,
  Backdrop,
  Container,
  Grow,
} from "@material-ui/core";
import { useStyle } from "./style";
import logoImg from "../../assets/main-logo.png";
import Auth from "../auth/Auth";

const Landing = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className="root">
      <div className={classes.container}>
        <Grow in={checked} {...(checked ? { timeout: 700 } : {})}>
          <div>
            <Typography
              variant="h3"
              component="h3"
              color="textPrimary"
              className={classes.title}
            >
              Bem vindo a
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              color="secondary"
              className={classes.title}
            >
              DROGARIA
            </Typography>
          </div>
        </Grow>
        <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
          <div>
            <img src={logoImg} className={classes.image} />

            <div className={classes.btnContainer}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={() => setOpen(true)}
              >
                <Typography
                  variant="h5"
                  color="primary"
                  className={classes.btnTitle}
                >
                  ENTRAR
                </Typography>
              </Button>
            </div>

            <Modal
              className={classes.modalContainer}
              open={open}
              onClose={() => setOpen(false)}
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Auth />
              </Fade>
            </Modal>
          </div>
        </Grow>
      </div>
    </div>
  );
};

export default Landing;

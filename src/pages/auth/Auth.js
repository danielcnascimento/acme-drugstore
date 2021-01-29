import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Info } from "@material-ui/icons";
import logoImg from "../../assets/main-logo.png";
import { useStyle } from "./style";
import api from "../../services/api";
import Dialog from "../../utils/Dialog";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const classes = useStyle();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  //states para os campos.
  const [email, setEmail] = useState("candidato@bluestorm.com.br");
  const [senha, setSenha] = useState("Bluestorm@123");

  //vai encaminhar os dados para autenticação.
  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      username: email,
      password: senha,
    };

    await api
      .post("login", data)
      .then((res) => {
        const { token } = res.data.data;
        localStorage.setItem("acesso", token);
        console.log(res.data.data);
        history.push("/drugs");
      })
      .catch((err) => console.log(err.toJSON()));
  }

  return (
    <Box className={classes.root}>
      <img src={logoImg} className={classes.logo} />
      <span className={classes.entrar}>Entrar</span>
      <IconButton onClick={() => setOpen(true)}>
        <Info color="primary" />
      </IconButton>
      <form onSubmit={handleSubmit} className={classes.form_area}>
        <Dialog open={open} setOpen={setOpen} />
        <div className={classes.input_area}>
          <TextField
            name="email"
            className={classes.input}
            type="email"
            required
            label="email"
            variant="outlined"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={classes.input_area}>
          <TextField
            name="senha"
            className={classes.input}
            type="password"
            required
            label="senha"
            variant="outlined"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.sendBtn}
            type="submit"
          >
            <Typography
              variant="h5"
              color="secondary"
              className={classes.btnTitle}
            >
              entrar
            </Typography>
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default Auth;

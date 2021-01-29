import React from "react";
import { Route, Redirect } from "react-router-dom";

// CASO O CLIENT NÃO TENHA A TOKEN NO LOCAL STORAGE, ELE NÃO PODERA ACESSAR OUTRAS PÁGINAS.

const PrivateRoute = (props) => {
  const isLogged = !!localStorage.getItem("acesso");

  return isLogged ? <Route {...props} /> : <Redirect to="/" />;
};

export default PrivateRoute;

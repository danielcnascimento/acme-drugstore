import {
  Typography,
  TextField,
  Container,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./medications-style.css";
import logoImg from "../../assets/main-logo.png";
import searchIcn from "../../assets/search-icon.svg";
import DrugsData from "../../components/drugs-data/DrugsData";

const Medications = () => {
  const [open, setOpen] = React.useState(false);
  const [fetchDrugs, setFetchDrugs] = React.useState("");

  return (
    <div id="page-drugs">
      <div className="menu-icon">
        <IconButton
          onClick={() => {
            setOpen(!open);
          }}
        >
          <SearchIcon />
        </IconButton>
      </div>
      <aside style={{ left: open ? 0 : "-35rem" }}>
        <div className="header">
          <img
            src={searchIcn}
            alt="search icon"
            className="close"
            onClick={() => {
              setOpen(!open);
            }}
          />
          <Typography variant="body1" component="strong">
            Então, como podemos te ajudar hoje, Joaquim ?
          </Typography>
          <TextField
            variant="outlined"
            label="comprimidos, pomadas, produtos..."
            color="secondary"
            onChange={(e) => setFetchDrugs(e.target.value)}
          />
          <Typography variant="body1" component="strong" color="secondary">
            ENCONTRAMOS 200 PRODUTOS PARA “comprimidos”
          </Typography>
        </div>

        <footer>
          <div className="greetings">
            <strong>Boa tarde,</strong>
            <strong>Seu joaquim</strong>
          </div>
          <div>
            <img src={logoImg} alt="company logo" />
          </div>
        </footer>
      </aside>

      <Container maxWidth="md">
        <DrugsData fetchResult={fetchDrugs} />
      </Container>
    </div>
  );
};

export default Medications;

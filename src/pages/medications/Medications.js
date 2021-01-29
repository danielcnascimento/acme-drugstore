import {
  Typography,
  TextField,
  Container,
  IconButton,
} from "@material-ui/core";
import { Search, CloseRounded, WhatsApp } from "@material-ui/icons";
import React from "react";
import "./medications-style.css";
import logoImg from "../../assets/main-logo.png";
import searchIcn from "../../assets/search-icon.svg";
import DrugsData from "../../components/DrugsData";
import { useStyle } from "./style";

const Medications = () => {
  const classes = useStyle();
  const [open, setOpen] = React.useState(true);
  const [fetchDrugs, setFetchDrugs] = React.useState("");
  const [result, setResult] = React.useState(0);

  return (
    <div id="page-drugs">
      <div className="whatsApp-icon">
        <IconButton>
          <WhatsApp className="whatsApp" />
        </IconButton>
      </div>
      <div className="menu-icon">
        <IconButton
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Search />
        </IconButton>
      </div>
      <aside style={{ left: open ? 0 : "-35rem" }}>
        <div className="header">
          <div className="close">
            <IconButton
              className={classes.closeBtn}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <CloseRounded />
            </IconButton>
          </div>
          <img src={searchIcn} alt="search icon" />
          <Typography
            variant="body1"
            component="strong"
            className={classes.title}
          >
            Então, como podemos te ajudar hoje, Joaquim ?
          </Typography>
          <TextField
            className={classes.input}
            variant="outlined"
            label="Pesquisar..."
            color="secondary"
            onChange={(e) => setFetchDrugs(e.target.value)}
          />
          {fetchDrugs && (
            <Typography variant="body1" component="strong" color="secondary">
              ENCONTRAMOS {result} PRODUTOS PARA “{fetchDrugs}”
            </Typography>
          )}
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
        <DrugsData fetchResult={fetchDrugs} getResult={setResult} />
      </Container>
    </div>
  );
};

export default Medications;

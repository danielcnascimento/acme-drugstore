import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//CAIXA DE DIALOGO USADA PARA AMBIENTE DE DESENVOLVIMENTO - FACILITA O ACESSO.

export default function DialogPopUp(props) {
  const { open, setOpen } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle>Testing Environment - Log in</DialogTitle>
        <DialogContent>
          <DialogContentText color="textPrimary">
            YOU CAN GET STARTED WITH FOLLOWING ACCESS KEYS: ‏
          </DialogContentText>
          <DialogContentText>
            email:candidato@bluestorm.com.br
          </DialogContentText>
          <DialogContentText>password:Bluestorm@123</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose} color="textPrimary">
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

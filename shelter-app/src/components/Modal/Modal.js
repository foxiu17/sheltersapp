import React from "react";
import { injectIntl, FormattedMessage } from "react-intl";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "./Modal.style";

const Modal = ({
  handleClose,
  handleConfirmAction,
  open,
  name,
  modalTitle,
  modalText
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <FormattedMessage id={modalTitle} values={{ text: `${name}` }} />
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <FormattedMessage id={modalText} values={{ text: `${name}` }} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          <FormattedMessage id="APP_MODAL.CANCEL" />
        </Button>
        <Button onClick={handleConfirmAction} color="primary" autoFocus>
          <FormattedMessage id="APP_MODAL.CONFIRM" />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default injectIntl(Modal);

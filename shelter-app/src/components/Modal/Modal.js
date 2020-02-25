import React from "react";
import PropTypes from "prop-types";
import { injectIntl, FormattedMessage } from "react-intl";

import { useTheme } from "../../ThemeContext";

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
  const theme = useTheme();
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
        <Button onClick={handleClose} color="primary" theme={theme}>
          <FormattedMessage id="APP_MODAL.CANCEL" />
        </Button>
        <Button
          onClick={handleConfirmAction}
          color="primary"
          theme={theme}
          autoFocus
        >
          <FormattedMessage id="APP_MODAL.CONFIRM" />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  handleConfirmAction: PropTypes.func,
  open: PropTypes.bool,
  name: PropTypes.string,
  modalTitle: PropTypes.string,
  modalText: PropTypes.string
};

export default injectIntl(Modal);

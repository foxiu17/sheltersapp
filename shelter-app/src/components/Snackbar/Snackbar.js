import React from "react";
import PropTypes from "prop-types";

import { useTheme } from "../../ThemeContext";

import { SnackbarWrapper, IconButton, CloseIcon } from "./Snackbar.style";

const Snackbar = ({ text, open, handleClose, color }) => {
  const theme = useTheme();
  return (
    <SnackbarWrapper
      theme={theme.palette}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      success={color}
      message={text}
      action={
        <>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  );
};

Snackbar.propTypes = {
  text: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  color: PropTypes.string
};

export default Snackbar;

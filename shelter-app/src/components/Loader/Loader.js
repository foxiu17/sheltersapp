import React from "react";
import PropTypes from "prop-types";

import { useTheme } from "../../ThemeContext";

import { Progress, LoadingScreen, Label } from "./Loader.style";

const Loader = ({ label }) => {
  const theme = useTheme();
  return (
    <>
      <LoadingScreen>
        {label && <Label theme={theme.palette.common}>{label}</Label>}
        <Progress theme={theme.palette.common} color="inherit" />
      </LoadingScreen>
    </>
  );
};

Loader.propTypes = {
  label: PropTypes.string
};

export default Loader;

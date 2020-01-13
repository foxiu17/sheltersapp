import React from "react";

import { useTheme } from "../../ThemeContext";

import { Progress, LoadingScreen, Label } from "./Loader.style";

const Loader = ({ label }) => {
  const theme = useTheme();
  return (
    <>
      <LoadingScreen>
        {label && <Label theme={theme.palette.common}>{label}</Label> }
        <Progress theme={theme.palette.common} color="inherit" />
      </LoadingScreen>
    </>
  );
};

export default Loader;

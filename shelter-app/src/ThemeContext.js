import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { useTheme } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import defaultTheme from "./assets/themes/defaultTheme";
import darkTheme from "./assets/themes/darkTheme";

const Context = React.createContext();

const ThemeProviderWrapper = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) setCurrentTheme(darkTheme);
    return function cleanUp() {
      setCurrentTheme(defaultTheme);
    };
  }, [darkMode]);
  return (
    <Context.Provider value={{ setCurrentTheme, setDarkMode, darkMode }}>
      <ThemeProvider theme={createMuiTheme(currentTheme)}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
};

export { ThemeProviderWrapper, useTheme, Context as ThemeContext };

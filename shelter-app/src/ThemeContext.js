import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { useTheme } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import defaultTheme from './assets/themes/defaultTheme';

const Context = React.createContext();

const ThemeProviderWrapper = ({children}) => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);
  return ( 
    <Context.Provider value={setCurrentTheme}>
      <ThemeProvider theme={createMuiTheme(currentTheme)}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
}

export {ThemeProviderWrapper, useTheme};
import React, { useState } from "react";
import { useTheme } from "../../ThemeContext";

import {
  Footerbox,
  BottomNavigation,
  BottomNavigationAction,
  InfoIcon,
  HelpIcon
} from "./Footer.style";

const Footer = () => {
  const [value, setValue] = useState("null");
  const theme = useTheme();
  console.log(theme);

  const changeValue = (event, value) => {
    setValue(value);
  };
  return (
    <Footerbox theme={theme}>
      <BottomNavigation
        value={value}
        onChange={changeValue}
        theme={theme}
        component="div"
      >
        <BottomNavigationAction
          theme={theme}
          label="About us"
          icon={<InfoIcon theme={theme} />}
          value="aboutUs"
        />
        <BottomNavigationAction
          theme={theme}
          label="Help"
          icon={<HelpIcon theme={theme} />}
          value="help"
        />
      </BottomNavigation>
    </Footerbox>
  );
};

export default Footer;

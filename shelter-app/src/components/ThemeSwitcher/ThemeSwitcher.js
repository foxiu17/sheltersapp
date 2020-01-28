import React, { useContext } from "react";
import { injectIntl } from "react-intl";

import { ThemeContext, useTheme } from "../../ThemeContext";

import { FormControlLabel, Switch } from "./ThemeSwitcher.style";

const ThemeSwitcher = ({ intl }) => {
  const { setDarkMode, darkMode } = useContext(ThemeContext);
  const theme = useTheme();

  const handleChange = event => {
    setDarkMode(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Switch
          theme={theme}
          checked={darkMode}
          onChange={handleChange}
          value="checkedA"
          color="default"
        />
      }
      label={`${intl.formatMessage({ id: "APP_LABEL.DARK_THEME" })}`}
      theme={theme}
    />
  );
};

export default injectIntl(ThemeSwitcher);

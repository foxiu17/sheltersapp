import React, { useState, useContext, useEffect } from "react";
import { injectIntl } from "react-intl";

import { useTheme } from "../../ThemeContext";
import { IntlContext } from "../../IntlContext";

// import { TextField } from "../../assets/common/Input.style";

import pl from "../../assets/images/countries/PL.png";
import en from "../../assets/images/countries/EN.png";

import { TextField, Icon, IconsBox } from "./LanguagesSwitcher.style";

const LanguagesSwitcher = ({ intl }) => {
  const theme = useTheme();
  const [currentLanguage, setCurrentLanguage] = useState("");
  const { switchLanguage } = useContext(IntlContext);

  const handleChange = language => {
    // console.log(currentLanguage);
    // console.log(event.currentTarget.value);
    // console.log(event.target.value);
    console.log(language);
    switchLanguage(language);
  };

  console.log("language: ", currentLanguage);
  return (
    <IconsBox>
      <Icon src={pl} alt="pl" onClick={() => handleChange("pl-PL")} />
      <Icon src={en} alt="en" onClick={() => handleChange("en-GB")} />
    </IconsBox>
    // <TextField
    //   theme={theme}
    //   select
    //   label={intl.formatMessage({
    //     id: "APP_LABEL.LANGUAGE"
    //   })}
    //   value={currentLanguage}
    //   onChange={handleChange}
    //   size="small"
    //   autoWidth
    //   SelectProps={{
    //     native: true
    //   }}
    //   // variant="outlined"
    //   margin="none"
    // >
    //   <option value=""></option>

    //   <option value="pl-PL">
    //     {intl.formatMessage({ id: "APP_LABEL.POLISH" })}
    //   </option>
    //   <option value="en-GB">
    //     {intl.formatMessage({ id: "APP_LABEL.ENGLISH" })}
    //   </option>
    // </TextField>
  );
};

export default injectIntl(LanguagesSwitcher);

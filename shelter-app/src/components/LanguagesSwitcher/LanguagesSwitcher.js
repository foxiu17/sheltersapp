import React, { useContext } from "react";
import { injectIntl } from "react-intl";

import { IntlContext } from "../../IntlContext";

import pl from "../../assets/images/countries/PL.png";
import en from "../../assets/images/countries/EN.png";

import { Icon, IconsBox } from "./LanguagesSwitcher.style";

const LanguagesSwitcher = ({ intl }) => {
  const { switchLanguage } = useContext(IntlContext);

  const handleChange = language => {
    switchLanguage(language);
  };

  return (
    <IconsBox>
      <Icon src={pl} alt="pl" onClick={() => handleChange("pl-PL")} />
      <Icon src={en} alt="en" onClick={() => handleChange("en-GB")} />
    </IconsBox>
  );
};

export default injectIntl(LanguagesSwitcher);

import React from "react";
import PropTypes from "prop-types";

import { useTheme } from "../../ThemeContext";

import { Content, Bg, BackgroundWrapper } from "./Background.style";

const Background = ({ image, children, bg }) => {
  const theme = useTheme();

  return (
    <BackgroundWrapper>
      <Content background={image} theme={theme}>
        {children}
      </Content>
      {bg && <Bg theme={theme} />}
    </BackgroundWrapper>
  );
};

Background.defaultProps = {
  bg: true
};

Background.propTypes = {
  image: PropTypes.string,
  children: PropTypes.object,
  bg: PropTypes.bool
}
export default Background;

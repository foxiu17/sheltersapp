import React from "react";

import { useTheme } from "../../ThemeContext";

import { Content, Bg, BackgroundWrapper } from "./Background.style";

const Background = ({ image, children, bg = true }) => {
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

export default Background;

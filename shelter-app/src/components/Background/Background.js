import React from "react";

import { Content, Bg, BackgroundWrapper } from "./Background.style";

const Background = ({ image, children }) => {
  return (
    <BackgroundWrapper>
      <Content background={image}>{children}</Content>
      <Bg />
    </BackgroundWrapper>
  );
};

export default Background;

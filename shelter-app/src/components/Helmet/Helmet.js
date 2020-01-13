import React from "react";
import { Helmet as HelmetWrapper } from "react-helmet-async";

const Helmet = ({ title }) => {

  return (
    <HelmetWrapper titleTemplate={`%s | SHELTER APP`}>
      <html lang="pl" />
      <title>{title}</title>
    </HelmetWrapper>
  );
};

export default Helmet;

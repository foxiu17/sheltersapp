import React from "react";
import PropTypes from "prop-types";
import { Helmet as HelmetWrapper } from "react-helmet-async";

const Helmet = ({ title }) => {
  return (
    <HelmetWrapper titleTemplate={`%s | SHELTER APP`}>
      <html lang="pl" />
      <title>{title}</title>
    </HelmetWrapper>
  );
};

Helmet.propTypes = {
  title: PropTypes.string
};

export default Helmet;

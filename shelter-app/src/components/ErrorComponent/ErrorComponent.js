import React from "react";
import PropTypes from "prop-types";

import {
  ErrorContainer,
  ErrorItem,
  Typography,
  Image
} from "./ErrorComponent.style";

import image from "../../assets/images/error/error-dog.svg";

const ErrorComponent = ({ title, text }) => {
  return (
    <ErrorContainer>
      <ErrorItem>
        <Image src={image} alt="No data" />
      </ErrorItem>
      <ErrorItem>
        {title && (
          <Typography variant="h4" component="h2" gutterBottom>
            {title}
          </Typography>
        )}
        {text && (
          <Typography variant="body1" component="p">
            {text}
          </Typography>
        )}
      </ErrorItem>
    </ErrorContainer>
  );
};

ErrorComponent.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

export default ErrorComponent;

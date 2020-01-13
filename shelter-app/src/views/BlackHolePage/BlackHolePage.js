import React from "react";
import { withRouter } from "react-router";

import Helmet from '../../components/Helmet';

const BlackHolePage = () => {
  return (
    <>
      <Helmet title="404 Page" />
      <p>404</p>
    </>
  );
};

export default withRouter(BlackHolePage);

import React, { useState } from "react";
import { withRouter } from "react-router";
import { injectIntl } from "react-intl";

import { useTheme } from "../../ThemeContext";

import Helmet from "../../components/Helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SignUpPanel from "../../components/SignUpPanel";
import Sidebar from "../../components/Sidebar";
import Background from "../../components/Background";

import bg from "../../assets/images/backgrounds/bg-5.jpg";

import { Container, Grid } from "../../assets/common/Layout.style";

const SignUpPage = ({ history, intl }) => {
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMutationSuccess, setIsMutationSuccess] = useState(false);

  const handleSubmit = (values, createAccount) => {
    createAccount({
      variables: { email: values.email, password: values.password },
      onCompleted: setIsMutationSuccess(true)
    });
  };

  return (
    <>
      <Helmet title={intl.formatMessage({ id: "APP_TITLE.SIGN_UP_PAGE" })} />
      <Header
        mainTitle={intl.formatMessage({ id: "APP_TITLE.SIGN_UP_PAGE" })}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar open={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Background image={bg} theme={theme}>
        <Container>
          <Grid container justify="center">
            <Grid item xs={12} sm={8} md={6}>
              <SignUpPanel
                onSubmit={handleSubmit}
                isMutationSuccess={isMutationSuccess}
              />
            </Grid>
          </Grid>
        </Container>
      </Background>
      <Footer />
    </>
  );
};

export default withRouter(injectIntl(SignUpPage));

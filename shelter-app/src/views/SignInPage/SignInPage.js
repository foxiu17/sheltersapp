import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { injectIntl } from "react-intl";
import { useLazyQuery } from "@apollo/react-hooks";

import { useStateContextAuthorization } from "../../context/auth-context";
import { useTheme } from "../../ThemeContext";

import Helmet from "../../components/Helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoginPanel from "../../components/LoginPanel";
import Sidebar from "../../components/Sidebar";
import Loader from "../../components/Loader";
import Background from "../../components/Background";

import bg from "../../assets/images/backgrounds/bg-office-1.jpg";

import { Container, Grid } from "../../assets/common/Layout.style";

import { LOG_IN } from "../../views/SignInPage/SignInPage.query";

const SignInPage = ({ intl, history }) => {
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [, dispatch] = useStateContextAuthorization();
  const [LogIn, { loading, error, data }] = useLazyQuery(LOG_IN);

  const handleLogIn = values => {
    LogIn({
      variables: { ...values }
    });
  };

  const letLogIn = () => {
    dispatch({
      type: "login",
      payload: { ...data.login }
    });
  };

  useEffect(() => {
    if (data && data !== undefined) letLogIn();
    if (data !== undefined) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <Helmet title={intl.formatMessage({ id: "APP_TITLE.LOG_IN_PAGE" })} />
      <Header
        mainTitle={intl.formatMessage({ id: "APP_TITLE.LOG_IN_PAGE" })}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar open={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Background image={bg} theme={theme}>
        <Container background="true">
          <Grid container justify="center">
            <Grid item xs={12} sm={8} md={5}>
              <LoginPanel onSubmit={handleLogIn} error={error} />
              {loading && (
                <Loader
                  label={intl.formatMessage({ id: "APP_STATE.LOADING" })}
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </Background>
      <Footer />
    </>
  );
};

export default withRouter(injectIntl(SignInPage));

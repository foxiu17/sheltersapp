import React, { useState, useEffect } from "react";
import { useTheme } from "../../ThemeContext";
import { injectIntl } from "react-intl";
import { useMutation } from "@apollo/react-hooks";

import { EDIT_ACCOUNT } from "./EditAccountPage.query";

import Helmet from "../../components/Helmet";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import EditAccountPanel from "../../components/EditAccountPanel";
import Snackbar from "../../components/Snackbar";

import { useStateContextAuthorization } from "../../context/auth-context";

import { Container, Grid } from "../../assets/common/Layout.style";

const EditAccountPage = ({ intl }) => {
  const theme = useTheme();
  const [auth] = useStateContextAuthorization();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState({});
  const [editAccount, { loading, error }] = useMutation(EDIT_ACCOUNT);

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarOpen(false);
  };

  const handleEditAccount = values => {
    editAccount({
      variables: {
        email: auth.email,
        ...values
      },
      onCompleted: setSnackbarMessage({
        message: `${intl.formatMessage({
          id: "SNACKBAR.EDIT_ACCOUNT_SUCCESS"
        })}`,
        color: "success"
      })
    });
    setIsSnackbarOpen(true);
  };

  useEffect(() => {
    setSnackbarMessage({
      message: `${intl.formatMessage({ id: "SNACKBAR.EDIT_ACCOUNT_FAILED" })}`,
      color: "error"
    });

    return function cleanUp() {
      setSnackbarMessage({});
    };
  }, [error, intl]);

  return (
    <>
      <Helmet title={intl.formatMessage({ id: "APP_TITLE.EDIT_ACCOUNT" })} />
      <Header
        mainTitle={intl.formatMessage({ id: "APP_TITLE.EDIT_ACCOUNT" })}
        sidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar open={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Container theme={theme}>
        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            <EditAccountPanel
              onSubmit={handleEditAccount}
              loading={loading}
              email={auth.email}
            />
            <Snackbar
              text={snackbarMessage.message}
              open={isSnackbarOpen}
              handleClose={closeSnackbar}
              color={snackbarMessage.color}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default injectIntl(EditAccountPage);

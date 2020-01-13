import React, { useState, useEffect } from "react";
import { injectIntl } from "react-intl";
import { useMutation } from "@apollo/react-hooks";

import { useTheme } from "../../ThemeContext";

import { ADD_SHELTER } from "../../views/AddShelterPage/AddShelterPage.query";

import Helmet from "../../components/Helmet";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import AddShelterForm from "../../components/AddShelterForm";
import Snackbar from "../../components/Snackbar";

import { Container, Grid } from "../../assets/common/Layout.style";

const AddShelterPage = ({ intl }) => {
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState({});
  const [addShelter, { loading, error }] = useMutation(ADD_SHELTER);

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarOpen(false);
  };

  const handleAddShelter = values => {
    addShelter({
      variables: {
        ...values
      },
      onCompleted: setSnackbarMessage({
        message: `${intl.formatMessage({
          id: "SNACKBAR.ADD_SHELTER_SUCCESS"
        })}`,
        color: "success"
      })
    });
    setIsSnackbarOpen(true);
  };

  useEffect(() => {
    setSnackbarMessage({
      message: `${intl.formatMessage({ id: "SNACKBAR.ADD_SHELTER_FAILED" })}`,
      color: "error"
    });

    return function cleanUp() {
      setSnackbarMessage({});
    };
  }, [error, intl]);

  return (
    <>
      <Helmet title={intl.formatMessage({ id: "APP_TITLE.ADD_SHELTER" })} />
      <Header
        mainTitle={intl.formatMessage({ id: "APP_TITLE.ADD_SHELTER" })}
        sidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar open={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Container theme={theme}>
        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            <AddShelterForm onSubmit={handleAddShelter} loading={loading} />
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

export default injectIntl(AddShelterPage);

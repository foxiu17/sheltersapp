import React, { useState, useEffect } from "react";
import { useTheme } from "../../ThemeContext";
import { injectIntl } from "react-intl";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { GET_SHELTERS, ADD_PET } from "./AddPetPage.query";

import Helmet from "../../components/Helmet";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import AddPetForm from "../../components/AddPetForm";
import Snackbar from "../../components/Snackbar";

import { Container, Grid } from "../../assets/common/Layout.style";

const AddPetPage = ({ intl }) => {
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState({});
  const { data } = useQuery(GET_SHELTERS, {
    networkStatus: 4,
    fetchPolicy: "cache-and-network"
  });
  const [addPet, { loading, error }] = useMutation(ADD_PET);

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarOpen(false);
  };

  const handleAddPet = values => {
    addPet({
      variables: {
        type: values.type,
        name: values.name,
        age: parseInt(values.age),
        description: values.description,
        shelter: values.shelter
      },
      onCompleted: setSnackbarMessage({
        message: `${intl.formatMessage({ id: "SNACKBAR.ADD_PET_SUCCESS" })}`,
        color: "success"
      })
    });
    setIsSnackbarOpen(true);
  };

  useEffect(() => {
    setSnackbarMessage({
      message: `${intl.formatMessage({ id: "SNACKBAR.ADD_PET_FAILED" })}`,
      color: "error"
    });

    return function cleanUp() {
      setSnackbarMessage({});
    };
  }, [error, intl]);

  return (
    <>
      <Helmet title={intl.formatMessage({ id: "APP_TITLE.ADD_PET" })} />
      <Header
        mainTitle={intl.formatMessage({ id: "APP_TITLE.ADD_PET" })}
        sidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar open={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Container theme={theme}>
        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            {data && (
              <AddPetForm
                onSubmit={handleAddPet}
                loading={loading}
                shelters={data.shelters}
              />
            )}
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

export default injectIntl(AddPetPage);

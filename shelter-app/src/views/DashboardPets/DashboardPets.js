import React, { useState, useEffect } from "react";
import { injectIntl } from "react-intl";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { useTheme } from "../../ThemeContext";

import { DashboardPetsHeadlines } from "../../assets/const/headlines";
import {
  RemovePetModalTitle,
  RemovePetModalText
} from "../../assets/const/modal";

import { GET_PETS, REMOVE_PET } from "./DashboardPets.query";

import Helmet from "../../components/Helmet";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import TableWrapper from "../../components/Table";
import Modal from "../../components/Modal";
import ErrorComponent from "../../components/ErrorComponent";
import Snackbar from "../../components/Snackbar";

import { Container, Grid } from "../../assets/common/Layout.style";
import { Delete } from "../../assets/common/Icon.style";

const DashboardPets = ({ intl }) => {
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState({});
  const [petToRemove, setPetToRemove] = useState({});
  const { loading, error, data } = useQuery(GET_PETS, {
    networkStatus: 4,
    fetchPolicy: "cache-and-network"
  });
  const [RemovePet, { error: queryError }] = useMutation(REMOVE_PET, {
    refetchQueries: [
      {
        query: GET_PETS
      }
    ]
  });

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarOpen(false);
  };

  const toggleModal = (id, name) => {
    setIsModalOpen(!isModalOpen);
    if (id && name) {
      setPetToRemove({
        id,
        name
      });
    } else {
      setPetToRemove({});
    }
  };

  const removePet = () => {
    RemovePet({
      variables: {
        id: petToRemove.id
      },
      onCompleted: setSnackbarMessage({
        message: `${intl.formatMessage({ id: "SNACKBAR.REMOVE_PET_SUCCESS" })}`,
        color: "success"
      })
    });
    toggleModal();
    setIsSnackbarOpen(true);
  };

  const setData = (data, arr = []) => {
    data.forEach((element, index) => {
      arr.push({
        index: index + 1,
        ...element,
        voivodeship: element.shelter.voivodeship,
        city: element.shelter.city,
        shelter_name: element.shelter.name,
        actions: (
          <Delete
            theme={theme}
            onClick={() => toggleModal(element._id, element.name)}
          />
        )
      });
    });
    return arr;
  };

  useEffect(() => {
    setSnackbarMessage({
      message: `${intl.formatMessage({ id: "SNACKBAR.REMOVE_PET_FAILED" })}`,
      color: "error"
    });

    return function cleanUp() {
      setSnackbarMessage({});
    };
  }, [queryError, intl]);

  return (
    <>
      <Helmet title={intl.formatMessage({ id: "APP_TITLE.DASHBOARD_PETS" })} />
      <Header
        mainTitle={intl.formatMessage({ id: "APP_TITLE.DASHBOARD_PETS" })}
        sidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar open={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Container theme={theme}>
        <Grid container justify="space-around">
          {data && !error && data.pets.length > 0 && (
            <TableWrapper
              headlines={DashboardPetsHeadlines}
              data={setData(data.pets)}
            />
          )}
          {data && data.pets.length === 0 && (
            <ErrorComponent
              title={intl.formatMessage(
                { id: "APP_STATE.SORRY" },
                { text: "" }
              )}
              text={intl.formatMessage({ id: "APP_STATE.NO_DATA" })}
            />
          )}
          {error && (
            <ErrorComponent
              title={intl.formatMessage(
                { id: "APP_STATE.ERROR" },
                { text: "" }
              )}
              text={error.message}
            />
          )}
          {loading && <Loader />}
          {isModalOpen && (
            <Modal
              handleClose={toggleModal}
              handleConfirmAction={removePet}
              open={true}
              name={petToRemove.name}
              modalTitle={RemovePetModalTitle}
              modalText={RemovePetModalText}
            />
          )}
          <Snackbar
            text={snackbarMessage.message}
            open={isSnackbarOpen}
            handleClose={closeSnackbar}
            color={snackbarMessage.color}
          />
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default injectIntl(DashboardPets);

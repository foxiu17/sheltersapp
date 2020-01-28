import React, { useState, useEffect } from "react";
import { injectIntl } from "react-intl";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { useTheme } from "../../ThemeContext";

import { DashboardSheltersHeadlines } from "../../assets/const/headlines";
import {
  RemoveShelterModalTitle,
  RemoveShelterModalText
} from "../../assets/const/modal";

import { GET_SHELTERS, REMOVE_SHELTER } from "./DashboardShelters.query";

import Helmet from "../../components/Helmet";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import TableWrapper from "../../components/Table";
import Modal from "../../components/Modal";
import ErrorComponent from "../../components/ErrorComponent";
import Snackbar from "../../components/Snackbar";
import Background from "../../components/Background";

import { Container, Grid } from "../../assets/common/Layout.style";
import { Delete } from "../../assets/common/Icon.style";

const DashboardShelters = ({ intl }) => {
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState({});
  const [shelterToRemove, setShelterToRemove] = useState({});
  const { loading, error, data } = useQuery(GET_SHELTERS, {
    networkStatus: 4,
    fetchPolicy: "cache-and-network"
  });
  const [RemoveShelter, { error: queryError }] = useMutation(REMOVE_SHELTER, {
    refetchQueries: [
      {
        query: GET_SHELTERS
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
      setShelterToRemove({
        id,
        name
      });
    } else {
      setShelterToRemove({});
    }
  };

  const removeShelter = () => {
    RemoveShelter({
      variables: { id: shelterToRemove.id },
      onCompleted: setSnackbarMessage({
        message: `${intl.formatMessage({
          id: "SNACKBAR.REMOVE_SHELTER_SUCCESS"
        })}`,
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
      message: `${intl.formatMessage({
        id: "SNACKBAR.REMOVE_SHELTER_FAILED"
      })}`,
      color: "error"
    });

    return function cleanUp() {
      setSnackbarMessage({});
    };
  }, [queryError, intl]);

  return (
    <>
      <Helmet
        title={intl.formatMessage({ id: "APP_TITLE.DASHBOARD_SHELTERS" })}
      />
      <Header
        mainTitle={intl.formatMessage({ id: "APP_TITLE.DASHBOARD_SHELTERS" })}
        sidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar open={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Background bg={false}>
        <Container theme={theme}>
          <Grid container justify="space-around">
            {data && !error && data.shelters.length > 0 && (
              <TableWrapper
                headlines={DashboardSheltersHeadlines}
                data={setData(data.shelters)}
              />
            )}
            {data && data.shelters.length === 0 && (
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
                handleConfirmAction={removeShelter}
                open={true}
                name={shelterToRemove.name}
                modalTitle={RemoveShelterModalTitle}
                modalText={RemoveShelterModalText}
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
      </Background>
      <Footer />
    </>
  );
};

export default injectIntl(DashboardShelters);

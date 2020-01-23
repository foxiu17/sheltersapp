import React, { useState, useEffect } from "react";
import { injectIntl } from "react-intl";
import { useQuery, useMutation } from "@apollo/react-hooks";
import axios from "axios";

import { useTheme } from "../../ThemeContext";
import { config } from "../../config";

import { GET_SHELTERS, ADD_PET } from "./AddPetPage.query";

import Helmet from "../../components/Helmet";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import AddPetForm from "../../components/AddPetForm";
import Snackbar from "../../components/Snackbar";
import Loader from "../../components/Loader";

import { Container, Grid } from "../../assets/common/Layout.style";

const AddPetPage = ({ intl }) => {
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState({});
  const { loading, data } = useQuery(GET_SHELTERS, {
    networkStatus: 4,
    fetchPolicy: "cache-and-network"
  });
  const [addPet, { loading: queryLoading, error }] = useMutation(ADD_PET);

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarOpen(false);
  };

  console.log(config.cloudName);
  console.log(config.cloudPreset);
  console.log(config.googleApiKey);

  const handleAddPet = async (values, shelter, sex, currentImages) => {
    console.log("values: ", values);
    console.log("images: ", currentImages);
    const { name, file } = currentImages;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "sheltersApp");

    const config = {
      headers: { "X-Requested-With": "XMLHttpRequest" }
    };
    const response = await axios
      .post(
        `https://api.cloudinary.com/v1_1/foxsheltersappimages/image/upload`,
        formData,
        config
      )
      .then(result => {
        addPet({
          variables: {
            type: values.type,
            name: values.name,
            age: parseInt(values.age),
            description: values.description,
            sex,
            shelter,
            images: {
              name: name,
              publicId: result.data.public_id
            }
          },
          onCompleted: setSnackbarMessage({
            message: `${intl.formatMessage({
              id: "SNACKBAR.ADD_PET_SUCCESS"
            })}`,
            color: "success"
          })
        });
      })
      .catch(err => console.log(err));

    // await addPet({
    //   variables: {
    //     type: values.type,
    //     name: values.name,
    //     age: parseInt(values.age),
    //     description: values.description,
    //     sex,
    //     shelter,
    //     images: {
    //       name: name,
    //       publicId: response.data.public_id
    //     }
    //   },
    //   onCompleted: setSnackbarMessage({
    //     message: `${intl.formatMessage({ id: "SNACKBAR.ADD_PET_SUCCESS" })}`,
    //     color: "success"
    //   })
    // });
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
            {loading && <Loader />}
            {data && (
              <AddPetForm
                onSubmit={handleAddPet}
                loading={queryLoading}
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

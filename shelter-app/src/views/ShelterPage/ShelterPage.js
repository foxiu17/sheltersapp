import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { injectIntl, FormattedMessage } from "react-intl";

import { useTheme } from "../../ThemeContext";
import { useStateContextAuthorization } from "../../context/auth-context";

import { GET_SHELTER, SEND_EMAIL } from "./ShelterPage.query";

import Helmet from "../../components/Helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import ProfilePanel from "../../components/ProfilePanel";
import Gallery from "../../components/Gallery";
import Loader from "../../components/Loader";
import ErrorComponent from "../../components/ErrorComponent";
import Background from "../../components/Background";
import ContactForm from "../../components/ContactForm";
import Snackbar from "../../components/Snackbar";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Container, Grid, Typography } from "../../assets/common/Layout.style";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "../../assets/common/ExpansionPanel";

const ShelterPage = ({ intl, match }) => {
  const [auth] = useStateContextAuthorization();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState({});
  const id = match.params.id;
  const { error, loading, data } = useQuery(GET_SHELTER, {
    variables: { id }
  });
  const [
    sendEmail,
    { loading: queryLoading, error: queryError, data: queryData }
  ] = useMutation(SEND_EMAIL);
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarOpen(false);
  };

  const submitEmail = values => {
    console.log("values: ", values);
    console.log("data: ", data.shelters[0].email);

    sendEmail({
      variables: {
        userEmail: values.userEmail,
        shelterEmail: data.shelters[0].email,
        subject: values.subject,
        message: values.message
      },
      onCompleted: setSnackbarMessage({
        message: `${intl.formatMessage({
          id: "SNACKBAR.MESSAGE_SENT_SUCCESS"
        })}`,
        color: "success"
      })
    });
    setIsSnackbarOpen(true);
  };

  useEffect(() => {
    setSnackbarMessage({
      message: `${intl.formatMessage({ id: "SNACKBAR.MESSAGE_SENT_FAILED" })}`,
      color: "error"
    });

    return function cleanUp() {
      setSnackbarMessage({});
    };
  }, [queryError, intl]);

  console.log("queryError: ", queryError);
  console.log("queryLoading: ", queryLoading);
  console.log("queryData: ", queryData);
  return (
    <>
      <Helmet title={intl.formatMessage({ id: "APP_TITLE.SHELTER_PAGE" })} />
      <Header
        mainTitle={intl.formatMessage({ id: "APP_TITLE.SHELTER_PAGE" })}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar open={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Background bg={false}>
        <Container>
          <Snackbar
            text={snackbarMessage.message}
            open={isSnackbarOpen}
            handleClose={closeSnackbar}
            color={snackbarMessage.color}
          />
          <Grid container justify="center">
            <Grid item md={6} xs={12}>
              {data && <Gallery images={data.shelters[0].images} />}
            </Grid>
            <Grid item md={6} xs={12}>
              {loading && <Loader />}
              {error && (
                <ErrorComponent
                  title={intl.formatMessage(
                    { id: "APP_STATE.ERROR" },
                    { text: "" }
                  )}
                  text={error.message}
                />
              )}
              {data && <ProfilePanel data={data.shelters[0]} />}
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item md={6} xs={12} theme={theme.palette}>
              <ExpansionPanel
                square
                expanded={expanded}
                onChange={handleChange}
                theme={theme}
              >
                <ExpansionPanelSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography variant="h6" component="h6">
                    <FormattedMessage id="APP_LABEL.CONTACT_TITLE" />
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {Object.getOwnPropertyNames(auth).length !== 0 ? (
                    <ContactForm
                      userEmail={auth.email}
                      handleSubmit={submitEmail}
                    />
                  ) : (
                    <ContactForm handleSubmit={submitEmail} />
                  )}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
          </Grid>
        </Container>
      </Background>
      <Footer />
    </>
  );
};

export default withRouter(injectIntl(ShelterPage));

import React, { useState } from "react";
import { withRouter } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import { injectIntl } from "react-intl";

import { GET_SHELTER } from "./ShelterPage.query";

import Helmet from "../../components/Helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import ProfilePanel from "../../components/ProfilePanel";
import Gallery from "../../components/Gallery";
import Loader from "../../components/Loader";
import ErrorComponent from "../../components/ErrorComponent";
import Background from "../../components/Background";

import { Container, Grid } from "../../assets/common/Layout.style";

const ShelterPage = ({ intl, match }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const id = match.params.id;
  const { error, loading, data } = useQuery(GET_SHELTER, {
    variables: { id }
  });

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
        </Container>
      </Background>
      <Footer />
    </>
  );
};

export default withRouter(injectIntl(ShelterPage));

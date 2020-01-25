import React, { useState } from "react";
import { withRouter } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import { injectIntl } from "react-intl";

import { GET_PET } from "./PetPage.query";

import Helmet from "../../components/Helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import ProfilePanel from "../../components/ProfilePanel";
import Gallery from "../../components/Gallery";
import Loader from "../../components/Loader";
import ErrorComponent from "../../components/ErrorComponent";

import { Container, Grid } from "../../assets/common/Layout.style";

const PetPage = ({ intl, match }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const id = match.params.id;
  const { error, loading, data } = useQuery(GET_PET, { variables: { id } });

  return (
    <>
      <Helmet title={intl.formatMessage({ id: "APP_TITLE.PET_PAGE" })} />
      <Header
        mainTitle={intl.formatMessage({ id: "APP_TITLE.PET_PAGE" })}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar open={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Container>
        <Grid container justify="center">
          <Grid item md={6} xs={12}>
            {data && <Gallery images={data.pets[0].images} />}
          </Grid>
          <Grid item md={6} xs={12}>
            {data && <ProfilePanel data={data.pets[0]} />}
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
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default withRouter(injectIntl(PetPage));

import React, { useState, useCallback } from "react";
import { withRouter } from "react-router";
import { injectIntl } from "react-intl";
import { useQuery } from "@apollo/react-hooks";

import { config } from "../../config";

import { useTheme } from "../../ThemeContext";

import { GET_SHELTERS } from "./RootPage.query";

import { googleMapUrl, positionCenter } from "../../assets/const/map";

import Helmet from "../../components/Helmet";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Mapbox from "../../components/Mapbox";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import ErrorComponent from "../../components/ErrorComponent";

import { Container } from "../../assets/common/Layout.style";

const RootPage = ({ intl }) => {
  const [, updateState] = React.useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const { loading, error, data } = useQuery(GET_SHELTERS, {
    networkStatus: 4,
    fetchPolicy: "cache-and-network"
  });
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMapInfoBox = currentMarker => {
    const { shelters } = data;
    const { index } = currentMarker;

    shelters.map((shelter, key) => {
      if (shelter.index === index) {
        shelter.isInfoBoxOpen = true;
      } else {
        shelter.isInfoBoxOpen = false;
      }
      return shelter;
    });

    forceUpdate();
  };

  return (
    <>
      <Helmet title={intl.formatMessage({ id: "APP_TITLE.HOMEPAGE" })} />
      <Header
        mainTitle={intl.formatMessage({ id: "APP_TITLE.HOMEPAGE" })}
        sidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar open={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Container mapbox="true" theme={theme}>
        {loading && (
          <Loader
            label={intl.formatMessage({ id: "APP_STATE.FETCHING_DATA" })}
          />
        )}
        {error && (
          <ErrorComponent
            title={intl.formatMessage({ id: "APP_STATE.ERROR" }, { text: "" })}
            text={error.message}
          />
        )}
        {data &&
          data.shelters.forEach((shelter, index) => {
            shelter.index = index;
          })}
        {data && (
          <Mapbox
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDekrf2bx2vOiVUKSRbQuLQOqR86UYQHwA&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ width: "100%", height: `100%` }} />}
            containerElement={
              <div
                style={{ width: "100%", height: `calc(100vh - 70px - 80px)` }}
              />
            }
            mapElement={
              <div
                style={{ width: "100%", height: `calc(100vh - 70px - 80px)` }}
              />
            }
            center={positionCenter}
            markers={data.shelters}
            handleMarkerClick={toggleMapInfoBox}
            handleCloseInfoBox={toggleMapInfoBox}
          />
        )}
      </Container>
      <Footer />
    </>
  );
};

export default withRouter(injectIntl(RootPage));

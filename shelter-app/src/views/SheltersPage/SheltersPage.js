import React, { useState } from "react";
import { withRouter } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import { injectIntl } from "react-intl";

import { useTheme } from "../../ThemeContext";

import { GET_SHELTERS } from "./SheltersPage.query";

import Helmet from "../../components/Helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ItemsList from "../../components/ItemsList";
import Sidebar from "../../components/Sidebar";
import Loader from "../../components/Loader";
import Search from "../../components/Search";
import Background from "../../components/Background";
import ErrorComponent from "../../components/ErrorComponent";

import { Container, Grid } from "../../assets/common/Layout.style";

import bg from "../../assets/images/backgrounds/bg-5.jpg";

const SheltersPage = ({ intl }) => {
  const theme = useTheme();
  const [variables, setVariables] = useState({});
  const { loading, error, data } = useQuery(GET_SHELTERS, {
    variables: {
      ...variables
    },
    networkStatus: 4,
    fetchPolicy: "cache-and-network"
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getFilteredShelters = values => {
    setVariables({
      name: values.name ? values.name : undefined,
      city: values.city ? values.city.toString() : undefined,
      voivodeship: values.voivodeship
        ? values.voivodeship.toString()
        : undefined
    });
  };

  const clearFilter = () => {
    setVariables({});
  };

  const removeFilterChip = (label, prop) => {
    setVariables({
      ...variables,
      [prop]: undefined
    });
  };

  return (
    <>
      <Helmet title={intl.formatMessage({ id: "APP_TITLE.SHELTERS_PAGE" })} />
      <Header
        mainTitle={intl.formatMessage({ id: "APP_TITLE.SHELTERS_PAGE" })}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar open={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Background image={bg} theme={theme}>
        <Container>
          {loading && (
            <Loader
              label={intl.formatMessage({ id: "APP_STATE.FETCHING_DATA" })}
            />
          )}
          <Grid container justify="center">
            <Grid item xs={12}>
              <Search
                onSubmit={getFilteredShelters}
                clearFilter={clearFilter}
                handleDelete={removeFilterChip}
                variables={variables}
                version={3}
              />
              {data && !error && data.shelters.length > 0 && (
                <ItemsList data={data.shelters} />
              )}
              {data && data.shelters.length === 0 && (
                <ErrorComponent
                  title={intl.formatMessage({ id: "APP_STATE.SORRY" })}
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
            </Grid>
          </Grid>
        </Container>
      </Background>
      <Footer />
    </>
  );
};

export default withRouter(injectIntl(SheltersPage));

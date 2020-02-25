import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { injectIntl } from "react-intl";

import { useTheme } from "../../ThemeContext";

import { GET_PETS, ADD_FAVORITE, REMOVE_FAVORITE } from "./PetsPage.query";

import Helmet from "../../components/Helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ItemsList from "../../components/ItemsList";
import Sidebar from "../../components/Sidebar";
import Loader from "../../components/Loader";
import Search from "../../components/Search";
import ErrorComponent from "../../components/ErrorComponent";
import Background from "../../components/Background";

import { Container, Grid } from "../../assets/common/Layout.style";

import bg from "../../assets/images/backgrounds/bg-4.jpg";

const PetsPage = ({ intl, location, match }) => {
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = location;
  let shelterID = match.params.id;
  const [shelter, setShelter] = useState(undefined);
  const [variables, setVariables] = useState({});
  const { loading, error, data } = useQuery(GET_PETS, {
    variables: {
      shelterId: shelter,
      ...variables
    },
    networkStatus: 4,
    fetchPolicy: "cache-and-network"
  });
  const [addFavorite] = useMutation(ADD_FAVORITE, {
    refetchQueries: [
      {
        query: GET_PETS
      }
    ]
  });
  const [removeFavorite] = useMutation(REMOVE_FAVORITE, {
    refetchQueries: [
      {
        query: GET_PETS
      }
    ]
  });

  const getFilteredPets = (values, city, voivodeship, genre, age) => {
    setVariables({
      type: genre ? genre.toString() : undefined,
      voivodeship: voivodeship
        ? voivodeship.toString()
        : undefined,
      city: city ? city.toString() : undefined,
      age: age ? parseInt(age) : undefined,
      name: values.name ? values.name.toString() : undefined
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

  const launchMutation = (petID, userID, isFavorite) => {
    if (isFavorite) {
      removeFavorite({
        variables: {
          id: petID,
          userID
        }
      });
    } else {
      addFavorite({
        variables: {
          id: petID,
          userID
        }
      });
    }
  };

  useEffect(() => {
    setShelter(shelterID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <Helmet title={intl.formatMessage({ id: "APP_TITLE.PETS_PAGE" })} />
      <Header
        mainTitle={intl.formatMessage({ id: "APP_TITLE.PETS_PAGE" })}
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
                onSubmit={getFilteredPets}
                clearFilter={clearFilter}
                handleDelete={removeFilterChip}
                variables={variables}
                version={shelter !== undefined ? 2 : 1}
              />
              {data && !error && data.pets.length > 0 && (
                <ItemsList data={data.pets} launchMutation={launchMutation} />
              )}
              {data && data.pets.length === 0 && (
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

export default withRouter(injectIntl(PetsPage));

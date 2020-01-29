import React, { useState } from "react";
import { withRouter } from "react-router";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { injectIntl } from "react-intl";

import { useTheme } from "../../ThemeContext";
import { useStateContextAuthorization } from "../../context/auth-context";

import { GET_FAVORITE_PETS, REMOVE_FAVORITE } from "./FavoritesPage.query";

import Helmet from "../../components/Helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ItemsList from "../../components/ItemsList";
import Sidebar from "../../components/Sidebar";
import Loader from "../../components/Loader";
import ErrorComponent from "../../components/ErrorComponent";
import Background from "../../components/Background";

import { Container, Grid } from "../../assets/common/Layout.style";

import bg from "../../assets/images/backgrounds/bg-2.jpg";

const FavoritesPage = ({ intl }) => {
  const theme = useTheme();
  const [auth] = useStateContextAuthorization();
  const [variables] = useState({});
  const { loading, error, data } = useQuery(GET_FAVORITE_PETS, {
    variables: {
      userID: auth.userID.toString(),
      ...variables
    },
    networkStatus: 4,
    fetchPolicy: "cache-and-network"
  });
  const [removeFavorite] = useMutation(REMOVE_FAVORITE, {
    refetchQueries: [
      {
        query: GET_FAVORITE_PETS,
        variables: {
          userID: auth.userID.toString(),
          ...variables
        },
        networkStatus: 4,
        fetchPolicy: "cache-and-network"
      }
    ]
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const launchMutation = (petID, userID, isFavorite) => {
    if (isFavorite) {
      removeFavorite({
        variables: {
          id: petID,
          userID
        }
      });
    }
  };

  return (
    <>
      <Helmet
        title={intl.formatMessage({ id: "APP_TITLE.FAVORITES_PETS_PAGE" })}
      />
      <Header
        mainTitle={intl.formatMessage({ id: "APP_TITLE.FAVORITES_PETS_PAGE" })}
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
              {data && !error && data.userPets.length > 0 && (
                <ItemsList
                  data={data.userPets}
                  launchMutation={launchMutation}
                />
              )}
              {data && data.userPets.length === 0 && (
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

export default withRouter(injectIntl(FavoritesPage));

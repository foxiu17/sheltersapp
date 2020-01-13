import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ApolloProvider } from "@apollo/react-hooks";
import CssBaseline from "@material-ui/core/CssBaseline";

import { StateProviderAuthorization } from "./context/auth-context";
import { client } from "./Client";
import { ThemeProviderWrapper } from "./ThemeContext";
import { IntlProviderWrapper } from "./IntlContext";

import System from "./System";
import ColoredScrollbars from "./components/CustomScrollbar/CustomScrollbar";

import './assets/fonts/fonts.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <>
    <CssBaseline />
    <Router>
      <StateProviderAuthorization>
        <ApolloProvider client={client}>
          <IntlProviderWrapper>
            <ThemeProviderWrapper>
              <HelmetProvider>
                <ColoredScrollbars
                  style={{ width: "100%" }}
                  autoHide
                  autoHideTimeout={1000}
                  autoHideDuration={200}
                  autoHeight
                  autoHeightMax="100vh"
                  universal
                >
                  <System />
                </ColoredScrollbars>
              </HelmetProvider>
            </ThemeProviderWrapper>
          </IntlProviderWrapper>
        </ApolloProvider>
      </StateProviderAuthorization>
    </Router>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import StoryRouter from "storybook-react-router";
import { MemoryRouter as Router } from "react-router-dom";
import { IntlProviderWrapper } from "../../IntlContext";
import { ThemeProviderWrapper } from "../../ThemeContext";

import LoginPanel from "./LoginPanel";

import { Container, Grid } from "../../assets/common/Layout.style";

storiesOf("LOG IN|LOG IN PANEL", module)
  .addParameters({ jest: ["LoginPanel"] })
  .addDecorator(centered)
  .addDecorator(StoryRouter())
  .addDecorator(story => <ThemeProviderWrapper>{story()}</ThemeProviderWrapper>)
  .addDecorator(story => <IntlProviderWrapper>{story()}</IntlProviderWrapper>)
  .add("should render initial component", () => {
    return (
      <Grid container>
        <Grid item xs={12}>
          <LoginPanel error={undefined} />;
        </Grid>
      </Grid>
    );
  })
  .add("should render component with error", () => {
    return <LoginPanel error={{ message: "Error test" }} />;
  });

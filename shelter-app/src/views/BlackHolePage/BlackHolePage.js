import React from "react";
import { withRouter } from "react-router";
import { injectIntl, FormattedMessage } from "react-intl";

import { useTheme } from "../../ThemeContext";

import Helmet from "../../components/Helmet";

import {
  Container,
  Grid,
  Paper,
  Typography
} from "../../assets/common/Layout.style";
import { Button } from "../../assets/common/Button.style";

const BlackHolePage = ({ history }) => {
  const theme = useTheme();
  return (
    <>
      <Helmet title="404 Page" />
      <Container>
        <Grid container justify="center">
          <Grid item xs={6}>
            <Paper theme={theme.palette}>
              <Typography variant="h2" component="h1" gutterBottom>
                404 :(
              </Typography>
              <Typography variant="body1" component="h3" gutterBottom>
                <FormattedMessage id="APP_404.TEXT" />
              </Typography>

              <Button
                color="primary"
                theme={theme}
                onClick={() => history.goBack()}
              >
                <FormattedMessage id="APP_BUTTONS.GO_BACK" />
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default withRouter(injectIntl(BlackHolePage));

import React from "react";
import { injectIntl, FormattedMessage } from "react-intl";
import { withRouter } from "react-router";

import { useTheme } from "../../ThemeContext";

import {
  petDetailsFullUrl,
  petsPageUrl,
  shelterDetailsFullUrl,
  shelterDetailsUrl
} from "../../assets/const/url";

import {
  Grid,
  Typography,
  Span,
  Strong,
  ButtonBox,
  Button,
  Link
} from "./ProfilePanel.style";

const ProfilePanel = ({ data, history, match }) => {
  const theme = useTheme();
  const {
    _id,
    name,
    type,
    shelter,
    pets,
    city,
    age,
    description,
    phone,
    address,
    voivodeship
  } = data;
  return (
    <Grid container>
      <Grid item xs={12}>
        {name && (
          <Typography variant="h5" component="h2" gutterBottom>
            {name}
          </Typography>
        )}
        {type && (
          <Span>
            <Strong>
              <FormattedMessage id="APP_LABEL.GENRE" />:{" "}
            </Strong>
            {type}
          </Span>
        )}
        {shelter && (
          <>
            <Span>
              <Strong>
                <FormattedMessage id="APP_LABEL.SHELTER" />:{" "}
              </Strong>
              {shelter.name}
            </Span>
            <Span>
              <Strong>
                <FormattedMessage id="APP_LABEL.VOIVODESHIP" />:{" "}
              </Strong>
              {shelter.voivodeship}
            </Span>
            <Span>
              <Strong>
                <FormattedMessage id="APP_LABEL.CITY" />:{" "}
              </Strong>
              {shelter.city}
            </Span>
            <Span>
              <Strong>
                <FormattedMessage id="APP_LABEL.SHELTER_ADDRESS" />:{" "}
              </Strong>
              {shelter.address}
            </Span>
            <Span>
              <Strong>
                <FormattedMessage id="APP_LABEL.SHELTER_PHONE" />:{" "}
              </Strong>
              {shelter.phone}
            </Span>
          </>
        )}
        {voivodeship && (
          <Span>
            <Strong>
              <FormattedMessage id="APP_LABEL.VOIVODESHIP" />:{" "}
            </Strong>
            {voivodeship}
          </Span>
        )}
        {city && (
          <Span>
            <Strong>
              <FormattedMessage id="APP_LABEL.CITY" />:{" "}
            </Strong>
            {city}
          </Span>
        )}
        {address && (
          <Span>
            <Strong>
              <FormattedMessage id="APP_LABEL.ADDRESS" />:{" "}
            </Strong>
            {address}
          </Span>
        )}
        {phone && (
          <Span>
            <Strong>
              <FormattedMessage id="APP_LABEL.PHONE" />:{" "}
            </Strong>
            {phone}
          </Span>
        )}
        {pets && (
          <Span>
            <Strong>
              <FormattedMessage id="APP_LABEL.PETS_COUNT" />:{" "}
            </Strong>
            {pets.length}
          </Span>
        )}
        {age && (
          <Span>
            <Strong>
              <FormattedMessage id="APP_LABEL.AGE" />:{" "}
            </Strong>
            {age}
          </Span>
        )}
        {description && <Span desc="true">{description}</Span>}
      </Grid>
      <Grid item xs={12}>
        <ButtonBox>
          <Button
            status="cancel"
            theme={theme}
            onClick={() => history.goBack()}
          >
            <FormattedMessage id="APP_MODAL.CANCEL" />
          </Button>
          <Button theme={theme}>
            {match.path === petDetailsFullUrl && (
              <Link to={`${shelterDetailsUrl}/${shelter._id}`} theme={theme}>
                <FormattedMessage id="APP_BUTTONS.GO_SHELTER" />
              </Link>
            )}
            {match.path === shelterDetailsFullUrl && (
              <Link to={`${petsPageUrl}/${_id}`} theme={theme}>
                <FormattedMessage id="APP_BUTTONS.GO_PETS" />
              </Link>
            )}
          </Button>
        </ButtonBox>
      </Grid>
    </Grid>
  );
};

export default withRouter(injectIntl(ProfilePanel));

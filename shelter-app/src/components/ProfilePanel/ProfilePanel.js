import React from "react";
import { injectIntl, FormattedMessage } from "react-intl";

import { Grid, Typography, Span, Strong } from "./ProfilePanel.style";

const ProfilePanel = ({ data }) => {
  const {
    name,
    type,
    shelter,
    pets,
    city,
    age,
    description,
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
    </Grid>
  );
};

export default injectIntl(ProfilePanel);

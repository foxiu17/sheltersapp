import React from "react";
import { withRouter } from "react-router";
import { FormattedMessage, injectIntl } from "react-intl";

import { useTheme } from "../../../ThemeContext";

import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

import { mapInfoBoxSettings } from "../../../assets/const/map";
import { petsPageUrl, shelterDetailsUrl } from "../../../assets/const/url";

import {
  InfoboxContainer,
  InfoboxGrid,
  InfoboxInnerGrid,
  InfoboxItem,
  ImageBox,
  Image,
  ButtonBox,
  IconButton,
  InfoText,
  Link
} from "../Mapbox.style";

import Clear from "@material-ui/icons/Clear";

const MapInfoBox = ({ data, handleCloseInfoBox }) => {
  const theme = useTheme();
  const { name, lat, lng, city, _id } = data;
  const infoBoxDefaultPosition = new window.google.maps.LatLng(lat, lng);
  return (
    <InfoBox
      defaultPosition={infoBoxDefaultPosition}
      options={mapInfoBoxSettings}
    >
      <InfoboxContainer theme={theme}>
        <InfoboxGrid>
          <InfoboxItem>
            <InfoboxInnerGrid>
              <InfoText title="true" theme={theme}>
                {name}
              </InfoText>
              <ButtonBox>
                <IconButton onClick={handleCloseInfoBox}>
                  <Clear />
                </IconButton>
              </ButtonBox>
            </InfoboxInnerGrid>
          </InfoboxItem>
          <InfoboxItem>
            <ImageBox>
              <Image src="https://placeimg.com/640/480/arch" alt="shelter" />
            </ImageBox>
          </InfoboxItem>
          <InfoboxItem>
            <InfoText theme={theme}>
              <b>City: </b>
              {city}
            </InfoText>
            <InfoboxInnerGrid>
              <Link href={`${petsPageUrl}/${_id}`} theme={theme.palette}>
                <FormattedMessage id="ROOT_PAGE.PETS_BTN" />
              </Link>
              <Link
                href={`${shelterDetailsUrl}/${_id}`}
                theme={theme.palette}
              >
                <FormattedMessage id="ROOT_PAGE.PROFILE_BTN" />
              </Link>
            </InfoboxInnerGrid>
          </InfoboxItem>
        </InfoboxGrid>
      </InfoboxContainer>
    </InfoBox>
  );
};

export default withRouter(injectIntl(MapInfoBox));

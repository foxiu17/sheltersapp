import React from "react";
import { withRouter } from "react-router";
import { FormattedMessage, injectIntl } from "react-intl";
import { Image } from "cloudinary-react";

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
  ButtonBox,
  IconButton,
  InfoText,
  Link,
  Strong
} from "../Mapbox.style";

import Clear from "@material-ui/icons/Clear";

const MapInfoBox = ({ data, handleCloseInfoBox }) => {
  const theme = useTheme();
  const { name, lat, lng, city, _id, images, pets } = data;
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
              <Image
                cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                publicId={images.publicId}
                crop="scale"
              />
            </ImageBox>
          </InfoboxItem>
          <InfoboxItem>
            <InfoText theme={theme}>
              <Strong>
                <FormattedMessage id="APP_LABEL.CITY" />:{" "}
              </Strong>
              {city}
            </InfoText>
            <InfoText theme={theme}>
              <Strong>
                <FormattedMessage id="APP_LABEL.PETS_COUNT" />:{" "}
              </Strong>
              {pets.length}
            </InfoText>
            <InfoboxInnerGrid>
              <Link href={`${petsPageUrl}/${_id}`} theme={theme.palette}>
                <FormattedMessage id="ROOT_PAGE.PETS_BTN" />
              </Link>
              <Link href={`${shelterDetailsUrl}/${_id}`} theme={theme.palette}>
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

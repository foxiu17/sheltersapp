import React from "react";
import { withRouter } from "react-router";
import { FormattedMessage, injectIntl } from "react-intl";
import { makeStyles } from "@material-ui/core/styles";
import { Image } from "cloudinary-react";

import { useTheme } from "../../ThemeContext";

import {
  petDetailsUrl,
  shelterDetailsUrl,
  placeholderUrl
} from "../../assets/const/url";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  FavoriteIcon,
  IconButton,
  Span,
  Strong
} from "./ItemCard.style";
import { Typography, Link } from "../../assets/common/Layout.style";
import { Button } from "../../assets/common/Button.style";

const useStyles = makeStyles({
  card: {
    minHeight: "481px",
    maxHeight: "481px",
    transition: ".1s",
    backgroundColor: "rgba(255, 255, 255, .85)",
    "&:hover .MuiCardActions-root, &:hover .MuiCardContent-root": {
      backgroundColor: "rgba(255, 255, 255, 1)"
    },
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 1)"
    }
  }
});

const ItemCard = ({ data, match, favorite, handleClick, userType }) => {
  const classes = useStyles();
  const theme = useTheme();
  const path = match.path;
  const {
    images,
    name,
    age,
    sex,
    voivodeship,
    city,
    pets,
    shelter,
    phone,
    _id,
    __typename
  } = data;

  return (
    <Card theme={theme} className={classes.card}>
      {__typename === "Pet" && userType === 1 && (
        <IconButton onClick={() => handleClick(data)}>
          <FavoriteIcon theme={theme} favorite={favorite ? "true" : "false"} />
        </IconButton>
      )}
      <CardActionArea>
        {images === undefined ? (
          <CardMedia image={placeholderUrl} title={data ? name : "Pet"} />
        ) : (
          <CardMedia component="div" title={data ? name : "Pet"}>
            <Image
              cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
              publicId={images.publicId}
              crop="scale"
            />
          </CardMedia>
        )}
      </CardActionArea>
      <CardContent theme={theme}>
        {name && (
          <Span bigger="true">
            <Strong>{name}</Strong>
          </Span>
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
        {phone && (
          <Span>
            <Strong>
              <FormattedMessage id="APP_LABEL.PHONE" />:{" "}
            </Strong>
            {phone}
          </Span>
        )}
        {sex && (
          <Span>
            <Strong>
              <FormattedMessage id="APP_LABEL.SEX" />:{" "}
            </Strong>
            {sex === "male" ? (
              <FormattedMessage id="APP_LABEL.MALE" />
            ) : (
              <FormattedMessage id="APP_LABEL.FEMALE" />
            )}
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
                <FormattedMessage id="APP_LABEL.CITY" />:{" "}
              </Strong>
              {shelter.city}
            </Span>
          </>
        )}
      </CardContent>
      <CardActions theme={theme}>
        <Button color="primary" theme={theme}>
          <Link
            to={
              path.toString() === "/pets-page" ||
              path.toString() === "/pets-page/:id" ||
              path.toString() === "/favorite-pets-page"
                ? `${petDetailsUrl}/${_id}`
                : path.toString() === "/shelters-page"
                ? `${shelterDetailsUrl}/${_id}`
                : undefined
            }
            theme={theme}
          >
            <FormattedMessage id="ITEM_CARD.READ_MORE_BTN" />
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default withRouter(injectIntl(ItemCard));

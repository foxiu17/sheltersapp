import React from "react";
import { withRouter } from "react-router";
import { FormattedMessage, injectIntl } from "react-intl";
import { makeStyles } from "@material-ui/core/styles";

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
  IconButton
} from "./ItemCard.style";
import { Typography, Link } from "../../assets/common/Layout.style";
import { Button } from "../../assets/common/Button.style";

const useStyles = makeStyles({
  card: {
    transition: ".1s",
    backgroundColor: "rgba(255, 255, 255, .85)",
    "&:hover .MuiCardActions-root, &:hover .MuiCardContent-root": {
      backgroundColor: "rgba(255, 255, 255, 1)"
    }
  }
});

const ItemCard = ({ data, match, favorite, handleClick, userType }) => {
  console.log("data: ", data);
  const classes = useStyles();
  const theme = useTheme();
  const path = match.path;
  const { images, name, description, _id, __typename } = data;

  return (
    <Card theme={theme} className={classes.card}>
      {__typename === "Pet" && userType === 1 && (
        <IconButton onClick={() => handleClick(data)}>
          <FavoriteIcon theme={theme} favorite={favorite ? "true" : "false"} />
        </IconButton>
      )}
      <CardActionArea>
        <CardMedia
          image={
            data && images && images.length > 0 ? images[0] : placeholderUrl
          }
          title={data ? name : "Pet"}
        />
        <CardContent theme={theme}>
          {name && (
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          )}
          {description && (
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
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

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useTheme } from "../../ThemeContext";

import { CardBox, CardActions, CardContent, Typography } from "./Card.style";
import { Link } from "../../assets/common/Layout.style";
import { Button } from "../../assets/common/Button.style";

import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  card: {
    transition: ".1s",
    backgroundColor: "rgba(255, 255, 255, 1)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .9)"
    }
  }
});

const Card = ({ data, isLink = false, Icon }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { text, url, linkTitle } = data;
  return (
    <>
      {isLink ? (
        <Link to={url} theme={theme}>
          <CardBox theme={theme} className={classes.card}>
            <CardContent>
              {Icon && <Icon style={{ margin: "10px 0", fontSize: 40 }} />}
              <Divider />
              {data && text && (
                <Typography variant="h6" component="h6">
                  {text}
                </Typography>
              )}
            </CardContent>
          </CardBox>
        </Link>
      ) : (
        <CardBox theme={theme}>
          <CardContent>
            {data && text && (
              <Typography variant="h3" component="h3">
                {text}
              </Typography>
            )}
            <CardActions>
              {data && url && linkTitle && (
                <Button href={url}>{linkTitle}</Button>
              )}
            </CardActions>
          </CardContent>
        </CardBox>
      )}
    </>
  );
};

export default Card;

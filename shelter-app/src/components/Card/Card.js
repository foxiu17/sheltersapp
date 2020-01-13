import React from "react";
import { useTheme } from "../../ThemeContext";

import { CardBox, CardActions, CardContent, Typography } from "./Card.style";

import { Link } from "../../assets/common/Layout.style";
import { Button } from "../../assets/common/Button.style";

const Card = ({ data, isLink = false }) => {
  const theme = useTheme();
  const { text, url, linkTitle } = data;
  return (
    <>
      {isLink ? (
        <Link to={url} theme={theme.palette}>
          <CardBox>
            <CardContent>
              {data && text && (
                <Typography variant="h6" component="h6">
                  {text}
                </Typography>
              )}
            </CardContent>
          </CardBox>
        </Link>
      ) : (
        <CardBox>
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

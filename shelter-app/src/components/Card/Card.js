import React from "react";

import { useTheme } from "../../ThemeContext";

import {
  Link,
  CardBox,
  CardActions,
  CardContent,
  Typography
} from "./Card.style";
import { Button } from "../../assets/common/Button.style";

import Divider from "@material-ui/core/Divider";

const Card = ({ data, isLink = false, Icon }) => {
  const theme = useTheme();
  const { text, url, linkTitle } = data;
  return (
    <>
      {isLink ? (
        <Link to={url} theme={theme}>
          <CardBox theme={theme}>
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

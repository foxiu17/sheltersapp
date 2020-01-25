import styled from "styled-components";

import UI_CARD from "@material-ui/core/Card";
import UI_CARD_ACTION_AREA from "@material-ui/core/CardActionArea";
import UI_CARD_ACTION from "@material-ui/core/CardActions";
import UI_CARD_CONTENT from "@material-ui/core/CardContent";
import UI_CARD_MEDIA from "@material-ui/core/CardMedia";
import UI_FAVORITE_ICON from "@material-ui/icons/Favorite";
import UI_ICON_BUTTON from "@material-ui/core/IconButton";

import { ButtonBox as commonButtonBox } from "../../assets/common/Button.style";
import { Span as commonSpan } from "../../assets/common/Layout.style";

export const ButtonBox = styled.div`
  ${commonButtonBox}
`;

export const Card = styled(UI_CARD)`
  position: relative;
  z-index: 10;
`;

export const CardActionArea = styled(UI_CARD_ACTION_AREA)``;

export const CardActions = styled(UI_CARD_ACTION)``;

export const CardContent = styled(UI_CARD_CONTENT)``;

export const CardMedia = styled(UI_CARD_MEDIA)`
  width: 100%;
  min-height: 250px;
  max-height: 250px;

  img {
    width: 100%;
    max-width: 100%;
    min-height: 250px;
    max-height: 250px;
  }
`;

export const IconButton = styled(UI_ICON_BUTTON)`
  position: absolute !important;
  top: 10px;
  right: 10px;
  display: inline;
  width: auto;
  z-index: 100 !important;
`;

export const FavoriteIcon = styled(UI_FAVORITE_ICON)`
  color: ${props =>
    props.favorite === "true"
      ? props.theme.palette.common.red
      : props.theme.palette.common.white};
`;

export const Span = styled.span`
  ${commonSpan};
  display: block;
  margin-top: 5px;
  font-size: ${props => (props.bigger === "true" ? "16px" : "14px")};
  font-weight: 300;
`;

export const Strong = styled.strong`
  font-weight: 600;
`;

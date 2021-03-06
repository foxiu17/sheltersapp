import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import UI_CARD from "@material-ui/core/Card";
import UI_CARD_ACTIONS from "@material-ui/core/CardActions";
import UI_CARD_CONTENT from "@material-ui/core/CardContent";

import { Typography as commonTypography } from "../../assets/common/Layout.style";

import { ButtonBox as commonButtonBox } from "../../assets/common/Button.style";

export const ButtonBox = styled.div`
  ${commonButtonBox}
`;

export const Link = styled(RouterLink)`
  padding-left: 5px;
  color: ${props => props.theme.palette.primary.main};
  text-decoration: none;
  & .MuiCard-root {
    background-color: ${props => props.theme.palette.common.card};
  }

  & .MuiCard-root:hover {
    background-color: ${props => props.theme.palette.common.cardHover};
  }
`;

export const CardBox = styled(UI_CARD)`
  position: relative;
  z-index: 10;
`;

export const CardActions = styled(UI_CARD_ACTIONS)``;

export const CardContent = styled(UI_CARD_CONTENT)`
  text-align: center;
`;

export const Typography = styled(commonTypography)`
  padding: 10px 0;
  text-align: center;
`;

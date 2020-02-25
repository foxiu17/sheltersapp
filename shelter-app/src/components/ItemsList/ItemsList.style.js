import styled from "styled-components";

import { Max } from '../../assets/mixins.style';

import UI_GRID from "@material-ui/core/Grid";

export const Grid = styled(UI_GRID)`
  & .MuiCard-root {
    max-height: 481px;
    min-height: 481px;
    transition: 0.1s;
    background-color: ${props => props.theme.palette.common.card_2};

    ${Max.sm`
      max-height: none;
    `}
  }

  & .MuiCard-root:hover {
    background-color: ${props => props.theme.palette.common.card_2Hover};
  }


`;

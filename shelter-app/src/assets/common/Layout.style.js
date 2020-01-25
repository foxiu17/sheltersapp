import styled from "styled-components";
import { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import { Max } from "../../assets/mixins.style";

import UI_CONTAINER from "@material-ui/core/Container";
import UI_GRID from "@material-ui/core/Grid";
import UI_TYPOGRAPHY from "@material-ui/core/Typography";
import UI_PAPER from "@material-ui/core/Paper";

export const Container = styled(UI_CONTAINER)`
  position: relative;
  width: 100%;
  max-width: 100% !important;
  height: 100%;
  min-height: calc(100vh - 130px);
  margin: ${props =>
    props.mapbox && props.mapbox === "true" ? "0" : undefined};
  padding: ${props =>
    props.mapbox && props.mapbox === "true"
      ? "10px 10px 0 80px !important"
      : "25px 20px 90px 100px !important"};
  ${Max.xs`
    padding: ${props =>
      props.mapbox && props.mapbox === "true"
        ? "10px 10px 0 60px !important"
        : "25px 20px 90px 70px !important"};
  `};
`;

export const Grid = styled(UI_GRID)``;

export const Typography = styled(UI_TYPOGRAPHY)`
  text-align: ${props => (props.position ? props.position : "left")};
`;

export const Paper = styled(UI_PAPER)`
  color: ${props => props.theme.primary.main};
  padding: 60px 40px;
`;

export const Span = css``;

export const Link = styled(RouterLink)`
  padding-left: 5px;
  color: ${props => props.theme.palette.primary.main};
  text-decoration: none;
`;

export const LoadingScreen = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 130px);
  background-color: #00ccbb;
  z-index: 1000;
`;

import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import { Max } from "../../assets/mixins.style";

import { Button as commonButton } from "../../assets/common/Button.style";
import {
  Grid as commonGrid,
  Typography as commonTypography,
  Span as commonSpan
} from "../../assets/common/Layout.style";

export const Grid = styled(commonGrid)`
  padding: 0 20px;

  ${Max.md`
    padding: 30px 20px;
  `}
`;

export const Typography = styled(commonTypography)`
  color: ${props => props.theme.palette.common.text_3};
`;

export const Span = styled.span`
  ${commonSpan};
  display: block;
  margin-top: ${props => (props.desc ? "40px" : "5px")}
  font-size: 16px;
  font-weight: 300;
  color: ${props => props.theme.palette.common.text_3};
`;

export const Strong = styled.strong`
  font-weight: 600;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 50px 0 0;

  ${Max.xs`
    flex-wrap: wrap;
  `}
`;

export const Button = styled(commonButton)`
  margin: 0 10px !important;
  .MuiButton-root {
    margin: 0 10px !important;
  }
  background-color: ${props =>
    props.status === "cancel"
      ? props.theme.palette.notification.roman
      : props.theme.palette.common.fountain_blue} !important;
  color: ${props => props.theme.palette.common.white} !important;

  ${Max.xs`
    width: 100%;
    margin: 5px 0 !important;
  `}
`;

export const Link = styled(RouterLink)`
  color: ${props => props.theme.palette.common.white};
  text-decoration: none;
`;

import styled from "styled-components";

import { Max } from "../../assets/mixins.style";

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

export const Typography = styled(commonTypography)``;

export const Span = styled.span`
  ${commonSpan};
  display: block;
  margin-top: ${props => (props.desc ? "40px" : "5px")}
  font-size: 16px;
  font-weight: 300;
`;

export const Strong = styled.strong`
  font-weight: 600;
`;

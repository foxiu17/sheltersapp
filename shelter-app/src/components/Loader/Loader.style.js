import styled from "styled-components";

import {
  LoadingScreen as commonLoadingScreen,
  Span as commonSpan
} from "../../assets/common/Layout.style";

import UI_CIRCULAR_PROGRESS from "@material-ui/core/CircularProgress";

export const Progress = styled(UI_CIRCULAR_PROGRESS)`
  display: block;
  color: ${props => (props.theme ? props.theme.white : "primary")};
`;

export const LoadingScreen = styled.div`
  ${commonLoadingScreen}
`;

export const Label = styled.span`
  ${commonSpan}
  display: block;
  color: ${props => (props.theme ? props.theme.white : '#000')};
  font-size: 20px;
  font-weight: 400;
`;

import styled from "styled-components";
import { Max } from "../../assets/mixins.style";

import UI_PAPER from "@material-ui/core/Paper";

import {
  ButtonBox as commonButtonBox,
  Button as commonButton
} from "../../assets/common/Button.style";
import { Span as commonSpan } from "../../assets/common/Layout.style";
import {
  ErrorBox as commonErrorBox,
  ErrorNotification as commonErrorNotification
} from "../../assets/common/Notification.style";

export const Paper = styled(UI_PAPER)`
  background-color: rgba(255, 255, 255, 0.8) !important;
`;

export const InputBox = styled.div`
  display: block;
  width: 50%;
  padding: 5px 10px;

  &:last-of-type {
    width: 100%;
  }

  ${Max.xs`
    width: 100%
  `}
`;

export const FormBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonBox = styled.div`
  ${commonButtonBox}
`;

export const Button = styled(commonButton)`
  background-color: ${props => props.theme.common.fountain_blue} !important;
  color: ${props => props.theme.common.white} !important;
`;

export const ExtraText = styled.span`
  ${commonSpan}
`;

export const ErrorBox = styled.div`
  ${commonErrorBox};
  justify-content: center;
  padding: 10px 0;
  background-color: ${props => props.theme.palette.notification.roman};
`;

export const ErrorNotification = styled.div`
  ${commonErrorNotification};
  color: ${props => props.theme.palette.common.white};
`;

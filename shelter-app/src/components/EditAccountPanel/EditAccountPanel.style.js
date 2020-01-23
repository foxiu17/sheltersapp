import styled from "styled-components";

import { Max } from '../../assets/mixins.style';

import UI_PAPER from "@material-ui/core/Paper";

import {
  InputBox as commonInputBox,
  FormBox as commonFormBox
} from "../../assets/common/Input.style";
import {
  ButtonBox as commonButtonBox,
  Button as commonButton
} from "../../assets/common/Button.style";
import {
  ErrorBox as commonErrorBox,
  ErrorNotification as commonErrorNotification
} from "../../assets/common/Notification.style";

export const Paper = styled(UI_PAPER)`
  position: relative;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.85) !important;
  z-index: 10;
`;

export const InputBox = styled.div`
  ${commonInputBox};
  width: 100%;
`;

export const FormBox = styled.div`
  ${commonFormBox};
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonBox = styled.div`
  ${commonButtonBox}
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

export const ErrorBox = styled.div`
  ${commonErrorBox};
  justify-content: center;
  padding: 10px 0;
  background-color: ${props =>
    !props.success
      ? props.theme.palette.notification.roman
      : props.theme.palette.notification.norway};
`;

export const ErrorNotification = styled.div`
  ${commonErrorNotification};
  color: ${props => props.theme.palette.common.white};
`;

export const ErrorLabel = styled.span`
  ${commonErrorNotification};
  color: ${props => props.theme.palette.notification.roman};
`;

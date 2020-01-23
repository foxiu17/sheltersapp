import styled from "styled-components";

import { Max } from "../../assets/mixins.style";

import UI_PAPER from "@material-ui/core/Paper";
import { Button as commonButton } from "../../assets/common/Button.style";

export const Paper = styled(UI_PAPER)`
  position: relative;
  margin-bottom: 15px;
  padding: 5px 30px 15px;
  background-color: rgba(255, 255, 255, 0.85) !important;
  z-index: 10;
`;

export const InputBox = styled.div`
  width: 20%;
  padding: 0 10px;

  ${Max.md`
    width: 50%;
  `}

  ${Max.xs`width: 100%;`}
`;

export const FormBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

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
    props.status === "clear"
      ? props.theme.palette.notification.roman
      : props.theme.palette.common.fountain_blue} !important;
  color: ${props => props.theme.palette.common.white} !important;

  ${Max.xs`
    width: 100%;
    margin: 5px 0 !important;
  `}
`;

export const ChipsBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

import styled from "styled-components";

import UI_TEXTFIELD from "@material-ui/core/TextField";

export const TextField = styled(UI_TEXTFIELD)`
  width: 100%;
  max-width: 100%;
  min-width: 80px !important;
  display: inline !important;

  & .MuiFormLabel-root {
    font-size: 14px;
  }
  & label.Mui-focused {
    color: ${props => props.theme.palette.common.fountain_blue};
  }

  & .MuiInput-underline:after {
    border-bottom-color: ${props => props.theme.palette.common.fountain_blue};
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      max-width: 100%;
      border-color: ${props => props.theme.palette.common.black_2};
    }
    &.Mui-focused fieldset {
      border-color: ${props => props.theme.palette.common.fountain_blue};
      border-width: 2px;
    }
  }
`;

export const IconsBox = styled.div`
  position: absolute;
  top: 50%;
  left: -50px;
  transform: translateY(-50%);
`;

export const Icon = styled.img`
  display: inline-block;
  width: 20px;
  cursor: pointer;
`;

import { css } from "styled-components";
import styled from "styled-components";

import UI_TEXTFIELD from "@material-ui/core/TextField";
import UI_FORMCONTROL from "@material-ui/core/FormControl";
import UI_SELECT from "@material-ui/core/Select";

export const FormBox = css`
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 30px 40px;
  text-align: center;
`;

export const InputBox = css`
  display: block;
  max-width: 100%;
  padding: 0 10px;
`;

export const TextField = styled(UI_TEXTFIELD)`
  width: 100%;
  max-width: 100%;

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

export const Select = styled(UI_SELECT)`
  width: 100%;
  max-width: 100%;
`;

export const FormControl = styled(UI_FORMCONTROL)`
  width: 100%;
`;

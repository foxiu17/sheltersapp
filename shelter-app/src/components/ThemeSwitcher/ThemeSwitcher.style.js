import styled from "styled-components";

import UI_FORM_CONTROL_LABEL from "@material-ui/core/FormControlLabel";
import UI_SWITCH from "@material-ui/core/Switch";

export const FormControlLabel = styled(UI_FORM_CONTROL_LABEL)`
  & .MuiFormControlLabel-label {
    color: ${props => props.theme.palette.common.text_1};
  }
`;

export const Switch = styled(UI_SWITCH)`
  & .MuiSwitch-switchBase {
    color: ${props => props.theme.palette.common.switch};
  }
`;

import styled from "styled-components";

import UI_CHIP from "@material-ui/core/Chip";

export const Chip = styled(UI_CHIP)`
  margin: 0 5px;
  color: ${props =>
    props.theme ? `${props.theme.common.white} !important` : "#fff"};
  background-color: ${props =>
    props.theme ? props.theme.common.robins_egg_blue : "inherit"} !important;
`;

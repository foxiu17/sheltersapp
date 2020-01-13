import styled , { css }from "styled-components";

import UI_BUTTON from "@material-ui/core/Button";
import UI_ICON_BUTTON from '@material-ui/core/IconButton';


export const ButtonBox = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
`;

export const Button = styled(UI_BUTTON)`
  background-color: blue;
`;

export const IconButton = styled(UI_ICON_BUTTON)`
  display: block;
`;

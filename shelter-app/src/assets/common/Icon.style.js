import styled, { css } from "styled-components";

import UI_DELETE from "@material-ui/icons/Delete";

export const Icon = css`
  display: block;
  color: ${props => props.theme.white};
`;

export const Delete = styled(UI_DELETE)`
  color: ${props => props.theme.palette.notification.roman};
  cursor: pointer;
`;

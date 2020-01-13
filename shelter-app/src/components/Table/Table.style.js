import styled from "styled-components";

import TableContainer from "@material-ui/core/TableContainer";
import UI_TABLE from "@material-ui/core/Table";
import UI_TABLE_BODY from "@material-ui/core/TableBody";
import UI_TABLE_CELL from "@material-ui/core/TableCell";
import UI_TABLE_HEAD from "@material-ui/core/TableHead";
import UI_TABLE_ROW from "@material-ui/core/TableRow";
import UI_PAPER from "@material-ui/core/Paper";
import UI_CODE from "@material-ui/icons/Code";
import UI_KEYBOARD_DOWN from "@material-ui/icons/KeyboardArrowDown";
import UI_KEYBOARD_UP from "@material-ui/icons/KeyboardArrowUp";

export const Paper = styled(UI_PAPER)``;

export const TableBox = styled(TableContainer)``;

export const Table = styled(UI_TABLE)`
  min-width: 300px;
`;

export const TableBody = styled(UI_TABLE_BODY)``;

export const TableHead = styled(UI_TABLE_HEAD)``;

export const TableCell = styled(UI_TABLE_CELL)`
  cursor: ${props => (props.sortable === "true" ? "pointer" : "default")};
  user-select: none;
`;

export const TableRow = styled(UI_TABLE_ROW)``;

export const Code = styled(UI_CODE)`
  margin-left: 5px;
  transform: rotate(90deg) translateX(5px);
  font-size: 16px !important;
  vertical-align: baseline;
`;

export const KeyboardArrowDown = styled(UI_KEYBOARD_DOWN)`
  margin-left: 5px;
  color: ${props => props.theme.common.robins_egg_blue};
  font-size: 16px !important;
  vertical-align: baseline;
`;

export const KeyboardArrowUp = styled(UI_KEYBOARD_UP)`
  margin-left: 5px;
  color: ${props => props.theme.common.robins_egg_blue};
  font-size: 16px !important;
  vertical-align: baseline;
`;

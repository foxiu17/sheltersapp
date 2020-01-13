import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import UI_APPBAR from "@material-ui/core/AppBar";
import UI_GRID from "@material-ui/core/Grid";
import UI_TOOLBAR from "@material-ui/core/Toolbar";
import UI_ICON_BUTTON from "@material-ui/core/IconButton";
import UI_MENU_ITEM from "@material-ui/core/MenuItem";
import UI_MENU from "@material-ui/core/Menu";
import UI_TYPOGRAPHY from "@material-ui/core/Typography";

import UI_MENU_ICON from "@material-ui/icons/Menu";
import UI_ACCOUNT_CIRCLE from "@material-ui/icons/AccountCircle";

export const Headerbox = styled.div`
  display: block;
  position: relative;
`;

export const AppBar = styled(UI_APPBAR)``;

export const Toolbar = styled(UI_TOOLBAR)``;

export const IconButton = styled(UI_ICON_BUTTON)``;

export const MenuIcon = styled(UI_MENU_ICON)``;

export const MenuItem = styled(UI_MENU_ITEM)``;

export const MenuIconBox = styled(UI_GRID)``;

export const AccountCircle = styled(UI_ACCOUNT_CIRCLE)``;

export const Menu = styled(UI_MENU)``;

export const Link = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
`;

export const Typography = styled(UI_TYPOGRAPHY)`
  position: absolute;
  top: 50%;
  left: 100px;
  transform: translateY(-50%);
  font-family: 'Ibarra Real Nova', serif !important;
  font-weight: 600 !important;
`;

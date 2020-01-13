import styled from "styled-components";

import { Link as RouterLink } from "react-router-dom";

import UI_LIST from "@material-ui/core/List";
import UI_LIST_ITEM from "@material-ui/core/ListItem";
import UI_LIST_ITEM_ICON from "@material-ui/core/ListItemIcon";
import UI_LIST_ITEM_TEXT from "@material-ui/core/ListItemText";

// icons
import Mail from "@material-ui/icons/Mail";
import Pets from "@material-ui/icons/Pets";
import Home from "@material-ui/icons/Home";
import Favorite from "@material-ui/icons/Favorite";
import Create from "@material-ui/icons/Create";
import StoreMallDirectory from "@material-ui/icons/StoreMallDirectory";

export const List = styled(UI_LIST)``;

export const ListItem = styled(UI_LIST_ITEM)`
  color: ${props => props.theme.palette.common.white} !important;

  &:hover {
    color: ${props => props.theme.palette.common.blaze_orange} !important;
  }
`;

export const ListItemIcon = styled(UI_LIST_ITEM_ICON)`
  color: inherit !important;
`;

export const ListItemText = styled(UI_LIST_ITEM_TEXT)`
  color: inherit;
`;

export const Link = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
`;

export const MailIcon = styled(Mail)``;
export const PetsIcon = styled(Pets)``;
export const HomeIcon = styled(Home)``;
export const FavoriteIcon = styled(Favorite)``;
export const CreateIcon = styled(Create)``;
export const StoreMallDirectoryIcon = styled(StoreMallDirectory)``;

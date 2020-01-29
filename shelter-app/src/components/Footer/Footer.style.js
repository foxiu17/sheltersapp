import styled from "styled-components";

import UI_BOTTOM_NAVIGATION from "@material-ui/core/BottomNavigation";
import UI_BOTTOM_NAVIGATION_ACTION from "@material-ui/core/BottomNavigationAction";
import UI_INFO_ICON from "@material-ui/icons/Info";
import UI_HELP_ICON from "@material-ui/icons/Help";
import UI_ICON_BUTTON from "@material-ui/core/IconButton";

export const Footerbox = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  z-index: 100;
  & .MuiBottomNavigation-root {
    background-color: ${props => props.theme.palette.common.footer};
  }
`;

export const BottomNavigation = styled(UI_BOTTOM_NAVIGATION)`
  justify-content: flex-end !important;
  align-items: center;
  min-height: 70px;
  padding-left: 100px;
`;

export const BottomNavigationAction = styled(UI_BOTTOM_NAVIGATION_ACTION)`
  flex: 0 !important;
  padding-top: 0px !important;
  color: ${props => props.theme.palette.common.text_2} !important;

  .MuiBottomNavigationAction-label.Mui-selected {
    font-size: 10px !important;
    color: ${props => props.theme.palette.common.text_2} !important;
  }
`;

export const InfoIcon = styled(UI_INFO_ICON)`
  color: ${props => props.theme.palette.common.text_2};
`;

export const HelpIcon = styled(UI_HELP_ICON)`
  color: ${props => props.theme.palette.common.text_2};
`;

export const IconButton = styled(UI_ICON_BUTTON)``;

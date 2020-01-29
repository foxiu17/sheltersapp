import styled from "styled-components";

import UI_MUI_EXPANSION_PANEL from "@material-ui/core/ExpansionPanel";
import UI_MUI_EXPANSION_PANEL_SUMMARY from "@material-ui/core/ExpansionPanelSummary";
import UI_MUI_EXPANSION_PANEL_DETAILS from "@material-ui/core/ExpansionPanelDetails";

export const ExpansionPanel = styled(UI_MUI_EXPANSION_PANEL)`
  .MuiExpansionPanelSummary-root {
    background-color: ${props => props.theme.palette.common.fountain_blue};
  }
`;

export const ExpansionPanelDetails = styled(UI_MUI_EXPANSION_PANEL_DETAILS)``;

export const ExpansionPanelSummary = styled(UI_MUI_EXPANSION_PANEL_SUMMARY)``;

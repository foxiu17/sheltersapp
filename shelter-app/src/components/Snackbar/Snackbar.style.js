import styled from "styled-components";

import UI_SNACKBAR from "@material-ui/core/Snackbar";
import UI_ICON_BUTTON from "@material-ui/core/IconButton";
import UI_CLOSE_ICON from "@material-ui/icons/Close";

export const SnackbarWrapper = styled(UI_SNACKBAR)`
  .MuiSnackbarContent-root {
    background-color: ${props =>
      props.success === "success"
        ? props.theme.notification.norway
        : props.success === "error"
        ? props.theme.notification.roman
        : props.theme.notification.tundora};
  }
`;

export const IconButton = styled(UI_ICON_BUTTON)``;

export const CloseIcon = styled(UI_CLOSE_ICON)``;

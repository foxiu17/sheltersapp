/* eslint-disable no-unused-expressions */
import React from "react";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { FormattedMessage, injectIntl } from "react-intl";

import { useStateContextAuthorization } from "../../context/auth-context";

import { signInUrl, signUpUrl } from "../../assets/const/url";

import {
  Headerbox,
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  AccountCircle,
  Menu,
  Link,
  Typography
} from "./Header.style";
import { Grid } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));

const Header = ({ sidebarOpen, setIsSidebarOpen, mainTitle, history }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [auth, dispatch] = useStateContextAuthorization();
  const classes = useStyles();

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Headerbox className={classes.root}>
        <AppBar
          position="static"
          className={clsx(classes.appBar)}
          color="inherit"
        >
          <Toolbar>
            <Grid container justify="space-between">
              <Grid item>
              </Grid>
              {mainTitle && (
                <Typography variant="caption" component="h6">
                  {mainTitle}
                </Typography>
              )}
              <Grid item>
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    {Object.getOwnPropertyNames(auth).length !== 0 ? (
                      <div>
                        <MenuItem
                          onClick={() => {
                            dispatch({
                              type: "logout"
                            });
                            handleClose();
                            history.push("/");
                          }}
                        >
                          <FormattedMessage id="HEADER.LOG_OUT" />
                        </MenuItem>
                      </div>
                    ) : (
                      <div>
                        <MenuItem onClick={handleClose}>
                          <Link to={signInUrl}>
                            <FormattedMessage id="HEADER.LOG_IN" />
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to={signUpUrl}>
                            <FormattedMessage id="HEADER.REGISTRATION" />
                          </Link>
                        </MenuItem>
                      </div>
                    )}
                  </Menu>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Headerbox>
    </>
  );
};

export default withRouter(injectIntl(Header));

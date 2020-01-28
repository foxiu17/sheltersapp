/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import clsx from "clsx";
import { FormattedMessage, injectIntl } from "react-intl";

import { useStateContextAuthorization } from "../../context/auth-context";
import { useTheme } from "../../ThemeContext";

import { signInUrl, signUpUrl } from "../../assets/const/url";

import LanguagesSwitcher from "../LanguagesSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";

import {
  Headerbox,
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  AccountCircle,
  Menu,
  Link,
  Typography,
  Span,
  ProfileBox,
  ProfileItem,
  Box
} from "./Header.style";
import { Grid, Divider } from "@material-ui/core";

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

const Header = ({ mainTitle, history, width }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [auth, dispatch] = useStateContextAuthorization();
  const classes = useStyles();
  const theme = useTheme();

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
          theme={theme}
        >
          <Toolbar>
            <Grid container justify="space-between">
              <Grid item></Grid>
              {mainTitle && (
                <Typography theme={theme} variant="caption" component="h6">
                  {mainTitle}
                </Typography>
              )}
              <Grid item>
                <Box>
                  <LanguagesSwitcher />
                  {Object.getOwnPropertyNames(auth).length !== 0 &&
                    auth.name &&
                    auth.surname &&
                    (isWidthUp("sm", width) ? (
                      <Span theme={theme} margin="true">{`${auth.name}`}</Span>
                    ) : (
                      <Span theme={theme} margin="true">
                        {`${auth.name.charAt(0)}${auth.surname.charAt(0)}`}
                      </Span>
                    ))}
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    theme={theme}
                  >
                    <AccountCircle theme={theme} />
                  </IconButton>
                  <Menu
                    theme={theme}
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
                        <ProfileBox>
                          <ProfileItem>
                            <AccountCircle theme={theme} />
                          </ProfileItem>
                          <ProfileItem>
                            {auth.name && auth.surname ? (
                              <Span
                                theme={theme}
                              >{`${auth.name} ${auth.surname}`}</Span>
                            ) : (
                              <Span theme={theme}>{auth.email}</Span>
                            )}
                          </ProfileItem>
                          <ProfileItem>
                            <ThemeSwitcher />
                          </ProfileItem>
                        </ProfileBox>
                        <Divider />
                        <MenuItem
                          theme={theme}
                          onClick={() => {
                            handleClose();
                          }}
                        >
                          <Link
                            to={`/edit-account/${auth.email}`}
                            theme={theme}
                          >
                            <FormattedMessage id="HEADER.EDIT_ACCOUNT" />
                          </Link>
                        </MenuItem>
                        <MenuItem
                          theme={theme}
                          onClick={() => {
                            dispatch({
                              type: "logout"
                            });
                            handleClose();
                            history.push("/");
                          }}
                        >
                          <Link to="/" theme={theme}>
                            <FormattedMessage id="HEADER.LOG_OUT" />
                          </Link>
                        </MenuItem>
                      </div>
                    ) : (
                      <div>
                        <MenuItem theme={theme} onClick={handleClose}>
                          <Link to={signInUrl} theme={theme}>
                            <FormattedMessage id="HEADER.LOG_IN" />
                          </Link>
                        </MenuItem>
                        <MenuItem theme={theme} onClick={handleClose}>
                          <Link to={signUpUrl} theme={theme}>
                            <FormattedMessage id="HEADER.REGISTRATION" />
                          </Link>
                        </MenuItem>
                      </div>
                    )}
                  </Menu>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Headerbox>
    </>
  );
};

export default withRouter(injectIntl(withWidth()(Header)));

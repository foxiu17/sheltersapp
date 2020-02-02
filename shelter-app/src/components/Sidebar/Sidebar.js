import React from "react";
import { withRouter } from "react-router";
import { injectIntl } from "react-intl";
import { makeStyles } from "@material-ui/core/styles";

import { useStateContextAuthorization } from "../../context/auth-context";
import { useTheme } from "../../ThemeContext";

import {
  navLinks,
  userNavLinks,
  adminNavLinks
} from "../../assets/const/sidebar";

import SidebarItemsList from "../SidebarItemsList";

import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

// LOGO
import logo from "../../assets/images/logo/wolf.svg";

import Drawer from "@material-ui/core/Drawer";

import {
  Footer,
  Span,
  LogoBox,
  Logo,
  Copyright,
  ChevronLeftIcon,
  ChevronRightIcon,
  Link
} from "./Sidebar.style";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    position: "relative",
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    backgroundColor: "rgba(44, 125, 125, .9)"
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    },
    backgroundColor: "rgba(44, 125, 125, .9)"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
const Sidebar = ({ open, setIsSidebarOpen, intl, location }) => {
  const theme = useTheme();
  const [auth] = useStateContextAuthorization();
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
      anchor="left"
      open={open}
    >
      <LogoBox>
        <Link to="/">
          <Logo src={logo} alt="wolf logo" />
        </Link>
      </LogoBox>
      <div className={classes.toolbar}>
        <IconButton onClick={() => setIsSidebarOpen(!open)}>
          {open ? (
            <ChevronLeftIcon theme={theme} />
          ) : (
            <ChevronRightIcon theme={theme} />
          )}
        </IconButton>
      </div>
      <Divider />

      {Object.getOwnPropertyNames(auth).length !== 0 && auth.type === 2 ? (
        <SidebarItemsList data={adminNavLinks} />
      ) : Object.getOwnPropertyNames(auth).length !== 0 && auth.type === 1 ? (
        <SidebarItemsList data={userNavLinks} />
      ) : (
        <SidebarItemsList data={navLinks} />
      )}
      <Footer>
        {open ? (
          <Span theme={theme}>Copyright &copy; 2019 Marcin Foks</Span>
        ) : (
          <Span theme={theme} bigger="true">
            <Copyright theme={theme} />
          </Span>
        )}
      </Footer>
    </Drawer>
  );
};

export default withRouter(injectIntl(Sidebar));

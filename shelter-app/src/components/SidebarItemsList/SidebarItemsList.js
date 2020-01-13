import React from "react";
import { injectIntl } from "react-intl";

import { useTheme } from "../../ThemeContext";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  MailIcon,
  PetsIcon,
  HomeIcon,
  FavoriteIcon,
  CreateIcon,
  StoreMallDirectoryIcon
} from "./SidebarItemsList.style";

const SidebarItemsList = ({ data, intl }) => {
  const theme = useTheme();

  const renderIconSwitch = param => {
    switch (param) {
      case 1:
        return <HomeIcon theme={theme} />;
      case 2:
        return <StoreMallDirectoryIcon theme={theme} />;
      case 3:
        return <PetsIcon theme={theme} />;
      case 4:
        return <CreateIcon theme={theme} />;
      case 5:
        return <FavoriteIcon theme={theme} />;
      default:
        return <MailIcon />;
    }
  };

  return (
    <List>
      {data.map((link, index) => {
        return (
          <Link to={link.url} key={index}>
            <ListItem theme={theme}>
              <ListItemIcon theme={theme}>
                {renderIconSwitch(link.icon)}
              </ListItemIcon>
              <ListItemText
                theme={theme}
                primary={intl.formatMessage({ id: `${link.title}` })}
              />
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

export default injectIntl(SidebarItemsList);

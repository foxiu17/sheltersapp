import React, { useState } from "react";
import { injectIntl } from "react-intl";

import { useTheme } from "../../ThemeContext";

import {
  shelterAddUrl,
  petAddUrl,
  adminSheltersDashboardUrl,
  adminPetsDashboardUrl
} from "../../assets/const/url";

import Helmet from "../../components/Helmet";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Background from "../../components/Background";

import Edit from "@material-ui/icons/Edit";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";

import { Container, Grid } from "../../assets/common/Layout.style";

const AddPage = ({ intl }) => {
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Helmet title={intl.formatMessage({ id: "APP_TITLE.ADMIN_PANEL" })} />
      <Header
        mainTitle={intl.formatMessage({ id: "APP_TITLE.ADMIN_PANEL" })}
        sidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar open={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Background bg={false}>
        <Container theme={theme}>
          <Grid container justify="space-around" spacing={5}>
            <Grid item xs={12} sm={6}>
              <Card
                data={{
                  text: `${intl.formatMessage({
                    id: "APP_BUTTONS.ADD_SHELTER"
                  })}`,
                  url: `${shelterAddUrl}`,
                  linkTitle: `${intl.formatMessage({
                    id: "APP_BUTTONS.GO"
                  })}`
                }}
                isLink={true}
                Icon={PlaylistAdd}
                theme={theme}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                data={{
                  text: `${intl.formatMessage({
                    id: "APP_BUTTONS.ADD_PET"
                  })}`,
                  url: `${petAddUrl}`,
                  linkTitle: `${intl.formatMessage({
                    id: "APP_BUTTONS.GO"
                  })}`
                }}
                isLink={true}
                Icon={PlaylistAdd}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                data={{
                  text: `${intl.formatMessage({
                    id: "APP_BUTTONS.MANAGE_SHELTERS"
                  })}`,
                  url: `${adminSheltersDashboardUrl}`,
                  linkTitle: `${intl.formatMessage({
                    id: "APP_BUTTONS.GO"
                  })}`
                }}
                isLink={true}
                Icon={Edit}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                data={{
                  text: `${intl.formatMessage({
                    id: "APP_BUTTONS.MANAGE_PETS"
                  })}`,
                  url: `${adminPetsDashboardUrl}`,
                  linkTitle: `${intl.formatMessage({
                    id: "APP_BUTTONS.GO"
                  })}`
                }}
                isLink={true}
                Icon={Edit}
              />
            </Grid>
          </Grid>
        </Container>
      </Background>
      <Footer />
    </>
  );
};

export default injectIntl(AddPage);

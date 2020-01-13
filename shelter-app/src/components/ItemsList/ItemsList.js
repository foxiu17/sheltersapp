import React from "react";

import { useStateContextAuthorization } from "../../context/auth-context";

import ItemCard from "../ItemCard/ItemCard";

import { Grid } from "@material-ui/core";

const ItemsList = ({ data, launchMutation }) => {
  const [auth] = useStateContextAuthorization();

  const chooseAction = item => {
    const isFavorite = checkIsPetFavorite(item);
    if (isFavorite) {
      launchMutation(item._id, auth.userID, true);
    } else {
      launchMutation(item._id, auth.userID, false);
    }
  };

  const checkIsPetFavorite = item => {
    let response = false;
    if (item.accounts) {
      item.accounts.forEach(element => {
        if (element._id === auth.userID) response = true;
      });
    }

    return response;
  };

  return (
    <Grid container spacing={3} justify="flex-start">
      {data.map((item, index) => {
        const favorite = checkIsPetFavorite(item);
        return (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <ItemCard
              data={item}
              favorite={favorite}
              handleClick={chooseAction}
              userType={auth.type && auth.type === 1 ? auth.type : 0}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ItemsList;

import RootPage from "../views/RootPage";
import PetPage from "../views/PetPage";
import PetsPage from "../views/PetsPage";
import ShelterPage from "../views/ShelterPage";
import SheltersPage from "../views/SheltersPage";
import FavoritesPage from "../views/FavoritesPage";
import EditAccountPage from "../views/EditAccountPage";
import BlackHolePage from "../views/BlackHolePage";

const userRoutes = [
  {
    path: "/",
    name: "ROOT-PAGE",
    component: RootPage,
    exact: true
  },
  {
    path: "/edit-account/:email",
    name: "EDIT-ACCOUNT-PAGE",
    component: EditAccountPage,
    exact: true
  },
  {
    path: "/pets-page/details/:id",
    name: "PET-PAGE",
    component: PetPage,
    exact: true
  },
  {
    path: "/pets-page/:id",
    name: "PETS-PAGE",
    component: PetsPage,
    exact: true
  },
  {
    path: "/pets-page",
    name: "PETS-PAGE",
    component: PetsPage,
    exact: true
  },
  {
    path: "/shelters-page/details/:id",
    name: "SHELTER-PAGE",
    component: ShelterPage,
    exact: true
  },
  {
    path: "/shelters-page",
    name: "SHELTERS-PAGE",
    component: SheltersPage,
    exact: true
  },
  {
    path: "/favorite-pets-page",
    name: "FAVORITES-PETS-PAGE",
    component: FavoritesPage,
    exact: true
  },

  // 404
  {
    path: "*",
    name: "BLACK-HOLE-PAGE",
    component: BlackHolePage,
    exact: false
  }
];

export default userRoutes;

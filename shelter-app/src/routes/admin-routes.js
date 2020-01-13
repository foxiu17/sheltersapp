import RootPage from "../views/RootPage";
import PetPage from "../views/PetPage";
import PetsPage from "../views/PetsPage";
import ShelterPage from "../views/ShelterPage";
import SheltersPage from "../views/SheltersPage";
import AddShelterPage from "../views/AddShelterPage";
import AddPetPage from "../views/AddPetPage";
import AddPage from "../views/AddPage";
import DashboardShelters from "../views/DashboardShelters";
import DashboardPets from "../views/DashboardPets";

const adminRoutes = [
  {
    path: "/",
    name: "ROOT-PAGE",
    component: RootPage,
    exact: true
  },
  {
    path: "/pets-dashboard",
    name: "DASHBOARD-PAGE",
    component: DashboardPets,
    exact: true
  },
  {
    path: "/shelters-dashboard",
    name: "DASHBOARD-PAGE",
    component: DashboardShelters,
    exact: true
  },
  {
    path: "/pets-page/details/:id",
    name: "PET-PAGE",
    component: PetPage,
    exact: true
  },
  {
    path: "/pets-page/add",
    name: "PETS-PAGE-ADD",
    component: AddPetPage,
    exact: true
  },
  {
    path: "/pets-page",
    name: "PETS-PAGE",
    component: PetsPage,
    exact: true
  },
  {
    path: "/pets-page/:id",
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
    path: "/shelters-page/add",
    name: "SHELTERS-PAGE-ADD",
    component: AddShelterPage,
    exact: true
  },
  {
    path: "/shelters-page",
    name: "SHELTERS-PAGE",
    component: SheltersPage,
    exact: true
  },
  {
    path: "/add-page",
    name: "ADD-PAGE",
    component: AddPage,
    exact: true
  }
];

export default adminRoutes;

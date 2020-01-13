import RootPage from '../views/RootPage';
import PetPage from '../views/PetPage';
import PetsPage from '../views/PetsPage';
import ShelterPage from '../views/ShelterPage';
import SheltersPage from '../views/SheltersPage';
import SignInPage from '../views/SignInPage';
import SignUpPage from '../views/SignUpPage';

const routes = [
  {
    path: '/',
    name: 'ROOT-PAGE',
    component: RootPage,
    exact: true
  },
  {
    path: "/pets-page/details/:id",
    name: 'PET-PAGE',
    component: PetPage,
    exact: true
  },
  {
    path: '/pets-page/:id',
    name: 'PETS-PAGE',
    component: PetsPage,
    exact: true
  },
  {
    path: '/pets-page',
    name: 'PETS-PAGE',
    component: PetsPage,
    exact: true
  },
  {
    path: "/shelters-page/details/:id",
    name: 'SHELTER-PAGE',
    component: ShelterPage,
    exact: true
  },
  {
    path: '/shelters-page',
    name: 'SHELTERS-PAGE',
    component: SheltersPage,
    exact: true
  },

  // AUTH ROUTES
  {
    path: '/sign-in-page',
    name: 'SIGN-IN-PAGE',
    component: SignInPage,
    exact: true
  },
  {
    path: '/sign-up-page',
    name: 'SIGN-UP-PAGE',
    component: SignUpPage,
    exact: true
  },
];

export default routes;
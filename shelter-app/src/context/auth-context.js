import React, { createContext, useContext, useReducer } from "react";

export const StateContextAuthorization = createContext();

// export const authContext = useContext({
//   token: null,
//   userId: null,
//   login: () => {},
//   logout: () => {}
// });

const localStorageName = "token";
const init = () => {
  const user = localStorage.getItem(localStorageName);
  if (!user) return {};
  return JSON.parse(user);
};

const authorizationReducer = (state, action) => {
  switch (action.type) {
    case "init": {
      return state;
    }
    case "login": {
      const { userID, token, tokenExpiration, type } = action.payload;
      const user = {
        userID,
        token,
        tokenExpiration,
        type
      };
      localStorage.setItem(localStorageName, JSON.stringify(user));
      return { ...user, tokenValidate: true };
    }
    case "logout": {
      localStorage.removeItem(localStorageName);
      return {};
    }
    default:
      return state;
    // case 'setCheckTokenInterval': {
    //   return { ...state, checkTokenInterval: action.payload };
    // }
    // case 'setNewToken': {
    //   const { access_token, exp, iat } = action.payload;
    //   const user = JSON.parse(localStorage.getItem(localStorageName));
    //   const newUser = { ...user, access_token, exp, iat };
    //   localStorage.setItem(localStorageName, JSON.stringify(newUser));
    //   return { ...newUser, tokenValidate: true };
    // }
    // case 'setTokenValidate': {
    //   return { ...state, tokenValidate: action.payload };
    // }
  }
};

export const StateProviderAuthorization = ({
  reducer,
  initialState,
  children
}) => (
  <StateContextAuthorization.Provider
    value={useReducer(authorizationReducer, init())}
  >
    {children}
  </StateContextAuthorization.Provider>
);

export const useStateContextAuthorization = () =>
  useContext(StateContextAuthorization);

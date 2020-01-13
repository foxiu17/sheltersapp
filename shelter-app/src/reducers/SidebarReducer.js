export const initialState = {
  isSidebarOpen: false
};

export function reducer(state, action) {
  switch (action.type) {
    case "open":
      console.log('otwieram');
      return { isSidebarOpen: true };
    case "close":
      console.log('zamykam');
      return { isSidebarOpen: false };
    default:
      throw new Error();
  }
};

export const initialState = {
  isSidebarOpen: false
};

export function reducer(state, action) {
  switch (action.type) {
    case "open":
      return { isSidebarOpen: true };
    case "close":
      return { isSidebarOpen: false };
    default:
      throw new Error();
  }
};

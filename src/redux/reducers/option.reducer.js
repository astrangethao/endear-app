const optionsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_OPTIONS":
      return action.payload;
    case "UNSET_OPTIONS":
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default optionsReducer;

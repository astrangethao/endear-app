const registeredReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_NEW_REGISTERED_ID":
      return action.payload;
    case "CLEAR_REGISTERED":
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default registeredReducer;

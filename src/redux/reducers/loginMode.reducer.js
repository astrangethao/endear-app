const loginMode = (state = "login", action) => {
  switch (action.type) {
    case "SET_TO_LOGIN_MODE":
      return "login";
    case "SET_TO_REGISTER_MODE":
      return "register";
    case "SET_TO_REGISTER_NAME":
      return "register_name";
    case "SET_TO_REGISTER_GENDER":
      return "register_gender";
    case "SET_TO_REGISTER_DOB":
      return "register_dob";
    case "SET_TO_REGISTER_LOCATION":
      return "register_location";
    default:
      return state;
  }
};

// loginMode will be on the redux state at:
// state.loginMode
export default loginMode;

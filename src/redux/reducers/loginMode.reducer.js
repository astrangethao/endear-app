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
    case "SET_TO_REGISTER_PHONE":
      return "register_phone";
    case "SET_TO_REGISTER_INTEREST":
      return "register_interest";
    case "SET_TO_REGISTER_PHOTOS":
      return "register_photos";
    case "SET_TO_REGISTER_DETAILS":
      return "register_details";
    case "SET_TO_REGISTER_AUDIO":
      return "register_audio";
    default:
      return state;
  }
};

// loginMode will be on the redux state at:
// state.loginMode
export default loginMode;

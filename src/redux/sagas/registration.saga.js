import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: "CLEAR_REGISTRATION_ERROR" });

    // passes the username and password from the payload to the server
    const response = yield axios.post("api/user/register", action.payload);
    console.log("NEWUSER:", response.data);

    //passes id to the reducer
    yield put({
      type: "SET_NEW_REGISTERED_NAMES",
      payload: {
        ...response.data,
        ...action.payload,
      },
    });

    //update to show step 2
    yield put({ type: "SET_TO_REGISTER_NAME" });

    // yield put({ type: "SET_TO_LOGIN_MODE" });
  } catch (error) {
    console.log("Error with user registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}

function* registerName(action) {
  try {
    yield console.log("REGISTER NAMES:", action.payload.id);

    // passes the first name and last name from the payload to the server
    yield axios.put(`api/user/names/${action.payload.id}`, {
      first_name: action.payload.first_name,
      last_name: action.payload.last_name,
    });

    //update to show step 2
    yield put({ type: "SET_TO_REGISTER_GENDER" });
  } catch (error) {
    console.log("Error with user first/last name registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}

function* registrationSaga() {
  yield takeLatest("REGISTER", registerUser);
  yield takeLatest("REGISTER_NAME", registerName);
}

export default registrationSaga;

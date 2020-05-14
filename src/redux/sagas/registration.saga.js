import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: "CLEAR_REGISTRATION_ERROR" });

    // passes the username and password from the payload to the server
    const response = yield axios.post("api/user/register", action.payload);

    //passes id to the reducer
    yield put({
      type: "SET_NEW_REGISTERED_ID",
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

function* registerGender(action) {
  try {
    // passes the first name and last name from the payload to the server
    yield axios.put(`api/user/gender/${action.payload.id}`, {
      gender_id: action.payload.gender_id,
    });

    //update to show step 2
    yield put({ type: "SET_TO_REGISTER_DOB" });
  } catch (error) {
    console.log("Error with user gender registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}

function* registerDob(action) {
  try {
    // passes the first name and last name from the payload to the server
    yield axios.put(`api/user/dob/${action.payload.id}`, {
      dob: action.payload.dob,
    });

    //update to show step 2
    yield put({ type: "SET_TO_REGISTER_LOCATION" });
  } catch (error) {
    console.log("Error with user dob registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}

function* registerLocation(action) {
  try {
    // passes the first name and last name from the payload to the server
    yield axios.post(`api/user/location/${action.payload.id}`, {
      city: action.payload.city,
      zipcode: action.payload.zipcode,
    });

    //update to show step 2
    yield put({ type: "SET_TO_REGISTER_PHONE" });
  } catch (error) {
    console.log("Error with user location registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}

function* registerPhone(action) {
  try {
    // passes the phone number from the payload to the server
    yield axios.put(`api/user/phone/${action.payload.id}`, {
      phone_number: action.payload.phone_number,
    });

    //update to show step 2
    yield put({ type: "SET_TO_REGISTER_INTEREST" });
  } catch (error) {
    console.log("Error with user phone registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}

function* registerInterest(action) {
  try {
    // passes the gender interest choice from the payload to the server
    yield axios.post(`api/user/interest/${action.payload.id}`, {
      gender_id: action.payload.gender_id,
    });

    //update to show step 2
    yield put({ type: "SET_TO_REGISTER_PHOTOS" });
  } catch (error) {
    console.log("Error with user phone registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}

function* registerPhotos(action) {
  try {
    // passes the gender interest choice from the payload to the server
    yield axios.post(`api/user/photos/${action.payload.id}`, {
      link: action.payload.link,
    });
  } catch (error) {
    console.log("Error with user photo registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}

function* setToDetailsPage(action) {
  yield put({ type: "SET_TO_REGISTER_DETAILS" });
}

function* registerAudio(action) {
  try {
    // passes the gender interest choice from the payload to the server
    yield axios.post(`api/user/audio-link/${action.payload.id}`, {
      audio: action.payload.link,
    });

    yield put({
      type: "LOGIN",
      payload: {
        username: action.payload.username,
        password: action.payload.password,
      },
    });

    yield put({ type: "SET_TO_LOGIN_MODE" });
  } catch (error) {
    console.log("Error with user photo registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}

function* registerDetails(action) {
  try {
    yield axios.put(`api/user/details/${action.payload.id}`, {
      details: action.payload.details,
    });

    yield put({ type: "SET_TO_REGISTER_AUDIO" });
  } catch (error) {
    console.log("Error with user details registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}

function* registrationSaga() {
  yield takeLatest("REGISTER", registerUser);
  yield takeLatest("REGISTER_NAME", registerName);
  yield takeLatest("REGISTER_GENDER", registerGender);
  yield takeLatest("REGISTER_DOB", registerDob);
  yield takeLatest("REGISTER_LOCATION", registerLocation);
  yield takeLatest("REGISTER_PHONE", registerPhone);
  yield takeLatest("REGISTER_INTEREST", registerInterest);
  yield takeLatest("REGISTER_PHOTOS", registerPhotos);
  yield takeLatest("REGISTER_DETAILS", registerDetails);
  yield takeLatest("REGISTER_AUDIO", registerAudio);
  yield takeLatest("SET_MODE", setToDetailsPage);
}

export default registrationSaga;

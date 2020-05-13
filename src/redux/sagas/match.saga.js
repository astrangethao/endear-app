import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getOptions(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.get("api/user/options", config);

    yield put({ type: "SET_OPTIONS", payload: response.data });
  } catch (error) {
    console.log("Error with user options:", error);
  }
}

// function* postMatches(action) {
//   try {

//   yield axios.post("api/user/match", );

//     yield put({ type: "SET_MATCHES", payload: response.data });
//   } catch (error) {
//     console.log("Error with user matches:", error);
//   }
// }

function* matchSaga() {
  yield takeLatest("GET_OPTIONS", getOptions);
  // yield takeLatest("POST_MATCHES", postMatches);
}

export default matchSaga;

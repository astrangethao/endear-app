import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getMatches(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.get("api/user/match", config);

    yield put({ type: "SET_MATCHES", payload: response.data });
  } catch (error) {
    console.log("Error with user matches:", error);
  }
}

function* matchSaga() {
  yield takeLatest("GET_MATCHES", getMatches);
}

export default matchSaga;

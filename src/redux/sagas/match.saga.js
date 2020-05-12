import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getMatches(action) {
  try {
    const response = yield axios.get("api/user/match", action.payload);
    console.log(response.data);
  } catch (error) {
    console.log("Error with user matches:", error);
  }
}

function* matchSaga() {
  yield takeLatest("GET_MATCHES", getMatches);
}

export default matchSaga;

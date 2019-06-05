import { takeLatest } from "redux-saga/effects";
import axios from "axios";

function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

//regular function bc Saga won't use it and it doesn't use Saga methods
function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}

function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;
    yield put({ type: "API_CALL_SUCCESS", dog });
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

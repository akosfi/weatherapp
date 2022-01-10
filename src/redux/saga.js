import { all } from "redux-saga/effects";
//
import citiesSaga from "./cities/saga";

function* rootSaga() {
    yield all([citiesSaga()]);
}

export default rootSaga;
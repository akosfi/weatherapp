import { all } from "redux-saga/effects";
//
import citiesSaga from "redux/cities/saga";

function* rootSaga() {
    yield all([citiesSaga()]);
}

export default rootSaga;

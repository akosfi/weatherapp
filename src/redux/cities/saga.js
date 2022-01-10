import { takeLatest, all } from "redux-saga/effects";
//
import { CitiesActions } from "./slice";
import loadDefaultCitiesSaga from "./sagas/loadDefaultCitiesSaga";
import addCitySaga from "./sagas/addCitySaga";

//

function* citiesSaga() {
    yield all([
        takeLatest(CitiesActions.loadDefaultCitiesRequest.type, loadDefaultCitiesSaga),
        takeLatest(CitiesActions.addCityRequest.type, addCitySaga)
    ]);
}

export default citiesSaga;

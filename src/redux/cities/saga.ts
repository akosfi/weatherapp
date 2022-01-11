import { takeLatest, all } from "redux-saga/effects";
//
import { CitiesActions } from "redux/cities/slice";
import loadDefaultCitiesSaga from "redux/cities/sagas/loadDefaultCitiesSaga";
import addSavedCitySaga from "redux/cities/sagas/addSavedCitySaga";
import initAppSaga from "redux/cities/sagas/initAppSaga";

//

function* citiesSaga() {
    yield all([
        takeLatest(CitiesActions.initAppSaga.type, initAppSaga),
        takeLatest(CitiesActions.loadDefaultCitiesRequest.type, loadDefaultCitiesSaga),
        takeLatest(CitiesActions.addSavedCityRequest.type, addSavedCitySaga)
    ]);
}

export default citiesSaga;

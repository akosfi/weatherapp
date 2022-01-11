import { take, put, select } from "redux-saga/effects";
//
import { CitiesActions } from "redux/cities/slice";
import CitiesSelectors from "redux/cities/selectors";
import { City } from "redux/cities/types";

function* initAppSaga() {
    try {
        yield put(CitiesActions.loadDefaultCitiesRequest());

        yield take([
            CitiesActions.loadDefaultCitiesSuccess.type
        ]);

        const defaultCity: City = yield select(CitiesSelectors.createGetFindDefaultCityByName("Budapest"));

        if (!!defaultCity) {
            yield put(CitiesActions.addSavedCityRequest({ cityId: defaultCity.id }));
        }
    } catch (e) {
        console.log(e);
    }
}

export default initAppSaga;
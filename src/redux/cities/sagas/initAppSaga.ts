import { take, put, select } from "redux-saga/effects";
//
import { CitiesActions } from "redux/cities/slice";
import CitiesSelectors from "redux/cities/selectors";
import { City } from "redux/cities/types";

function* initAppSaga() {
    try {
        yield put(CitiesActions.loadDefaultCitiesRequest());

        const action: ReturnType<
            typeof CitiesActions.loadDefaultCitiesSuccess | typeof CitiesActions.loadDefaultCitiesError
        > = yield take([CitiesActions.loadDefaultCitiesSuccess.type, CitiesActions.loadDefaultCitiesError.type]);

        if (action.type === CitiesActions.loadDefaultCitiesError.type) {
            return;
        }

        const defaultCity: City = yield select(CitiesSelectors.createGetFindDefaultCityByName("Budapest"));

        if (!!defaultCity) {
            yield put(CitiesActions.addSavedCityRequest({ cityId: defaultCity.id }));
        }
    } catch (e) {
        console.log(e);
    }
}

export default initAppSaga;

import { retry, put } from "redux-saga/effects";
import { map, compact } from "lodash";
//
import restCountriesApi from "../../../utils/api/restCountriesApi";
import { CitiesActions } from "../slice";

function* loadDefaultCitiesSaga() {
    try {
        const { data: citiesData } = yield retry(3, 1500, restCountriesApi.get, "/all");

        const cityNames = compact(map(citiesData, ({ capital }) => capital && capital[0]));

        let id = 0;
        const cities = map(cityNames, (cityName) => ({
            id: id++,
            name: cityName
        }));

        yield put(CitiesActions.loadDefaultCitiesSuccess({ cities }));
        yield put(CitiesActions.addSavedCityRequest({ cityId: 130 }));

    } catch (e) {

    }
}

export default loadDefaultCitiesSaga;
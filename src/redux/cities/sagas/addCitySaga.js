import { call, select } from "redux-saga/effects";
import { find } from "lodash";
//
import CitiesSelectors from "../selectors";
import fetchWeatherForCity from "./helpers/fetchWeatherForCity";

function* addCitySaga(action) {
    try {
        const cityId = action.payload.cityId;

        const cities = yield select(CitiesSelectors.getDefaultCities);
        const city = find(cities, ({ id }) => id === cityId);

        if (city === undefined) {
            throw new Error("City not found.");
        }

        const weather = yield call(fetchWeatherForCity, city.name);

    } catch (e) {

    }
}

export default addCitySaga;
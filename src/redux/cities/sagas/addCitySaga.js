import { retry, select } from "redux-saga/effects";
import { find } from "lodash";
//
import openWeatherAppApi from "../../../utils/api/openWeatherAppApi";
import CitiesSelectors from "../selectors";

function* addCitySaga(action) {
    try {
        const cityId = action.payload.cityId;

        const cities = yield select(CitiesSelectors.getDefaultCities);
        const city = find(cities, ({ id }) => id === cityId);

        if (city === undefined) {
            throw new Error("City not found.");
        }

        const { data: citiesData } = yield retry(
            3,
            1500,
            openWeatherAppApi.get,
            `/weather?q=${city.name}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        );


    } catch (e) {

    }
}

export default addCitySaga;
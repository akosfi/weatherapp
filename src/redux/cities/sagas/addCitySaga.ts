import { call, select } from "redux-saga/effects";
import { find } from "lodash";
//
import CitiesSelectors from "redux/cities/selectors";
import { CitiesActions } from "redux/cities/slice";
import fetchWeatherForCity from "redux/cities/sagas/helpers/fetchWeatherForCity";
import { City } from "redux/cities/types";
import { FixMeLater } from "utils/types/FixMeLater";

function* addCitySaga({ payload }: ReturnType<typeof CitiesActions.addCityRequest>) {
    try {
        const cityId = payload.cityId;

        const cities: City[] = yield select(CitiesSelectors.getDefaultCities);
        const city = find(cities, ({ id }) => id === cityId);

        if (city === undefined) {
            throw new Error("City not found.");
        }

        //const weather: FixMeLater = yield call(fetchWeatherForCity, city.name);

    } catch (e) {

    }
}

export default addCitySaga;
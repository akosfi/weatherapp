import { select, retry, put } from "redux-saga/effects";
import { find, filter, isFunction } from "lodash";
//
import CitiesSelectors from "redux/cities/selectors";
import { CitiesActions } from "redux/cities/slice";
import { City, SavedCity } from "redux/cities/types";
import openWeatherAppApi from "utils/api/openWeatherAppApi";

function* addSavedCitySaga({ payload }: ReturnType<typeof CitiesActions.addSavedCityRequest>) {
    try {
        const cityId = payload.cityId;
        const navigate = payload.navigate;

        const cities: City[] = yield select(CitiesSelectors.getDefaultCities);
        const city = find(cities, ({ id }) => id === cityId);

        if (city === undefined) {
            throw new Error("City not found.");
        }

        const { data: weatherData } = yield retry(
            3,
            1500,
            openWeatherAppApi.get,
            `/weather?q=${city.name}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
        );


        const savedCity: SavedCity = {
            id: cityId,
            name: city.name,
            weather: {
                iconId: weatherData.weather[0].id,
                description: weatherData.weather[0].description,
                temp: weatherData.main.temp,
                sunrise: weatherData.sys.sunrise,
                sunset: weatherData.sys.sunset
            }
        };

        const savedCities: SavedCity[] = yield select(CitiesSelectors.getSavedCities);
        const savedCitiesWithoutCurrent: SavedCity[] = filter(savedCities, ({ id }) => id !== savedCity.id);
        const savedCitiesWithCurrent: SavedCity[] = [...savedCitiesWithoutCurrent, savedCity];

        yield put(CitiesActions.addSavedCitySuccess({ savedCities: savedCitiesWithCurrent }));

        if (isFunction(navigate)) {
            navigate(`/city/${cityId}`);
        }

    } catch (e) {
        console.log(e);
        yield put(CitiesActions.addSavedCityError({ error: "Failed to add city. Please try refreshing the application." }));
    }
}

export default addSavedCitySaga;
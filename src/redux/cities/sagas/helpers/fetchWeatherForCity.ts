import { retry } from "redux-saga/effects";
//
import openWeatherAppApi from "utils/api/openWeatherAppApi";
import { FixMeLater } from "utils/types/FixMeLater";

function* fetchWeatherForCity (cityName: string): Generator<FixMeLater,FixMeLater,FixMeLater> {
    const { data: citiesData } = yield retry(
        3,
        1500,
        openWeatherAppApi.get,
        `/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    );
    return citiesData;
}

export default fetchWeatherForCity;
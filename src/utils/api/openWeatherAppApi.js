import axios from "axios";

const openWeatherAppApi = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5",
    timeout: 3000,
});

export default openWeatherAppApi;
import axios from "axios";

const restCountriesApi = axios.create({
    baseURL: "https://restcountries.com/v3.1",
    timeout: 3000
});

export default restCountriesApi;

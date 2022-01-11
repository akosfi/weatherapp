import { City } from "redux/cities/types";

export type CitiesState = { defaultCities: City[], selectedCities: []}

export const initialState: CitiesState = {
    defaultCities: [],
    selectedCities: []
};


export default initialState;
import { City, SavedCity } from "redux/cities/types";

export type CitiesState = { defaultCities: City[], savedCities: SavedCity[]}

export const initialState: CitiesState = {
    defaultCities: [],
    savedCities: []
};


export default initialState;
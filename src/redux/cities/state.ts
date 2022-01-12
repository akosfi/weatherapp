import { City, SavedCity } from "redux/cities/types";

export type CitiesState = { defaultCities: City[]; savedCities: SavedCity[]; error: string };

export const initialState: CitiesState = {
    defaultCities: [],
    savedCities: [],
    error: ""
};

export default initialState;

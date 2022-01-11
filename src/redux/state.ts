import { CitiesState, initialState as initialCitiesState } from "./cities/state";

export type StoreState = {
    cities: CitiesState;
}

const initialState = { cities: initialCitiesState };

export default initialState;
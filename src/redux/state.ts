import { CitiesState, initialState as initialCitiesState } from "redux/cities/state";

export type StoreState = {
    cities: CitiesState;
};

const initialState = { cities: initialCitiesState };

export default initialState;

import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.cities;

const getDefaultCities = (state: StoreState) => getState(state).defaultCities;

const CitiesSelectors = {
    getDefaultCities
};

export default CitiesSelectors;
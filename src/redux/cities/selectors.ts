import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.cities;

const getDefaultCities = (state: StoreState) => getState(state).defaultCities;

const getSavedCities = (state: StoreState) => getState(state).savedCities;

const CitiesSelectors = {
    getDefaultCities, getSavedCities
};

export default CitiesSelectors;
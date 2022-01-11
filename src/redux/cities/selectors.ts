import { find } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.cities;

const getDefaultCities = (state: StoreState) => getState(state).defaultCities;

const getSavedCities = (state: StoreState) => getState(state).savedCities;

const createGetFindSavedCityById = (id: number) => (state: StoreState) => find(getSavedCities(state), ({ id: _id }) => id === _id);

const CitiesSelectors = {
    getDefaultCities, getSavedCities, createGetFindSavedCityById
};

export default CitiesSelectors;
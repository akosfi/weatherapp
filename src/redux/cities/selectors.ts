import { find } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.cities;

const getDefaultCities = (state: StoreState) => getState(state).defaultCities;

const createGetFindDefaultCityByName = (name: string) => (state: StoreState) => find(getDefaultCities(state), ({ name: _name }) => name === _name);

const getSavedCities = (state: StoreState) => getState(state).savedCities;

const createGetFindSavedCityById = (id: number) => (state: StoreState) => find(getSavedCities(state), ({ id: _id }) => id === _id);

const getError = (state: StoreState) => getState(state).error;

const CitiesSelectors = {
    getDefaultCities, getSavedCities, createGetFindSavedCityById, createGetFindDefaultCityByName, getError
};

export default CitiesSelectors;
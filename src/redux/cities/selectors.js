const getState = (state) => state.cities;

const getDefaultCities = (state) => getState(state).defaultCities;

const CitiesSelectors = {
    getDefaultCities
};

export default CitiesSelectors;
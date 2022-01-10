import { createSlice } from "@reduxjs/toolkit";
import { noop } from "lodash";
//
import initialState from "./state";

const citiesSlice = createSlice({
    name: "CITIES",
    initialState,
    reducers: {
        loadDefaultCitiesRequest: noop,

        loadDefaultCitiesSuccess: (state, action) => {
            state.defaultCities = action.payload.cities;
        },

        loadDefaultCitiesError: noop,

        addCityRequest: (state, action) => {},

        addCitySuccess: (state, action) => {
            //TODO
        },

        addCityError: noop
    }
});

export const { actions: CitiesActions, reducer: CitiesReducer } = citiesSlice;

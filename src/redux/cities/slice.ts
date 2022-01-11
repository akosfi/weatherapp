import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { noop } from "lodash";
//
import initialState from "redux/cities/state";
import { City, SavedCity } from "redux/cities/types";

const citiesSlice = createSlice({
    name: "CITIES",
    initialState,
    reducers: {
        loadDefaultCitiesRequest: noop as CaseReducer,

        loadDefaultCitiesSuccess: (state, action: PayloadAction<{ cities: City[] }>) => {
            state.defaultCities = action.payload.cities;
        },

        loadDefaultCitiesError: noop,

        addSavedCityRequest: (state, action) => {

        },

        addSavedCitySuccess: (state, action: PayloadAction<{ savedCities: SavedCity[] }>) => {
            state.savedCities = action.payload.savedCities;
        },

        addSavedCityError: noop
    }
});

export const { actions: CitiesActions, reducer: CitiesReducer } = citiesSlice;

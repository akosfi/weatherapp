import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { noop } from "lodash";
//
import initialState from "redux/cities/state";
import { City, SavedCity } from "redux/cities/types";

const citiesSlice = createSlice({
    name: "CITIES",
    initialState,
    reducers: {
        initAppSaga: noop as CaseReducer,
        loadDefaultCitiesRequest: noop as CaseReducer,

        loadDefaultCitiesSuccess: (state, action: PayloadAction<{ cities: City[] }>) => {
            state.defaultCities = action.payload.cities;
        },

        loadDefaultCitiesError: (state, action: PayloadAction<{ error: string }>) => {
            state.error = action.payload.error;
        },

        addSavedCityRequest: (state, action: PayloadAction<{ cityId: number, navigate?: (href: string) => void }>) => {
        },

        addSavedCitySuccess: (state, action: PayloadAction<{ savedCities: SavedCity[] }>) => {
            state.savedCities = action.payload.savedCities;
        },

        addSavedCityError: (state, action: PayloadAction<{ error: string }>) => {
            state.error = action.payload.error;
        }
    }
});

export const { actions: CitiesActions, reducer: CitiesReducer } = citiesSlice;

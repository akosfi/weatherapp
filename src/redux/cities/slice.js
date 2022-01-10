import { createSlice } from "@reduxjs/toolkit";
//
import initialState from "./state";

const citiesSlice = createSlice({
    name: "CITIES",
    initialState,
    reducers: {}
});

export const { actions: CitiesActions, reducer: CitiesReducer } = citiesSlice;

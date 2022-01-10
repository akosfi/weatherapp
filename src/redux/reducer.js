import { combineReducers } from "redux";
//
import { CitiesReducer } from "./cities/slice";

export default combineReducers({ cities: CitiesReducer });

import { combineReducers } from "redux";
//
import { CitiesReducer } from "redux/cities/slice";

export default combineReducers({ cities: CitiesReducer });

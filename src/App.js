import React, { memo, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
//
import { CitiesActions } from "./redux/cities/slice";

//

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CitiesActions.loadDefaultCitiesRequest());
    }, [dispatch]);
    return (
        <h2>a</h2>
    );
}

export default App;

import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
//
import MainPage from "components/pages/MainPage";
import SearchPage from "components/pages/SearchPage";
import CityPage from "components/pages/CityPage";
import { CitiesActions } from "redux/cities/slice";
//

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CitiesActions.initAppSaga());
    }, [dispatch]);

    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/city/:id" element={<CityPage />} />
            </Routes>
        </div>
    );
}

export default App;

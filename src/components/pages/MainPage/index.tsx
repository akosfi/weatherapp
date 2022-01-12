import React, { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { map } from "lodash";
//
import CitiesSelectors from "redux/cities/selectors";
import CitiesGeneralErrorMessage from "components/common/CitiesGeneralErrorMessage";
//
import "./style.css";

const MainPage: FC = () => {
    const savedCities = useSelector(CitiesSelectors.getSavedCities);

    const navigate = useNavigate();

    const createHandleOnClick = (href: string) => () => navigate(href);

    return (
        <div className="MainPage">
            <CitiesGeneralErrorMessage />
            <div className="city-list">
                {map(savedCities, ({ id, name }) => (
                    <p key={id} className="city-list-item" onClick={createHandleOnClick(`/city/${id}`)}>
                        {name}
                    </p>
                ))}
                <p className="city-list-button" onClick={createHandleOnClick("/search")}>
                    +
                </p>
            </div>
        </div>
    );
};

export default memo(MainPage);

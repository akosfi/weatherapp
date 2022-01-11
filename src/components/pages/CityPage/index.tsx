import React, { FC, memo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//
import BackButton from "components/common/BackButton";
import CitiesSelectors from "redux/cities/selectors";
import useFormattedTimeFromDate from "utils/hooks/useFormattedTimeFromDate";
//
import "./style.css";

const CityPage: FC = () => {
    const { id } = useParams<{ id: string }>();

    const savedCity = useSelector(CitiesSelectors.createGetFindSavedCityById(Number(id)));

    const currentDate = useFormattedTimeFromDate(new Date());

    const sunriseTimeStamp = !!savedCity ? savedCity.weather.sunrise * 1000 : 0;
    const sunsetTimeStamp = !!savedCity ? savedCity.weather.sunset * 1000 : 0;
    const sunriseDate = useFormattedTimeFromDate(new Date(sunriseTimeStamp || new Date()));
    const sunsetDate = useFormattedTimeFromDate(new Date(sunsetTimeStamp || new Date()));

    if (!savedCity) {
        return null;
    }

    return <div className="CityPage">
        <div className="content">
            <BackButton href={"/"} />
            <div className="information">
                <p className="time">{currentDate.hour}<br />{currentDate.minute}</p>
                <p className="city">{savedCity.name}</p>

                <img
                    src="https://thumbs.dreamstime.com/b/temporary-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-changed-101630863.jpg"
                    className="temp-image" />
                <p className="temp-description">{savedCity.weather.description}</p>
                <div className="temp-details">
                    <img
                        src="https://thumbs.dreamstime.com/b/temporary-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-changed-101630863.jpg"
                        className="temp-details-image" />
                    <p className="temp-details-text">{savedCity.weather.temp}&#8451;</p>
                </div>
                <div className="temp-details">
                    <img
                        src="https://thumbs.dreamstime.com/b/temporary-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-changed-101630863.jpg"
                        className="temp-details-image" />
                    <p className="temp-details-text">{`${sunriseDate.hour}:${sunriseDate.minute}`}</p>
                </div>
                <div className="temp-details">
                    <img
                        src="https://thumbs.dreamstime.com/b/temporary-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-changed-101630863.jpg"
                        className="temp-details-image" />
                    <p className="temp-details-text">{`${sunsetDate.hour}:${sunsetDate.minute}`}</p>
                </div>
            </div>
        </div>
    </div>;
};

export default memo(CityPage);
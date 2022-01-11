import React, { FC, memo } from "react";
//
import BackButton from "components/common/BackButton";
//
import "./style.css";

const CityPage: FC = () =>
    <div className="CityPage">
        <div className="content">
            <BackButton href={"/"} />
            <div className="information">
                <p className="time">20<br />18</p>
                <p className="city">Budapest</p>

                <img
                    src="https://thumbs.dreamstime.com/b/temporary-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-changed-101630863.jpg"
                    className="temp-image" />
                <p className="temp-description">Drizzle</p>
                <div className="temp-details">
                    <img
                        src="https://thumbs.dreamstime.com/b/temporary-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-changed-101630863.jpg"
                        className="temp-details-image" />
                    <p className="temp-details-text">-10C</p>
                </div>
            </div>
        </div>
    </div>;

export default memo(CityPage);
import React, { FC, memo } from "react";
//
import BackButton from "components/common/BackButton";
//
import "./style.css";

const SearchPage: FC = () =>
    <div className="SearchPage">
        <div className="content">
            <BackButton href={"/"} />
            <div className="search">
                <input type="text" className="search-bar" />
                <div className="search-results">
                    <p className="search-results-item"><span>Ma</span>laga</p>
                </div>
            </div>
            <div className="save-button">Save</div>
        </div>
    </div>;

export default memo(SearchPage);
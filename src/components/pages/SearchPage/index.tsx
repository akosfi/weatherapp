import React, { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//
import BackButton from "components/common/BackButton";
import SearchBar from "components/pages/SearchPage/components/SearchBar";
import { CitiesActions } from "redux/cities/slice";
//
import "./style.css";

const SearchPage: FC = () => {
    const [selectedCityId, setSelectedCityId] = useState<number | null>(null);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSaveClick = () => dispatch(CitiesActions.addSavedCityRequest({
        cityId: selectedCityId as number,
        navigate
    }));

    return <div className="SearchPage">
        <div className="content">
            <BackButton href={"/"} />
            <SearchBar selectedCityId={selectedCityId} setSelectedCityId={setSelectedCityId} />
            {selectedCityId !== null && <div className="save-button" onClick={handleSaveClick}>Save</div>}
        </div>
    </div>;
};

export default memo(SearchPage);
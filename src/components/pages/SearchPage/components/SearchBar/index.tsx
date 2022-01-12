import React, { FC, memo, useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { filter, toLower, map, slice } from "lodash";
//
import CitiesSelectors from "redux/cities/selectors";
import SearchBarResult from "components/pages/SearchPage/components/SearchBar/components/SearchBarResult";
//
import "./style.css";

type Props = {
    selectedCityId: number | null;
    setSelectedCityId: (id: number | null) => void;
};

const SearchBar: FC<Props> = ({ selectedCityId, setSelectedCityId }) => {
    const [searchValue, setSearchValue] = useState<string>("");

    const defaultCities = useSelector(CitiesSelectors.getDefaultCities);
    const savedCities = useSelector(CitiesSelectors.getSavedCities);
    const savedCityIds = map(savedCities, ({ id }) => id);

    const matchingCities = useMemo(
        () =>
            slice(
                filter(
                    defaultCities,
                    ({ id, name }) => toLower(name).includes(toLower(searchValue)) && !savedCityIds.includes(id)
                ),
                0,
                7
            ),
        [searchValue, defaultCities]
    );

    useEffect(() => {
        setSelectedCityId(null);
    }, [matchingCities]);

    return (
        <div className="SearchBar">
            <div className="search-bar">
                <input type="text" value={searchValue} onChange={e => setSearchValue(e?.target?.value || "")} />
                <span>V</span>
            </div>
            <div className="search-results">
                {!!searchValue &&
                    map(matchingCities, ({ id, name }) => (
                        <SearchBarResult
                            key={id}
                            id={id}
                            name={name}
                            searchValue={searchValue}
                            selectedCityId={selectedCityId}
                            setSelectedCityId={setSelectedCityId}
                        />
                    ))}
            </div>
        </div>
    );
};
export default memo(SearchBar);

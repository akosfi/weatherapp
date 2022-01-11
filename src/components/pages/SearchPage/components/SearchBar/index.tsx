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
}

const SearchBar: FC<Props> = ({ selectedCityId, setSelectedCityId }) => {
        const [searchValue, setSearchValue] = useState<string>("");

        const defaultCities = useSelector(CitiesSelectors.getDefaultCities);
        const matchingCities = useMemo(() =>
                slice(filter(defaultCities,
                        ({ name }) => toLower(name).includes(toLower(searchValue))),
                    0,
                    7),
            [searchValue, defaultCities]);

        useEffect(() => {
            setSelectedCityId(null);
        }, [matchingCities]);

        return (
            <div className="SearchBar">
                <input type="text" className="search-bar" value={searchValue}
                       onChange={(e) => setSearchValue(e?.target?.value || "")} />
                <div className="search-results">
                    {!!searchValue &&
                        map(matchingCities, ({ id, name }) =>
                            <SearchBarResult
                                key={id}
                                id={id}
                                name={name}
                                searchValue={searchValue}
                                selectedCityId={selectedCityId}
                                setSelectedCityId={setSelectedCityId} />)}
                </div>
            </div>
        );
    }
;

export default memo(SearchBar);
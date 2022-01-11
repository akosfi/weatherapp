import React, { FC, memo, useMemo, ReactElement } from "react";
import { forEach } from "lodash";
//
//
import "./style.css";

type Props = {
    id: number;
    selectedCityId: number | null;
    setSelectedCityId: (id: number | null) => void;
    searchValue: string;
    name: string;
}

const SearchBarResult: FC<Props> = ({ searchValue, name, id, selectedCityId, setSelectedCityId }) => {

    const formattedString = useMemo(() => {
        const searchValueMatches = Array.from(name.matchAll(new RegExp(`(${searchValue})`, "gi")));
        const searchValueLength = searchValue.length;
        const searchValueMatchIndexes = searchValueMatches.map(({ index }) => index);
        const formattedStringArray: (ReactElement | string)[] = [];

        let currentIndex = 0;
        forEach(name, (val, index) => {
            if (currentIndex > index) {
                return;
            }
            if (searchValueMatchIndexes.includes(index)) {
                const matchedSubString = name.substring(index, index + searchValueLength);
                formattedStringArray.push(<span>{matchedSubString}</span>);
                currentIndex = index + searchValueLength;
            } else {
                formattedStringArray.push(name[currentIndex]);
                currentIndex++;
            }
        });

        return formattedStringArray;
    }, [searchValue, name]);

    console.log(id === selectedCityId);
    console.log(id, name)

    return <p className="SearchBarResult" onClick={() => setSelectedCityId(id)}>{id === selectedCityId ?
        <u>{formattedString}</u> : formattedString}</p>;
};
export default memo(SearchBarResult);
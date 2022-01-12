import React, { FC, memo } from "react";
import { useSelector } from "react-redux";
//
import GeneralErrorMessage from "components/common/GeneralErrorMessage";
import CitiesSelectors from "redux/cities/selectors";

const CitiesGeneralErrorMessage: FC = () => {
    const error = useSelector(CitiesSelectors.getError);
    return <GeneralErrorMessage text={error} />;
};

export default memo(CitiesGeneralErrorMessage);

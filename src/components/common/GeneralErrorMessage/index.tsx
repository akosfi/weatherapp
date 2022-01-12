import React, { FC, memo } from "react";
//
//
import "./style.css";

type Props = {
    text: string;
}

const GeneralErrorMessage: FC<Props> = ({ text }) =>
    <>
        {!!text && <div className="GeneralErrorMessage">
            <p>{text}</p>
        </div>}
    </>;

export default memo(GeneralErrorMessage);


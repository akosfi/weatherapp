import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
//
//
import "./style.css";

type Props = {
    href: string;
};

const BackButton: FC<Props> = ({ href }) => {
    const navigate = useNavigate();

    const handleOnClick = () => navigate(href);

    return (
        <div className="BackButton" onClick={handleOnClick}>
            <span>&lt;</span>
        </div>
    );
};

export default memo(BackButton);

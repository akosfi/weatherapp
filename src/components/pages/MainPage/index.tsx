import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
//

//
import "./style.css";

const MainPage: FC = () => {
    const navigate = useNavigate();

    const createHandleOnClick = (href: string) => () => navigate("/search");

    return <div className="MainPage">
        <div className="city-list">
            <p className="city-list-item" onClick={createHandleOnClick("/city")}>Budapest</p>
            <p className="city-list-button" onClick={createHandleOnClick("/search")}>+</p>
        </div>
    </div>;
};

export default memo(MainPage);
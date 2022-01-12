import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
//
import App from "./App";
import store from "redux/store";
//
import "./assets/global/style.css";
import "./assets/global/weather-icons.min.css";

//@ts-ignore
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>,
    document.getElementById("root")
);
registerServiceWorker();

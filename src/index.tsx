import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
//
import App from "./App";
//@ts-ignore
import registerServiceWorker from "./registerServiceWorker";
import store from "redux/store";
//
import "./assets/global/style.css";


ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>,
    document.getElementById("root"));
registerServiceWorker();

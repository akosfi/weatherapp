import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//
import App from "./App";
//@ts-ignore
import registerServiceWorker from "./registerServiceWorker";
import store from "redux/store";
//
import "./assets/global/style.css";


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));
registerServiceWorker();

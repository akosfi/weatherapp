import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
//
import rootSaga from "./saga";
import rootReducer from "./reducer";
import initialState from "./state";

const sagaMiddleware = createSagaMiddleware();


function composeEnhancers() {
    if (typeof window !== "undefined" && typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== "undefined") {
        return (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
    return compose;
}

const store = createStore(rootReducer, initialState, composeEnhancers()(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;

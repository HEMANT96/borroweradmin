import { createBrowserHistory } from "history";
import {applyMiddleware, compose, createStore} from "redux";
// import createSagaMiddleware from "redux-saga";
import {routerMiddleware} from "connected-react-router";
import {createLogger} from "redux-logger";
// import createRootReducer from "./reducers";

export const history = createBrowserHistory();
// export const sagas = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(
        // createRootReducer(history),
        compose(
            applyMiddleware(
                routerMiddleware(history),
                // createLogger(),
                // sagas
            )
        )
    );
    return store;
}

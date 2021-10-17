// import createstore
import { createStore, applyMiddleware, compose } from "redux";

// import rootReducers
import thunk from "redux-thunk";
import rootReducer from "./../reducer/index";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// export
export default store;

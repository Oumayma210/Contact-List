// usage of combine reducer
import { combineReducers } from "redux";
import contactReducer from "./contact";

const rootReducer = combineReducers({
    contactReducer,
});
export default rootReducer;
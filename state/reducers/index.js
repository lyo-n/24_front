import { combineReducers } from "redux";

import accountsReducer from "./accountsReducer";

const reducers = combineReducers({
    accounts: accountsReducer
})

export default reducers;
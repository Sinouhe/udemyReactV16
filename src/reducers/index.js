import { combineReducers } from "redux";
import AuthentificationReducer from "./reducer-auth";
import ActioninfoReducer from "./reducer-actio-info";

const rootReducer = combineReducers({
  authentification: AuthentificationReducer,
  actionInfo: ActioninfoReducer
});

export default rootReducer;

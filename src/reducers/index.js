import { combineReducers } from "redux";
import AuthentificationReducer from "./reducer-auth";
import ActioninfoReducer from "./reducer-actio-info";
import ressourceReducer from './reducer-ressources'

const rootReducer = combineReducers({
  authentification: AuthentificationReducer,
  actionInfo: ActioninfoReducer,
  ressource: ressourceReducer
});

export default rootReducer;

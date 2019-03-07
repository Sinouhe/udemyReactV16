import { combineReducers } from "redux";
import AuthentificationReducer from "./reducer-auth";
import ActioninfoReducer from "./reducer-actio-info";
import ressourceReducer from './reducer-ressources'
import {reducer as form} from "redux-form"

const rootReducer = combineReducers({
  form,
  authentification: AuthentificationReducer,
  actionInfo: ActioninfoReducer,
  ressource: ressourceReducer,
});

export default rootReducer;

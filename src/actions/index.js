import { SET_AUTHENTIFICATION, INCREMENT_ACTION_COUNT, ADD_RESSOURCE } from "./action-types";
import axios from 'axios'

const BASE_URL = "http://localhost:3030"

export function setAuthentification(isLoggedIn) {
  return function(dispatch) {
    dispatch({
      type: SET_AUTHENTIFICATION,
      payload: isLoggedIn
    });
  };
}

export function incrementActionCount() {
  return {
    type: INCREMENT_ACTION_COUNT
  };
}

export function addRessource() {
  return {
    type: ADD_RESSOURCE
  };
}

export function signinUser({email, password}, history) {
  return function(dispatch) {
    axios.post(`${BASE_URL}/signin`, {
      email,
      password
    }).then((res) => {
      localStorage.setItem("token",res.data.token)
      dispatch(setAuthentification(true))
      history.push("/ressources")
    }).catch((err) => {
      console.log(err.message)
    })
  }
}

export function signoutUser() {
  return function(dispatch) {
    dispatch(setAuthentification(false));
    localStorage.removeItem("token")
  }
}
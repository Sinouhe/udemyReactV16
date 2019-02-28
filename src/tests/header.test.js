import React from 'react';
import Header from '../container/header';
import { shallow, mount } from  'enzyme';
import {setAuthentification } from '../actions'
import AuthentificationReducer from '../reducers/reducer-auth'
import { SET_AUTHENTIFICATION } from '../actions/action-types'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { MemoryRouter} from 'react-router-dom'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

describe("Test TodoApp fonctionnement", function() {
    it('render du composant connecté sans erreur', () => {
        const wrapper = shallow(
            <Provider store={createStoreWithMiddleware(reducers)}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </Provider>
        );
        console.log(wrapper.debug());
    })
});
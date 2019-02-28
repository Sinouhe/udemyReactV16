import {incrementActionCount} from '../actions/index';
import  {INCREMENT_ACTION_COUNT} from '../actions/action-types'

//2 écriture possible

/*
export const actionCounter = function(store) {
    return function(next) {
        return function(action) {
            if(action.type !== INCREMENT_ACTION_COUNT) {
                store.dispatch(incrementActionCount());
            }
            
            console.log("Action qui passe",action);
            next(action)

        }
    }
}
*/


export const actionCounter = store => next => action => {
    if(action.type !== INCREMENT_ACTION_COUNT) {
        store.dispatch(incrementActionCount());
    }
    
    console.log("Action qui passe",action);
    next(action)

}
import { createSelector } from 'reselect' 
import lodash from 'lodash'
export const getIntegerList = (state) => {
    return state.ressource.ressourceList
}

export const getContainsOneList = (state) => {
    return getIntegerList(state).filter( (r) => {
        return  r.toString().indexOf("1") > -1
    });
}

export const getPrimeNumberList = (state) => {
    return getIntegerList(state).filter( (r) => {
        return  isPrimeNumber(r)
    });
}

export const getSpecialNumbersList = createSelector(
    getContainsOneList,
    getPrimeNumberList,
    (containsOneList, primeNumberList) => {
        return lodash.intersection(containsOneList,primeNumberList);
    }
)


function isPrimeNumber(value) {
    for (var i = 2 ; i < value ; i++ ) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
import { AddMoreOneCount, RemoveMoreOneCount } from '../actions/action-types';

const initialState = {
    count: 0
};

export const changeCount = (state = initialState, action) => {       
    switch(action.type){
        case AddMoreOneCount: 
            return {
                ...state, 
                count: state.count + 1
            };
        case RemoveMoreOneCount:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
};
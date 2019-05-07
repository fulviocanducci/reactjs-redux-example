import { AddListOfValue } from './../actions/action-types';

const initialState = {
    ofList: []
};

export const addList = (state = initialState, action) => {    
    console.log(action);   
    switch(action.type){
        case AddListOfValue: 
            return {
                ...state, ofList: [...state.ofList, action.ofList]
            };
        default:
            return state;
    }
};
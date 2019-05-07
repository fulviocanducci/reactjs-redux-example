import { combineReducers } from 'redux';

import { changeCount } from './count-reducer';
import { addList } from './todoList-reducer';

export const Reducers = combineReducers({
    changeState: changeCount,
    addState: addList
});
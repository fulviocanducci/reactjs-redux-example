import { AddListOfValue  } from './action-types';
import uuidv1 from 'uuid/v1';

export function addList(value) {    
  return {
    type: AddListOfValue,
    ofList: {'id': uuidv1(), 'name': value}
  }
};
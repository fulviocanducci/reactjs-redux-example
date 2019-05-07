import { AddMoreOneCount, RemoveMoreOneCount } from './action-types';

export function clickAddCountButton() {  
  return {
    type: AddMoreOneCount,
    count: 1
  }
};

export function clickRemoveCountButton() {
  return {
    type: RemoveMoreOneCount,
    count: 1
  }
};
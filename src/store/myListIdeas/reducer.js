import {ADD_CARD_IN_MY_LIST} from './types'
import {COUNT_ACHIEVEMENTS} from '../achievement/types'

const initialState = [];

export const myListIdea = (state = initialState, action) => {
  switch (action.type) {
       
    case ADD_CARD_IN_MY_LIST :     
      if(action.payload==='') return
      const newCard = {
        id: Math.round(Math.random() * 100),
        value: action.payload,
      }
      return [
        ...state,
        newCard
      ];

    case COUNT_ACHIEVEMENTS :
      return state.filter(idea => action.payload.key !== idea.value.key);
    
    default:
      return state;      
  } 
}

import {ADD__RANDOM} from './types'

const initialState = []

export const events = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD__RANDOM:
      if(action.payload==='') return
      const newCard = {
        id: Math.round(Math.random() * 100),
        value: action.payload,
      }
      return [
        ...state,
        newCard
      ];
      
    default:
      return state;      
  } 
}

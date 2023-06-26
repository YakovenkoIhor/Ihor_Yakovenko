import {COUNT_ACHIEVEMENTS} from '../../store/achievement/types'

const initialState = [];

export const completed = (state = initialState, action) => {
  switch (action.type) {
    
    case COUNT_ACHIEVEMENTS:
      if(action.payload==='') return
      const newCard = {
        number: state.length + 1,
        title: action.payload.activity,
        type: action.payload.type,
        when: new Date().toLocaleTimeString(),
      }
      return [
        ...state,
        newCard
      ];
  
    default:
      return state;      
  } 
}

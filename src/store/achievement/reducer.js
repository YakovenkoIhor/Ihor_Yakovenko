import {COUNT_ACHIEVEMENTS} from './types'

const initialState = {
  recreational: 0,
  social: 0,
  education: 0,
  music: 0,
  relaxation: 0
}

export const achievements = (state = initialState, action) => {
  switch (action.type) {
       
    case COUNT_ACHIEVEMENTS :  
      if(action.payload.type==='recreational') return {
        ...state,
        recreational: state.recreational + 1
      }
      if(action.payload.type==='social') return {
        ...state,
        social: state.social + 1
      }
      if(action.payload.type==='education') return {
        ...state,
        education: state.education + 1
      }
      if(action.payload.type==='music') return {
        ...state,
        music: state.music + 1
      }
      if(action.payload.type==='relaxation') return {
        ...state,
        relaxation: state.relaxation + 1
      }
      
    default:
      return state;      
  } 
}

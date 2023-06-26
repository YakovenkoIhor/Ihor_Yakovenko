import {combineReducers} from "redux";

import {events} from './ideas/reducer';
import {myListIdea} from './myListIdeas/reducer';
import {achievements} from "./achievement/reducer"
import {completed} from "./comletedChallenges/reducer"


const rootReducer = combineReducers({
  events,
  myListIdea,
  achievements,
  completed
});

export default rootReducer;

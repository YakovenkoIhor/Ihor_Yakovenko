import React from 'react';
import {connect} from "react-redux";

import IdeaCards from "./ideaCards"
import IdeasInMyList from "./ideasInMyList"
import Achievements from "./achievements"
import CompletedChallenges from "./completedChallenges"

const Home = () => {
   
    return(
        <div>
            <h1>Todo</h1>
            <IdeaCards />
            <IdeasInMyList/>
            <Achievements/>
            <CompletedChallenges/>           
        </div>
    )
}

export default connect(null, null)(Home)
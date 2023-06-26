import React from 'react';

import {connect} from "react-redux";
import CountSocial from "./countSocial"
import CountEducation from "./countEducation"
import CountRecreational from "./countRecreational"
import CountRelaxation from "./countRelaxation"
import CountMusic from "./countMusic"
import {selectCountAchievements} from '../../store/achievement/selectors'

const Achievements = () => {
        
    return(       
        <>
            <h2>Achievements</h2>
            <div
            style={{
                display: 'flex',
                justifyContent: 'space-around',
            }}
            >
                <CountEducation/>
                <CountSocial/>
                <CountRelaxation/>
                <CountRecreational/>
                <CountMusic/>
            </div>       
        </>
    )
}

export default connect(null, null)(Achievements)
import React from "react";
import { connect } from "react-redux";

import {selectCountAchievements} from "../../../store/achievement/selectors"
 
const CountRelaxation = ({count}) => {
    if (count.relaxation!==0){
        return (
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <div 
                style={{
                        width: '50px',
                        background: 'pink',
                        borderRadius: '25px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                }}
                >
                    {count.relaxation}
                </div>
                <div>Relaxation</div>
            </div>          
        )
    }
}

const mapStateToProps = state => ({
    count: selectCountAchievements(state)
})

export default connect(mapStateToProps, null)(CountRelaxation)
import React from "react";
import { connect } from "react-redux";

import {selectCountAchievements} from "../../../store/achievement/selectors"
 
const CountRecreational = ({count}) => {
    if (count.recreational!==0){
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
                    {count.recreational}
                </div>
                <div>Recreational</div>
            </div>          
        )
    }
    
}

const mapStateToProps = state => ({
    count: selectCountAchievements(state)
})

export default connect(mapStateToProps, null)(CountRecreational)
import React from "react";
import { connect } from "react-redux";

import {selectCountAchievements} from "../../../store/achievement/selectors"
 
const CountMusic = ({count}) => {
    if (count.music!==0){
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
                    {count.music}
                </div>
                <div>Music</div>
            </div>           
        )
    }
}

const mapStateToProps = state => ({
    count: selectCountAchievements(state)
})

export default connect(mapStateToProps, null)(CountMusic)
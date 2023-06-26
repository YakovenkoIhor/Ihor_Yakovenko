import React from 'react'
import {connect} from "react-redux";

import {selectAddCardInMyList} from "../../store/myListIdeas/selectors"
import {setCountAchievement} from "../../store/achievement/actions"

import { Carousel, Card } from 'antd'; 

const IdeasInMyList = ({ideas, setCountAchievement, }) => {
  
    
    const onChange = (ideas) => {
        console.log(ideas)
      }
    return (
        <>
            <h2>Ideas in my list</h2>

            <Carousel 
                afterChange={onChange} 
                slidesToShow={2} 
                adaptiveHeight={true}
            >
            {ideas.map(({id, value}) => (

                <div key={id}>
                    
                    <button
                    style={{
                        background: 'none',
                        border: 'none',
                    }}
                    onClick={() => setCountAchievement(value)}
                    >
                        <Card
                            title={value.type}
                            bordered={false}
                            style={{
                            width: 300,
                            height: 175
                            }}
                        >
                            <p>{value.activity}</p>
                        </Card>
                    </button>
                </div>
            ))}
            </Carousel>
        </>
    )
}

const mapStateToProps = state => ({
    ideas: selectAddCardInMyList(state),
})
const mapDispatchToProps = {
    setCountAchievement,   
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeasInMyList)
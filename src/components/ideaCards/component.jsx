import React from "react";
import { connect } from "react-redux";

import useGetData from "../../hooks/useGetData";
import {urlRandom} from "../../url/url"
import {setRandom} from "../../store/ideas/actions"
import {selectRandom} from "../../store/ideas/selectors"
import {setCardInMyList} from "../../store/myListIdeas/actions"
import { Card } from 'antd';
 
const IdeaCards = ({setRandom, cards, setCardInMyList }) => {
    useGetData(urlRandom, setRandom)
    useGetData(urlRandom, setRandom)
    useGetData(urlRandom, setRandom)
    useGetData(urlRandom, setRandom)
    return (
        <>
            <h2>Choose fresh ideas to do</h2>

            <ul 
            style={{
                listStyleType: 'none',
                display: 'flex',
                justifyContent: 'space-around'

            }}
            >
            {cards.map(({id, value}) => (
                <li key={id}>
                    <button
                    style={{
                        background: 'none',
                        border: 'none'
                    }}
                    
                    onClick={() => setCardInMyList(value)}
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
                </li>
            ))}
            </ul>          
        </>
    )
}

const mapStateToProps = state => ({
    cards: selectRandom(state)
})
const mapDispatchToProps = {
    setRandom,
    setCardInMyList
}
export default connect(mapStateToProps, mapDispatchToProps)(IdeaCards)
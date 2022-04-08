import React, {useState} from "react";

import {connect} from 'react-redux'

import './jokeItem.scss';




const JokeItem = ({item, dispatch}) => {

    const [showPunch, setShowPunch] = useState(false)

    const show = () =>{
        setShowPunch(!showPunch)
    }

    return(
        <div key={item.id}>
            <div>
                <div>{item.setup}</div>
                {
                    showPunch?
                <div>{item.punchline}</div> :
                null
                }
                <button onClick={show}>so what?</button>
            </div>
            <button onClick={()=>{dispatch({type:'TEST', payload: item})}}>add</button>
            <button onClick={()=>{dispatch({type:'REMOVE', payload: item.id})}}>remove</button>
        </div>
    )

}

export default connect(null)(JokeItem)
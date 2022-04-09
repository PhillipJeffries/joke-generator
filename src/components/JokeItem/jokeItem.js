import React, {useState} from "react";

import {connect} from 'react-redux'

import './jokeItem.scss';




const JokeItem = ({item, dispatch, className}) => {

    const [showPunch, setShowPunch] = useState(false)

    const show = () =>{
        setShowPunch(!showPunch)
    }

    return(
        <div className={`joke-item ${className}`} key={item.id}>
            <button className="add-button" onClick={()=>{dispatch({type:'ADD_JOKE', payload: item})}}>add</button>
            <div>
                <div>{item.setup}</div>
                {
                    showPunch?
                <div>{item.punchline}</div> :
                null
                }
                <button onClick={show}>{showPunch ? "thank you" : "so what?"}</button>
            </div>
            <div>
                <button className="add-button" onClick={()=>{dispatch({type:'ADD_JOKE', payload: item})}}>add</button>
                <button className="delete-button" onClick={()=>{dispatch({type:'REMOVE', payload: item.id})}}>remove</button>

            </div>
        </div>
    )

}

export default connect(null)(JokeItem)
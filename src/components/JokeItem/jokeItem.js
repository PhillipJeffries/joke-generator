import React, {useState} from "react";

import {connect} from 'react-redux'

import './jokeItem.scss';




const JokeItem = ({type="random", item, dispatch}) => {

    const [showPunch, setShowPunch] = useState(false)

    const [added, setAdded] = useState(false)

    const show = () =>{
        setShowPunch(!showPunch)
    };

    const addJokeToList = (item) => {
        dispatch({type:'ADD_JOKE', payload: item});
        setAdded(true);

    }

    if(type === "random"){
        return(
            <div className={`joke-item-container`} key={item.id}>
                <div className="joke-item-flex">
                    <div className="joke-item-content">
                        <div>{item.setup}</div>
                        {
                            showPunch ?
                        <div>{item.punchline}</div> :
                        null
                        }
                    </div>
                    <div>
                        <button className={!added ? "joke-item-button add-button" : "joke-item-button add-button added"} onClick={added ? null : ()=>{addJokeToList(item)}}>add</button>
        
                    </div>
                </div>
                <button className="show-punch-button" onClick={show}>{showPunch ? "thank you" : "go on..."}</button>
                
            </div>
        )
    }
    if(type="added"){
        return(
            <div className={`joke-item-container`} key={item.id}>
                <div className="joke-item-flex">
                    <div className="joke-item-content">
                        <div>{item.setup}</div>
                        {
                            showPunch ?
                        <div>{item.punchline}</div> :
                        null
                        }
                    </div>
                    <div>
                        <button className="joke-item-button delete-button" onClick={()=>{dispatch({type:'REMOVE_ADDED', payload: item.id})}}>remove</button>
                    </div>
                </div>
                    <button className="show-punch-button" onClick={show}>{showPunch ? "thank you" : "go on..."}</button>
            </div>
        )
    }

}

    

export default connect(null)(JokeItem)
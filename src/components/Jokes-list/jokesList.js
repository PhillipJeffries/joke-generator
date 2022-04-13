import React, {useEffect, useState} from "react";

import {connect} from 'react-redux';


import JokeItem from "../JokeItem/jokeItem";

import './jokesList.scss'

const JokesList = ({randomTen, dispatch}) => {

    const [state, setState] = useState([])

    useEffect(() => {
        setState(randomTen)
    }, [randomTen]);
    

    return(
        <div className="jokes-list-container">
            <h1 className="jokes-list-title">jokes from internet</h1>
            <div>
                {
                    state ?
                    state.map((item) => {
                        return(
                    
                                
                                <JokeItem key={item.id} type="random" className={''} item={item}/>
                        
                        )
                    }):
                    null
                }
            </div>
        </div>
    )
}

const mapStateToProps = store => {
    const {randomTen} = store.fetchReducer
    return {randomTen}
}


export default connect(mapStateToProps, null)(JokesList)
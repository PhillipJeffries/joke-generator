import React, {useEffect, useState} from "react";

import {connect} from 'react-redux';

import {fetchRandomTen} from '../../redux/reducers/';

import JokeItem from "../JokeItem/jokeItem";



const JokesList = ({randomTen, dispatch}) => {

    const [state, setState] = useState([])

    useEffect(() => {
        setState(randomTen)
    }, [randomTen]);
    
    console.log('state', randomTen)

    return(
        <div>
            <h1>Jokes</h1>
            <div>
                {
                    state ?
                    state.map((item) => {
                        return(
                    
                                
                                <JokeItem className={''} item={item}/>
                        
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
    console.log(randomTen)
    return {randomTen}
}


export default connect(mapStateToProps, null)(JokesList)
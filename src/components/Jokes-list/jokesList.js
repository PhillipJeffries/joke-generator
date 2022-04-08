import React, {useEffect, useState} from "react";

import {connect} from 'react-redux';

import {fetchRandomTen} from '../../redux/reducer';


const JokesList = ({randomTen}) => {

    const [state, setState] = useState([])

    useEffect(() => {
        setState(randomTen)
    }, [randomTen]);
    
    console.log('state', randomTen)

    return(
        <div>
            <h1>Jokes</h1>
            <ul>
                {
                    state ?
                    state.map((item) => {
                        return(
                            <li key={item.id}>
                                <span>{item.setup}</span>
                            </li>
                        )
                    }):
                    null
                }
            </ul>
        </div>
    )
}

const mapStateToProps = store => {
    console.log(store)
    const {randomTen} = store
    return {randomTen}
}


export default connect(mapStateToProps, null)(JokesList)
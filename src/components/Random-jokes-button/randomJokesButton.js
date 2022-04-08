import React from "react";

import {connect} from 'react-redux';

import './randomJokesButton.scss'

import { fetchRandomTen } from "../../redux/reducers/fetchReducer";

console.log(fetchRandomTen)

const RandomJokesButton = ({dispatch}) => {
    return(
        <button onClick={()=>fetchRandomTen(dispatch)}>ten random jokes</button>
    )

};




export default connect(null)(RandomJokesButton)
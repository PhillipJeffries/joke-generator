import React from "react";

import {connect} from 'react-redux'

import {useState, useEffect} from 'react';

import jimFace from '../../assets/jimloader.png'
import "./loader.scss";


const Loader = ({dispatch}) => {
    dispatch({type: 'TEST'})
    console.log('loader')
    return(
        <div>
            <img src={jimFace} alt="loading"/>
        </div>
    )
}


export default connect(null)(Loader);
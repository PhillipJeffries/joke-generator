import React from "react";

import {connect} from 'react-redux'

import {useState, useEffect} from 'react';

import jimFace from '../../assets/jimloader.png'
import "./loader.scss";


const Loader = () => {
    
   
    
    return(
        <div className="loader">
            <img src={jimFace} alt="loading" />
        </div>
    )
}


export default Loader;
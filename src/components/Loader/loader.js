import React from "react";

import {useState, useEffect} from 'react';

import jimFace from '../../assets/jimloader.png'
import "./loader.scss";


const Loader = () => {
    return(
        <div>
            <img src={jimFace} alt="loading"/>
        </div>
    )
}


export default Loader;
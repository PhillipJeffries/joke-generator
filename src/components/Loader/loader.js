import React from "react";

import {connect} from 'react-redux'

import {useState, useEffect} from 'react';

import jimFace from '../../assets/jimloader.png'
import "./loader.scss";


const Loader = () => {
    
    const [degrees, setDegrees] = useState({})
    const [scale, setScale] = useState({})
    const [position, setPosition] = useState({})

    useEffect(()=>{
        document.addEventListener("mousemove", (e)=>{
            setDegrees(e.pageX/3)
            if(e.pageY < 50){
                setScale(.5)
            }else
            if(e.pageY > 120){
                setScale(1.2)
            }else{

                setScale(e.pageY/100)
            }
            setPosition(e.pageX)
        });
        return () => {
            console.log('cleanup');
            document.removeEventListener("mousemove", (e)=>{
                setDegrees(e.pageX/3)
                if(e.pageY < 50){
                    setScale(.5)
                }else
                if(e.pageY > 120){
                    setScale(1.2)
                }else{
    
                    setScale(e.pageY/100)
                }
                setPosition(e.pageX)
            });
        }
    },[])

    return(
        <div>
            <img src={jimFace} alt="loading" style={{transform: `translateX(${position}px) rotate(${degrees}deg) scale(${scale})`}}/>
        </div>
    )
}


export default Loader;
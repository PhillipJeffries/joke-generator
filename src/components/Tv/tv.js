import React, {useState} from "react";
import { connect } from "react-redux";

import tvContainer from '../../assets/tv/tvContainer.svg';
import displayOff from '../../assets/tv/displayOff.svg';
import displayOn from '../../assets/tv/displayOn.svg';

import Loader from '../Loader/loader'

import { fetchRandomTen } from "../../redux/reducers/fetchReducer";


import './tv.scss';

const Tv = ({children, click, showAddedJokes, tvOn, loading, dispatch}) => {
    //const [tvOn, setTvOn] = useState(false);

    //const [myListShow, setMyListShow] = useState(false);



    const tvButtonOnHandler = () => {
        if(!tvOn){
            fetchRandomTen(dispatch);
            dispatch({type: 'TV_TOGGLE'})
        }
        else{
            dispatch({type: 'RESET_RANDOM_TEN'})
            dispatch({type: 'TV_TOGGLE'})
        }
    };


       


    return (
        <div className="tv-container">
            <img className="tv-box" src={tvContainer} alt="tv"/>
            <div className="tv-display-container">
                <img className="tv-display" src={tvOn ? displayOn : displayOff} alt="display off"/>
                <div className="tv-text-container">
                    {loading ? <Loader/> : children}
                </div>
            </div>
            <div className="tv-buttons-container">
                <button className={tvOn ? "tv-button tv-button-pushed" : "tv-button"} onClick={tvButtonOnHandler}></button>
                <div className="button-title">on/off</div>
                <button className={tvOn ? "tv-button tv-random-button tv-button-pushed" : "tv-button tv-random-button"} onClick={ ()=>{!tvOn ? null : fetchRandomTen(dispatch)}}></button>
                <div className="button-title">random</div>
                <button className={tvOn && showAddedJokes? "tv-button tv-my-list-button tv-button-pushed" : "tv-button tv-my-list-button"} onClick={!tvOn ? null : click}></button>
                <div className="button-title">my list</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('tv', state)
    const {tvOn} = state.clientReducer
    const {loading} = state.fetchReducer
    return {tvOn, loading}
}


export default connect(mapStateToProps)(Tv)
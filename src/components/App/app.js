import React,{useState, useEffect} from "react";
import {connect} from 'react-redux';
import Loader from "../Loader/loader"
import JokesList from "../Jokes-list/jokesList"
import RandomJokesButton from "../Random-jokes-button/randomJokesButton";
import Categories from '../Categories/categories';
import AddedJokesList from '../AddedJokesList/addedJokesList';

import tv from '../../assets/tv.svg'

import Tv from '../Tv/tv'



import "./app.scss";
import categories from "../Categories/categories";




const App = ({loading, tvOn}) => { 

    const [showAddedJokes, setShowAddedJokes] = useState(false)
    
    const displayToggleHandler = () => {
        setShowAddedJokes(!showAddedJokes)
    }
    
    return(

            <div className="app">
                {/* {
                    loading ?
                    <Loader/>:
                    null
                } */}
                {/* <Categories/> */}
                {/* <RandomJokesButton/> */}
                {/* <JokesList/> */}
                {/* <Loader/> */}
                <Tv showAddedJokes={showAddedJokes} click={displayToggleHandler}  children={tvOn && showAddedJokes ? <AddedJokesList/> : <JokesList/>}/>
                
            </div>      

    )
};

const mapStateToProps = state => {
    console.log('app',state)
    const {tvOn} = state.clientReducer
    return {tvOn}
}

export default connect(mapStateToProps)(App);
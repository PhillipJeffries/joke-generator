import React,{useState, useEffect} from "react";
import {connect} from 'react-redux';
import Loader from "../Loader/loader"
import JokesList from "../Jokes-list/jokesList"
import RandomJokesButton from "../Random-jokes-button/randomJokesButton";
import Categories from '../Categories/categories';
import AddedJokesList from '../AddedJokesList/addedJokesList';




import "./app.scss";
import categories from "../Categories/categories";




const App = ({loading}) => { 


    
    return(

            <div className="app">
                <h1>Hello</h1>
                {/* {
                    loading ?
                    <Loader/>:
                    null
                } */}
                {/* <Categories/> */}
                <RandomJokesButton/>
                <JokesList/>
                <AddedJokesList/>
                <Loader/>
            </div>      

    )
};

const mapStateToProps = state => {
    console.log(state)
    const {loading} = state
    return {loading}
}

export default connect(mapStateToProps)(App);
import React,{useState, useEffect} from "react";
import {connect} from 'react-redux';
import JokesList from "../Jokes-list/jokesList"
import AddedJokesList from '../AddedJokesList/addedJokesList';



import Tv from '../Tv/tv'



import "./app.scss";





const App = ({tvOn}) => { 

    const [showAddedJokes, setShowAddedJokes] = useState(false)
    
    const displayToggleHandler = () => {
        setShowAddedJokes(!showAddedJokes)
    }
    
    return(

            <div className="app">
                <Tv showAddedJokes={showAddedJokes} click={displayToggleHandler}  children={tvOn && showAddedJokes ? <AddedJokesList/> : <JokesList/>}/>
            </div>      

    )
};

const mapStateToProps = state => {
    const {tvOn} = state.clientReducer
    return {tvOn}
}

export default connect(mapStateToProps)(App);
import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import jokesList from "../Jokes-list/jokesList";

import JokeItem from "../JokeItem/jokeItem";

import './addedJokesList.scss';


const AddedJokesList = ({addedJokes}) => {
    // const [jokesList, setJokesList] = useState([]);

    // useEffect(()=>{
    //     setJokesList(addedJokes)
    // },[addedJokes])

    // console.log(jokesList)

    

    return(
        <div>
            <h2>added</h2>
            {
                addedJokes.map((item)=>{
                    return(
                        <JokeItem className={"added-jokes"} item={item}/>
                    )
                })
            }
        </div>
    )
};


const mapStateToProps = state => {
    console.log('addedJokes', state)
    const {addedJokes} = state.clientReducer
    return {addedJokes}
}

export default connect(mapStateToProps)(AddedJokesList);
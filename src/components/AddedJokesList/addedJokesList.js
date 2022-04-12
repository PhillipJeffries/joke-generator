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
        <div className="added-jokes-list-container">
            <h2>my list of jokes</h2>
            <div>
                {
                    addedJokes.map((item)=>{
                        return(
                            <JokeItem type="added" item={item}/>
                        )
                    })
                }

            </div>
        </div>
    )
};


const mapStateToProps = state => {
    console.log('addedJokes', state)
    const {addedJokes} = state.clientReducer
    return {addedJokes}
}

export default connect(mapStateToProps)(AddedJokesList);
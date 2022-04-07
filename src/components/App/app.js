import React,{useState, useEffect} from "react";

import Loader from "../Loader/loader"
import JokesList from "../Jokes-list/jokesList"



import DataFetching from "../../dataFetch";
import { useFetch } from '../../utils/useFetch'

import reducer from '../../reducer';

import {Provider} from 'react-redux';

import {createStore} from "redux";


import "./app.scss";













const store = createStore(reducer);



const App = () => { 

    console.log('state',store.getState())

    
    return(
        <Provider store={store}>
            <div className="app">
                <h1>Hello</h1>
                <Loader/>
                <DataFetching/>
                <JokesList/>
            </div>

        </Provider>
            

    )
};

export default App;
import React from "react";
import Loader from "../Loader/loader"
import {useState, useEffect} from 'react';

import { useFetch } from '../../utils/useFetch'



import { HEROKU_JOKES } from "../../variables";


 
import "./app.scss";






const App = () => { 


    const [path, setPath] = useState('/jokes')
    const {loading, data} = useFetch(HEROKU_JOKES, path)
    console.log(loading, data)

    
    

    return(
        <div className="app">
            <h1>Hello</h1>
            {/* <Loader/> */}
            <ul>
                {   
                    loading ? <Loader/> : 
                    data.map((item, i)=>{
                        

                        return(
                            <li key={i}>
                                <p>{item.setup}</p> 
                                {/* <p>{showPunch ? item.punchline : ''}</p> */}
                            </li>
                        )
                    })
                }
            </ul>
            

        </div>
    )
};

export default App;
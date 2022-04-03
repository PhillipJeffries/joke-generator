import React from "react";

import {useState, useEffect} from 'react';

import { useFetch } from '../../utils/useFetch'

import { JOKES_URL } from "../../variables";
import { GITHUB_USERS_URL } from "../../variables";

import { HEROKU_JOKES } from "../../variables";

import { NEW_JOKES } from "../../variables";
 
import "./app.scss";






const App = () => { 


    const [path, setPath] = useState('/jokes')
    const {loading, data} = useFetch(HEROKU_JOKES, path)
    console.log(loading, data)

    
    

    return(
        <div className="app">
            <h1>App</h1>
            <button onClick={()=>setPath("/jokes/programming")}>
                programming
            </button>
            <button onClick={()=>setPath("/jokes/general")}>
                general
            </button>
            <button onClick={()=>setPath("/jokes/knock-knock")}>
                knock-knock
            </button>
            <ul>
                {   
                    loading ? <h1>loading</h1> : 
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
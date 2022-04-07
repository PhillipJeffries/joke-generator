import React, {useEffect} from 'react';

const initialState = {
    loading: true,
    error: '',
    post: {}
}



const reducer = (state = initialState, action) => {
    //console.log(state, action);
    switch(action.type){
        case 'TEST':
            console.log("test")
            return state
        case 'FETCH_SUCCESS':
            console.log('fetch success')
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'something went erong'
            }
        default:
            return state
    }
    
}




export default reducer
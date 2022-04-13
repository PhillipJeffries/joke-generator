import axios from 'axios';

const initialState = {
    loading: false,
    data: [],
    error: '',
    randomTen: [],
    categories: []
}




export const fetchRandomTen = async (dispatch) => {
    dispatch({type:'FETCH_REQUEST_RANDOM_TEN'})
    let response = await fetch("https://obscure-temple-82254.herokuapp.com/random_ten");
    if(response.ok){
        const data = await response.json()
        dispatch({type: 'FETCH_SUCCESS_RANDOM_TEN', payload: data})
       
    } 
    else {
        dispatch({type: 'FETCH_FAIL_RANDOM_TEN'})
    }

}




const fetchReducer = (state = initialState, action) => {
    switch(action.type){
        case 'TEST':
            console.log("test")
            return state
        case 'FETCH_REQUEST_RANDOM_TEN':
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_SUCCESS_RANDOM_TEN':
            return {
                ...state,
                loading: false,
                randomTen: action.payload,
                error: ''
            }
        case 'FETCH_FAIL_RANDOM_TEN':
            return {
                ...state,
                loading: false,
                error: action.payload,
                randomTen: []
            }
        case 'RESET_RANDOM_TEN':
            return {
                ...state, randomTen: []
            }
        case 'REMOVE':
            return {
                ...state, randomTen: state.randomTen.filter(joke => joke.id !== action.payload)
            }
        default:
            return state
    }
    
}
           
                




export default fetchReducer
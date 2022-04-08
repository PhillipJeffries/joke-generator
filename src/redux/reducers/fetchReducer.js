import axios from 'axios';

const initialState = {
    loading: false,
    data: [],
    error: '',
    randomTen: [],
    categories: []
}



// export const fetchRandomTen = () => {
//     return (dispatch) => {
//         dispatch({type: 'FETCH_REQUEST_RANDOM_TEN'})
//         axios
//             .get('https://jsonplaceholder.typicode.com/users')
//             .then(response => {
//             // response.data is the users
//             const data = response.data
//             dispatch({type:'FETCH_SUCCESS_RANDOM_TEN',payload:data})
//             })
//             .catch(error => {
//             // error.message is the error message
//             dispatch({type:'FETCH_FAIL_RANDOM_TEN', payload: error.message})
//             })
//     }
// }

export const fetchRandomTen = async (dispatch) => {
    dispatch({type:'FETCH_REQUEST_RANDOM_TEN'})
    let response = await fetch("https://obscure-temple-82254.herokuapp.com/random_ten");
    //console.log('headers', response)
    if(response.ok){
        // alert(response.headers.get('Content-Type'))
        const data = await response.json()
        dispatch({type: 'FETCH_SUCCESS_RANDOM_TEN', payload: data})
       
    } 
    else {
        console.log('error', response.status)
        dispatch({type: 'FETCH_FAIL_RANDOM_TEN'})
    }

}




const fetchReducer = (state = initialState, action) => {
    switch(action.type){
        case 'TEST':
            console.log("test")
            return state
        case 'FETCH_REQUEST_RANDOM_TEN':
            console.log('getting random ten')
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
        case 'REMOVE':
            console.log('remove')
            return {
                ...state, randomTen: state.randomTen.filter(joke => joke.id !== action.payload)
            }
        default:
            return state
    }
    
}
           
                




export default fetchReducer
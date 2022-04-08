const initialState = {
    addedJokes: [],
    randomTen: [],
}

if(localStorage.jokes){
    initialState.addedJokes = JSON.parse(localStorage.jokes)
}



const clientReducer = (state = initialState, action) => {
    switch(action.type){
        case 'TEST':
            console.log("test", action.payload)
            let localJokes = [...state.addedJokes, action.payload]
            window.localStorage.setItem('jokes', JSON.stringify(localJokes))
            console.log('local',JSON.parse(localStorage.jokes).length)
            return {
                ...state, addedJokes: [...state.addedJokes, action.payload]
            }
        case 'REMOVE':
            console.log('remove')
            return {
                ...state, addedJokes: state.addedJokes.filter(joke => joke.id !== action.payload)
            }
        default:
            return state
    }
    
}
           
                




export default clientReducer
const initialState = {
    addedJokes: [],
    randomTen: [],
}

if(localStorage.jokes){
    initialState.addedJokes = JSON.parse(localStorage.jokes)
}



const clientReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_JOKE':
            console.log("test", action.payload)
            let localJokes = [...state.addedJokes, action.payload]
            window.localStorage.setItem('jokes', JSON.stringify(localJokes))
            console.log('local',JSON.parse(localStorage.jokes).length)
            return {
                ...state, addedJokes: [...state.addedJokes, action.payload]
            }
        case 'REMOVE':
            console.log('remove')
            let newAddedJokes = state.addedJokes.filter(joke => joke.id !== action.payload);
            window.localStorage.setItem('jokes', JSON.stringify(newAddedJokes))
            return {
                ...state, addedJokes: newAddedJokes
            }
        default:
            return state
    }
    
}
           
                




export default clientReducer
const initialState = {
    tvOn: false,
    addedJokes: [],
    randomTen: [],
}

if(localStorage.jokes){
    initialState.addedJokes = JSON.parse(localStorage.jokes)
}



const clientReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_JOKE':
            console.log("add to list", action.payload)
            let localJokes = [...state.addedJokes, action.payload]
            window.localStorage.setItem('jokes', JSON.stringify(localJokes))
            console.log('local',JSON.parse(localStorage.jokes).length)
            for(let i=0;i<state.addedJokes.length; i++){
                console.log("lj", localJokes[i])
                for(let j=0; j < state.localJokes; j++){
                    console.log("added", addedJokes[j])
                }
            }
            return {
                ...state, addedJokes: [...state.addedJokes, action.payload]
            }
        case 'LIKE':
            return state
        case 'REMOVE_ADDED':
            console.log('remove')
            let newAddedJokes = state.addedJokes.filter(joke => joke.id !== action.payload);
            window.localStorage.setItem('jokes', JSON.stringify(newAddedJokes))
            return {
                ...state, addedJokes: newAddedJokes
            }
        case 'TV_TOGGLE':
            let toggleTv = !state.tvOn
            
            return {
                ...state, tvOn : toggleTv
            }
        

        default:
            return state
    }
    
}
           
                




export default clientReducer
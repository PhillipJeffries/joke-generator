import React from 'react';

import {connect} from 'react-redux';

const DataFetching = ({dispatch, loading, data}) => {
    const getData = async () => {
        let response = await fetch("https://obscure-temple-82254.herokuapp.com/jokes");
        //console.log('headers', response)
        if(response.ok){
            // alert(response.headers.get('Content-Type'))
            const data = await response.json()
            dispatch({type: 'FETCH_SUCCESS', payload: data})
           
        } 
        else {
            console.log('error', response.status)
            dispatch({type: 'FAIL'})
        }

    }

    React.useEffect(() => {
        getData()
    }, []);
    console.log('loading', loading, data)
    return (
        <div>
            {loading ? 'loading' : null}
        </div>
    )
}


const mapStateToProps = (store) => {
    const {loading, data} = store;
    return {loading, data}
}

export default connect(mapStateToProps)(DataFetching);
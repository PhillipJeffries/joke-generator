import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getData = async () => {
        let response = await fetch(url);
        //console.log('headers', response)
        if(response.ok){
            // alert(response.headers.get('Content-Type'))
            const data = await response.json()
            setData(data)
            setLoading(false)
        } 
        else {
            console.log('error', response.status)
        }

    }

    useEffect(() => {
        getData()
    }, []);
    return {loading, data}
};
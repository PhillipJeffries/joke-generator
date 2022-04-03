import { useState, useEffect } from 'react';

export const useFetch = (url, path) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getData = async () => {
        let response = await fetch(`${url}${path}`);
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
    }, [path]);
    return {loading, data}
};
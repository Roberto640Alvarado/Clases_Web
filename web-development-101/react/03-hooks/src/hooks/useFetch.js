import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [ response, setResponse ] = useState({ status: 'loading', data: null });

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setResponse({
            status: 'complete',
            data
        }))
    }, [url])

    return response;
}

export default useFetch;
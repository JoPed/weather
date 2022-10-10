import { useState, useEffect } from "react";

const UseFetch = (url)=>{
    
    const [data, setData] = useState(null);

    useEffect(() =>{

        fetch(url, {
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            }
        })
        .then(res => res.json())
        .then(data =>setData(data));

    }, [url]);
    return [data];
}
export default UseFetch;
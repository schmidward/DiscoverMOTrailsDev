import React, { useEffect, useState } from 'react';
import axios from "../../api/axios";

function SecurePage() {
    const [data, setData] = useState(null);    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const response =  
        axios.get('/secure', {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        }
    );
    console.log(response);
    return setData(response.data);

    }, []);

    if (!data) {
        return <p>Loading...</p>
    }
    
    return (
        <div>
            <h1>Protected page</h1>
            <p>{data}</p>
        </div>
    )
}

export default SecurePage;
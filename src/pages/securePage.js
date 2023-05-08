import React, { useEffect, useState } from 'react';
// import { redirect } from 'react-router-dom';
// import { getProtectedResource } from '../resources/loginFunctions';

function SecurePage() {
    const [data, setData] = useState(null);    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const secureApi = 'http://localhost:8080/secure';

    useEffect(() => {
        fetch('http://localhost:8080/secure')
        .then((response) => console.log(response))
        .catch((err) => {
            console.log(err.message);
        });
        
        
        ;
    }, []);

    // if (!response) {
    //     return <p>Loading...</p>
    // }
    
    // return (
    //     <div>
    //         <h1>Protected page</h1>
    //         <p>{response}</p>
    //     </div>
    // )
}

export default SecurePage;
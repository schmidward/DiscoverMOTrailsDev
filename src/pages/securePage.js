import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getProtectedResource } from '../resources/loginFunctions';

function SecurePage() {
    const [data, setData] = useState(null);
    const history = useHistory();
    const secureApi = 'http://localhost:8080/secure';

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getProtectedResource(secureApi);
                setData(response);
            } catch (error) {
                //If the request fails, navigate to the login page
                history.push('./pages/login.js');
            }
        }
        fetchData();
    }, [history]);

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
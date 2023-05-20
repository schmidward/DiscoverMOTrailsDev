import React from 'react';
import authCheck from '../../utils/authCheck';

function Home() {
authCheck();
    return (
        <>
        <h1>Hello World!</h1>
        </>
        );
}

export default Home;
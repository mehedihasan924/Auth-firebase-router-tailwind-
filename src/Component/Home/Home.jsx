import React, { useContext } from 'react';
import { AuthContext } from '../Provaider/AuthProvaiders';

const Home = () => {
    const user=useContext(AuthContext)
    return (
        <div>
            <h1> This is Home { user &&  <p>{ user.displayName} </p> }</h1>
        </div>
    );
};

export default Home;
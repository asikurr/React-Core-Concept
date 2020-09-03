import React, { useContext } from 'react';
import HomeChildOne from './HomeChildOne';
import { constValue } from './StateIndex';

const StateHome = () => {
    const count = useContext(constValue);
    return (
        <div>
            <h1>State Home {count}</h1>
            <HomeChildOne/>
        </div>
    );
};

export default StateHome;
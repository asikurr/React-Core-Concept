import React, { useState, createContext } from 'react';
import StateHeader from './StateHeader';
import StateHome from './StateHome';
import StateShipment from './StateShipment';

export const constValue = createContext();
const StateIndex = () => {
    const [categories, setCategories] = useState('laptop')

    return (
        <constValue.Provider value={[categories, setCategories]}>
            <p>{categories}</p>
            <StateHeader/>
            <StateHome/>
            <StateShipment/>
        </constValue.Provider>
    );
};

export default StateIndex;
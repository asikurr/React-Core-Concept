import React, {useContext} from 'react';
import { constValue } from './StateIndex';

const StateShipment = () => {
    const [count, setCount ] = useContext(constValue)
    return (
        <div>
            <h1>State StateShipment : {count}</h1>
            <button onClick={() => setCount(count + 2)}> Update State </button>
        </div>
    );
};

export default StateShipment;
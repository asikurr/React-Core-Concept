import React, { useContext } from 'react';
import { constValue } from './StateIndex';


const HomeChildTwo = (props) => {
    const {name} = props.pd
    return (
        <div>
            <p>Product Name : {name}</p>
            
        </div>
    );
};

export default HomeChildTwo;
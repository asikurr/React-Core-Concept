import React from 'react';

const CartPoulation = (props) => {
    const cart = props.cart

    // let populationTotal = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const populationNumber = cart[i];
    //     populationTotal = populationTotal + populationNumber.population;
        
    // }
    const total = cart.reduce((total , cart)=> total + cart.population ,0)
    return (
        <div className="center">
            <h2 >Addes Country : {cart.length}</h2>
            <p>Total Popolation : {total}</p>
        </div>
    );
};

export default CartPoulation;
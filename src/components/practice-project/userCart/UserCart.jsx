import React from 'react';

const UserCart = (props) => {
    const cart = props.userCart
    const totalSalary = cart.reduce((total , cart) => total + cart.salary ,0)
    return (
        <div>
             <h4>Friend Added : {cart.length}</h4>
             <p>Total Friend Salary : {totalSalary}</p>
        </div>
    );
};

export default UserCart;
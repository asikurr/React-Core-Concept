import React, {useState} from 'react';
import data from '../../../jsonData/userData.js'
import UserDetails from '../userdetails/UserDetails.jsx';
import UserCart from '../userCart/UserCart.jsx';

const User = () => {
    const [user, setUser] = useState(data)
    // console.log(user)
    const [userCart, setUserCart] = useState([])

    const addUserHandler = (user) => {
        const newUser = [...userCart , user]
        setUserCart(newUser);
    }

    return (
        <div className="cardList">
            <div className="center">
                <h3>Total User : {user.length}</h3>
                <UserCart userCart={userCart}/>
            </div>
            {
                user.map(user => <UserDetails addUserHandler={addUserHandler} key={user.id} user={user}/> )
            }
        </div>
    );
};

export default User;
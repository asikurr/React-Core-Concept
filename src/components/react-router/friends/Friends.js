import React from 'react';
import './friends-style.css'
import { Link, useHistory } from 'react-router-dom';

const Friends = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();

    // const handleClick = (friendId) => {
    //     history.push(`friends/${friendId}`)
    // }

    return (
        <div className="friend">
            <h2>Friends Name : {name}</h2>
            <h4>Email : {email}</h4>
            {/* <Link to={`friends/${id}`}><button>Friend details id is {id}</button></Link>  */}
            <button onClick={()=> history.push(`friends/${id}`)}>Show Details</button>
        </div>
    );
};

export default Friends;
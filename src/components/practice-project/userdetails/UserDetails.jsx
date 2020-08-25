import React from 'react';

const UserDetails = (props) => {
    const {name, email, salary, imgUrl} = props.user;
    const addUserHandler = props.addUserHandler;
    return (
        <div className="card">
            <img src={imgUrl} height="200" width="200" alt=""/>
             <h4>Name : {name}</h4>
             <p>Salary : {salary}</p>
             <p>Email : {email}</p>

             <button onClick={()=>addUserHandler(props.user)}>Add Friend</button>
        </div>
    );
};

export default UserDetails;
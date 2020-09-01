import React,{useEffect,useState} from 'react';
import {useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friendDetails, setFriendDetails] = useState({})
    useEffect(() => {
       fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
       .then(response => response.json())
       .then(data => setFriendDetails(data))
       
    }, [])
    return (
        <div>
            <h1>Friend details. {friendId}</h1>
            <p>Name : {friendDetails.name}</p>
            <p>Email : {friendDetails.email}</p>
            <p>Phone : {friendDetails.phone}</p>
            <p>Website : {friendDetails.website}</p>
        </div>
    );
};

export default FriendDetails;
import React , {useState, useEffect}from 'react';
import Friends from '../friends/Friends';
import './home-style.css'


const Home = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data => setUser(data))
    }, [])
    return (
        <div className="userStyle">
            <h1>Total User : {user.length}</h1>
            {
                user.map(friend => <Friends key={friend.id} friend={friend} /> )
            }
        </div>
    );
};

export default Home;
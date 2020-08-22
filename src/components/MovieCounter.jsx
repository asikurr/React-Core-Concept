import React, {useState, useEffect} from 'react'

function MovieCounter() {
    
    
    useEffect(() => {
       fetch('https://randomuser.me/api/?results=5')
       .then(res => res.json())
       .then(data => setUser(data.results))
       
    }, [])
    const [user, setUser] = useState([]);
    console.log(user)
    // const NayokName = [{name:'Josim uddin', age:55}, {name:'Bappa Raz',age:49}, {name:'Omar Sani',age:50}, {name:'Deep Jol',age:60}]
    return (
        <div>
        <CountsMovies/>
        {
           
            user.map(data => <Nayok key={data.dob.age.toString()} name={data.name.first +" "+data.name.last} age={data.dob.age} city={data.location.city}/> )
            
        }
           
        </div>
    )
}

function CountsMovies() {
    const [count, setCount] = useState(0)
    return(
        <div>
            <button onClick={()=> setCount(count + 1)}>Add Movies</button>
            <h3>Number Of Movies is - {count}</h3>
            <MovieDisplay num={count} />
            <MovieDisplay num={count + 5} />
            <MovieDisplay num={count + 10} />
            <MovieDisplay num={count + 15} />
        </div>
    )
}

function MovieDisplay(props) {
    return <h4>I already watched {props.num} Movies.</h4>
}

function Nayok(props) {
    const style = {
        border:'1px solid yellow',
        padding:"5px"
    }

    return(
        <div style={style}>
            <h3>Ami Nayok - {props.name}</h3>
            <p>I build movies from {props.age || 23} years old</p>
            <p>city- {props.city}</p>

        </div>
    )
}

export default MovieCounter


import React ,{useState,useEffect}from 'react'

function UseApi() {
    const productDetails = [
        {id:'1',name:'photoshop', price:'$220'},
        {id:'2',name:'Illustrator', price:'$350'},
        {id:'3',name:'Adobe Pr', price:'$420'},
        {id:'4',name:'Light Room', price:'$120'},
        {id:'5',name:'adobe XD', price:'$150'}
      ]
    return (
        <div>
            <CountNumber/>
            {
             productDetails.map(product=><AppProduct key={product.id} name={product.name} price={product.price}/>)
           }
          <User/>
        </div>
    )
}
function CountNumber(){
    const [count, setCount] = useState(0);
    // const handleincrease = () => {
    //   const newCount = count + 1;
    //   setCount(count + 1);
    // };
    return (
     <div>
        <h1>Count: {count} </h1>
      <button onClick={()=>setCount(count + 1)}>Increase</button>
      <button onClick={()=>setCount(count>0?count-1:count)}>Decrease</button>
     </div>
    )
  }
  
  function User() {
    const productStyle = {
      backgroundColor:'lightgrey',
      height:'12rem',
      width:'10rem',
      color:'#999',
     
    }
    const [Users, setUsers] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    }, [])
    return(
      <div>
        <h1>Dynamic user</h1>
       {
        Users.map(user => 
        <div key={user.id} style={productStyle}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
        </div>)
        }
      </div>
    )
  }
  
  function AppProduct(props) {
    
    const productStyle = {
      backgroundColor:'lightgrey',
      height:'12rem',
      width:'10rem',
      color:'#999',
    }
    const {name, price} = props;
    return (
      <div style={productStyle}>
        <h2 >{name}</h2>
        <h4>{price} </h4>
        <button>Buy Now</button>
      </div>
    )
  }
export default UseApi


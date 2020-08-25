import React, {useState, useEffect} from 'react';
import Country from '../country/Country';
// import data from '../../jsonData/AllCountryInfo'
import CartPoulation from '../Country-population/CartPoulation'

const CountryApi = () => {
    const [countries, setCountries] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
        .catch(e => console.log(e))
    },[]);
    const handlerAddCountry = (country) =>{
        // console.log(country.name);
        const newCart = [...cart, country]
        setCart(newCart)
    }
    return (
        <div>
            <h2 className="center">Total Country : {countries.length}</h2>
            <CartPoulation cart={cart}/>
        
            <div className="cardList">
                    {/* <p> Total country : {countries.length}</p>
                    <select id="cars">
                    {countries.map(country=> <option value={country.name}>{country.name}</option>)}
                    </select> */}
                    {
                        countries.map(country => <Country handlerAddCountry={handlerAddCountry} key={country.alpha3Code} country={country} />)
                    }

                
            </div>
        </div>
    );
};

export default CountryApi;


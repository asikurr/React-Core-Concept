import React from 'react';

const Country = (props) => {
    const { name, alpha2Code, capital, region, population, flag } = props.country;
    const handlerAddCountry = props.handlerAddCountry;
    // console.log(props.countryInfo)

    return (
            <div className="card">
                <h4>Country Name : {name} </h4>
                <p>Alpha Name : {alpha2Code}</p>
                <p>Capital : {capital}</p>
                <p>Region : {region}</p>
                <p>Population : {population}</p>
                <img src={flag} height="50" width="50" alt="" />
                <button style={{marginTop:'1rem'}} onClick={()=>handlerAddCountry(props.country)}>Add Country</button>
            </div>

    );
};

export default Country;
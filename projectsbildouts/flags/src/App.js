import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const[country,setCountries]=useState([]);
  const[error,setError]=useState(null);

  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      console.log(response.data);
    })
    .catch(error=>{
      setError(error.messgage);
      console.log("error",error);
    })

  },[]);
  

  return (
    <div className='mainwrapper'>
       {
        country.map(country=>(
          <div className="countrywrapper">
             <img
             src={country.flags.svg}
             alt={country.name.common}
             className="flag"
             />
             <p className='title'>{country.name.common}</p>
          </div>
        ))
       }
    </div>
  );
}

export default App;

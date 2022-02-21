import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import  countries  from "./countries.json";

function App() {

  const [countriesList , setCountriesList ] = useState(countries);
  
  return (
    <div className="App">
    <Navbar />
    
    <div className="container">
      <div className="row">
        <Routes>
          <Route path="/" element={<CountriesList countries={countriesList} />}/>
          <Route path="/countries/:alpha3Code" element={<CountryDetails countries={countriesList}/>}/>
        </Routes> 

      </div>
    </div>
  </div>
    );
}
export default App;

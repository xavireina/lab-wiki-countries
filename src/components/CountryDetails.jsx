import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const CountryDetails = props => {
   console.log("hi");
   const params = useParams()
   const country = props.countries.find(country => country.alpha3Code === params.alpha3Code)
   console.log(params)
   console.log(country)
   let flag = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`
   return (
		<div>
            <img src={flag} alt="" />
			<h1>{country.name.common}</h1>
            <p>Capital: <span>{country.capital}</span></p>
            <p>Area: <span>{country.area}</span> km<sup>2</sup></p>
            <p>Borders: 
                <ul>
                {country.borders.map(key => {
                    let border = props.countries.find(country => country.alpha3Code === key);
                    console.log(border)
                    return (
                     
                          <Link to={`/countries/${border.alpha3Code}`}>
                                <li>{border.name.official}</li>
                          </Link>
                      
                    ) 
                }
                  )}
                </ul> 
            </p>

		</div>
	)
}

export default CountryDetails
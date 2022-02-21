import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CountriesList = props => {
    if (!props.countries) return <></>
    let countriesList = props.countries.map(country => {

        let flag = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`
        return <>
            <Link to={`/countries/${country.alpha3Code}`}>
                <img src={flag} alt="" />
                <p>{country.name.official}</p>
            </Link>
        </>
    })

    return (
        <div>
            {countriesList}
        </div>
    )
}

export default CountriesList;
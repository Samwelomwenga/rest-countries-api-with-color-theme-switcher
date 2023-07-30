import React from 'react'
import Header from '../components/Header'
import CountryDetailes from '../components/CountryDetailes'
const CountryDetailesPage = ({countries,setCountries}) => {
  return (
    <div>
        <Header/>
        <CountryDetailes/>
        
    </div>
  )
}

export default CountryDetailesPage
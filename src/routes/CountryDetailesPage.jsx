import React from 'react'
import Header from '../components/Header'
import CountryDetailes from '../components/CountryDetailes'
const CountryDetailesPage = ({countries,setCountries}) => {
  return (
    <div className=' bg-very-dark-blue-dm text-white text-base'>
        <Header/>
        <CountryDetailes/>
        
    </div>
  )
}

export default CountryDetailesPage
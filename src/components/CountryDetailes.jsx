import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
const CountryDetailes = () => {
  return (
    <>
    <button className=' bg-dark-blue py-1 px-4 rounded shadow-md text-center'> <FontAwesomeIcon className=' pr-2' icon={faArrowLeftLong} /> Back</button>
    {/* <div> <img src={} alt={} /></div> */}
    <h2></h2>
    <div className=' my-7'>
        <p>Native Name:</p>
        <p>Population:</p>
        <p>Region:</p>
        <p>Sub Region:</p>
        <p>Capital:</p>
    </div>
        <div className=' mb-7'>
            <p>Top Level Domain:</p>
            <p>Currencies:</p>
            <p>Languages:</p>
        </div>
        <p>Border Countries:</p>
        <p className=' flex gap-3 mt-3'> <span className=' bg-dark-blue py-0.5 px-5 shadow-md rounded'>Netherlands</span><span className=' bg-dark-blue py-0.5 px-5'>France</span></p>
    </>
  )
}

export default CountryDetailes
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
const CountryDetailes = () => {
  const navigate=useNavigate();
  const handleButtonClick = () => {
    navigate(-1);
  }
  return (
    <div className=' px-6'>
    <button className=' bg-dark-blue py-1 px-4 rounded shadow-md text-center font-light my-8' onClick={handleButtonClick}> <FontAwesomeIcon className=' pr-2' icon={faArrowLeftLong} /> Back</button>
    {/* <div> <img src={} alt={} /></div> */}
    <h2 className=' font-semibold text-xl'>Belgium</h2>
    <div className=' my-7 grid gap-1.5'>
        <p>Native Name:<span></span></p>
        <p>Population:<span></span></p>
        <p>Region:<span></span></p>
        <p>Sub Region:<span></span></p>
        <p>Capital:<span></span></p>
    </div>
        <div className=' mb-7 grid gap-1.5'>
            <p>Top Level Domain:<span></span></p>
            <p>Currencies:<span></span></p>
            <p>Languages:<span></span></p>
        </div>
        <p>Border Countries:</p>
        <p className=' flex gap-3  pt-5 pb-8'> <span className=' bg-dark-blue py-0.5 px-5 shadow-md rounded'>Netherlands</span><span className=' bg-dark-blue py-0.5 px-5'>France</span></p>
    </div>
  )
}

export default CountryDetailes
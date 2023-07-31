import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Search
( {countries,setCountries}) {
  const [searchInput, setSearchInput] = useState('');
const handleInputChange = (event) => {
  setSearchInput(event.target.value);
  const filteredCountry = countries.filter(country => {
    return country.name.common.toLowerCase().match(searchInput.toLowerCase())
  })
  setCountries(searchInput.length > 0 ? filteredCountry : countries);
   }

  return (
      <>
      <div className=' relative my-4 shadow-md md:w-96 md:ml-10'>
      <FontAwesomeIcon className='absolute pl-5 top-1/2 -translate-y-1/2 border-none'  icon={faMagnifyingGlass} size="lg" style={{color: "#ffffff",}} />
          <input  value={searchInput} onChange={handleInputChange} className='  pl-14   w-full placeholder:text-left  border-none rounded-md bg-dark-blue py-3 ' type="text" placeholder='Search for a country...' />
      </div>
      </>
      
    )
}

export default Search;

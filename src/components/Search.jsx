import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Search
() {
  return (
      <>
      <div className='text-blue-950 relative my-4'>
      <FontAwesomeIcon className='absolute pl-5 top-1/2 -translate-y-1/2' t icon={faMagnifyingGlass} size="lg" style={{color: "#ffffff",}} />
          <input  className=' text-white  text-center w-full placeholder:text-white border-none rounded-md bg-dark-blue py-3 ' type="text" placeholder='Search for a country...' />
      </div>
      </>
      
    )
}

export default Search;

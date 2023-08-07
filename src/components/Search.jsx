import PropsTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Search({searchTerm,handleSearchCountries} ) {

  return (
      <>
      <div className=' relative my-4 shadow-md md:w-96 md:ml-10'>
      <FontAwesomeIcon className='absolute pl-5 top-1/2 -translate-y-1/2 border-none'  icon={faMagnifyingGlass} size="lg" style={{color: "#ffffff",}} />
          <input  value={searchTerm} onChange={(event)=>handleSearchCountries(event.target.value)} className='  pl-14   w-full placeholder:text-left  border-none rounded-md bg-dark-blue py-3 md:h-full' type="text" placeholder='Search for a country...' />
      </div>
      </>
      
    )
}
Search.propTypes = {
  searchTerm: PropsTypes.string,
  handleSearchCountries: PropsTypes.func,
}
Search.defaultProps = {
  searchTerm: '',
  handleSearchCountries: () => {},
}

export default Search;

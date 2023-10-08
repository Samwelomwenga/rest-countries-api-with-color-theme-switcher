import{Link}  from 'react-router-dom';
import PropsType from 'prop-types';
import Spinner from './Spinner';

function CountriesList({countries,loading,error}) {


  return (
    <>
    {loading && <Spinner/>}
    {error && <p>Something went wrong: {error.message}</p>}
      {countries.map((country,index) => (
        <Link key={index} to={`/${country.name.common}`}>
        <div className=" bg-white  dark:bg-dark-blue mb-7  rounded-md mx-10 shadow-md overflow-hidden md:mt-5" >
          <img className="w-full h-40" src={country.flags?.svg} alt={country.name} />
          <h2 className=" py-3 pl-5 font-extrabold">{country.name.common}</h2>
         <div className=" grid gap-0.5 pb-9 pl-5">
         <p>Population:{' '}<span className=" text-sm text-very-dark-grey dark:text-very-light-grey">{country.population.toLocaleString()}</span></p>
          <p>Region:{' '}<span className=" text-sm text-very-dark-grey dark:text-very-light-grey">{country.region}</span></p>
          <p>Capital:{' '}<span className=" text-sm text-very-dark-grey dark:text-very-light-grey">{country.capital}</span></p>
         </div>
        </div>
        </Link>

      ))}
    </>
  );
} 
CountriesList.propTypes={
  countries:PropsType.array.isRequired,
  loading:PropsType.bool.isRequired,
  error:PropsType.object,
}
CountriesList.defaultProps={
  countries:[],
  loading:false,
  error:null,
}




export default CountriesList;

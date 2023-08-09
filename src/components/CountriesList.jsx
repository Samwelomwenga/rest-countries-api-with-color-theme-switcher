import{Link}  from 'react-router-dom';
import PropsType from 'prop-types';
function CountriesList({ CountryList, error, loading}) {

  return (
    <>
    {loading && <p>Loading...</p>}
    {error && <p>Something went wrong: {error.message}</p>}
      {CountryList.map((country) => (
        <Link key={country.name.common} to={`/${country.name.common}`}>
        <div className=" bg-white  dark:bg-dark-blue mb-7 rounded-md mx-10 shadow-md overflow-hidden md:mt-5" >
          <img className="w-full" src={country.flags?.svg} alt={country.name} />
          <h2 className=" py-3 pl-5 font-extrabold">{country.name.common}</h2>
         <div className=" grid gap-0.5 pb-9 pl-5">
         <p>Population:{' '}<span className=" text-sm text-very-dark-grey dark:text-very-light-grey">{country.population}</span></p>
          <p>Region:{' '}<span className=" text-sm text-very-dark-grey dark:text-very-light-grey">{country.region}</span></p>
          <p>Capital:{' '}<span className=" text-sm text-very-dark-grey dark:text-very-light-greyy">{country.capital}</span></p>
         </div>
        </div>
        </Link>
      ))}
    </>
  );
}
CountriesList.propTypes = {
  CountryList: PropsType.arrayOf(
    PropsType.shape({
      name: PropsType.shape({ common: PropsType.string }),
      flags: PropsType.shape({ svg: PropsType.string }),
      population: PropsType.number,
      region: PropsType.string,
      capital: PropsType.string,
    })
  ),
  error: PropsType.shape({ message: PropsType.string }),
  loading: PropsType.bool,
};
CountriesList.defaultProps = {
  CountriesList: [],
  error: null,
  loading: false,
}

export default CountriesList;

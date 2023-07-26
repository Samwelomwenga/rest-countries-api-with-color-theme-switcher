import React, { useState, useEffect } from "react";
import fetchcountries from "../api/fetchCountries";
function CountriesList() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchcountries();
        if (!ignore) {
          console.log(ignore);
          setCountries(data);
          setLoading(false);
        }
      } catch (error) {
        if (!ignore) {
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      {countries.map((country) => (
        <div className=" bg-dark-blue mb-7 rounded-md mx-10 " key={country?.name?.common}>
          <img className=" rounded-t-md" src={country.flags.svg} alt={country.name} />
          <h2 className=" py-3 pl-5">{country.name.common}</h2>
         <div className=" grid gap-0.5 pb-9 pl-5">
         <p>Population:{' '}{country?.population}</p>
          <p>Region:{' '}{country?.region}</p>
          <p>Capital:{' '}{country?.capital}</p>
         </div>
        </div>
      ))}
    </>
  );
}

export default CountriesList;

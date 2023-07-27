import React, { useState, useEffect } from "react";
import fetchCountries from "./api/fetchCountries";
import Search from "./components/Search"
import RegionFilter from "./components/RegionFilter"
import Header from "./components/Header"
import CountriesList from "./components/CountriesList"
// import CountryDetailes from "./components/CountryDetailes"
function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCountries();
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
    <section className=" bg-very-dark-blue-dm px-4 text-white">
      <Header/>
    <Search/>
    <RegionFilter/>
    <CountriesList countries={countries}/>
    {/* <CountryDetailes/>   */}

    </section>
    </>
  )
}

export default App

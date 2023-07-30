import React, { useState, useEffect } from "react";
import FetchCountries from "./api/FetchCountries";
import Home from "./routes/Home";
import { Route,Routes } from "react-router-dom";
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
        const data = await FetchCountries();
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
    <Routes>
      <Route path="/" element={<Home countries={countries} setCountries={setCountries}/>}/>



    </Routes>
    </>
  )
}

export default App

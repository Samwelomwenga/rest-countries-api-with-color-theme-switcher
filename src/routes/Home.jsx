import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import CountriesList from "../components/CountriesList";
export const Home = () => {
  const [CountryList, setCountryList]=useState([]);
  const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);


   useEffect(()=>{
    let ignore=false;
    // const axiosParams={
    //   method: 'GET',
    //   url: '/all',
    //   params: {fields: 'name;capital;region;population;flags.svg;'}
    // }
    const fetchCountries= async () =>{
      setLoading(true);
      try {
          const response = await axios.get('https://restcountries.com/v3.1/all');
          if (!ignore) {
            setCountryList(response.data);
            setError(null);
            }
      } catch (error) {
          setError(error);
      }finally{
          setLoading(false);
      }
    }
    fetchCountries();
    
    return () =>{
      ignore=true;
    }

  },[])
  return (
    <main className=" text-white bg-very-dark-blue-dm">
      <Header />
      <section className=" px-4">
        <section className=" md:grid grid-cols-4">
          <CountriesList error={error} loading={loading} CountryList={CountryList}/>
        </section>
      </section>
    </main>
  );
};
export default Home;

// import { useState,} from "react";
import Header from "../components/Header";
import CountriesList from "../components/CountriesList";
import Search from "../components/Search";
import RegionFilter from "../components/RegionFilter";
import useFetch from "../utils/hooks/useFetch";

export const Home = () => {
const [{countries,loading,error},setUrl]=useFetch('https://restcountries.com/v3.1/all');

  // const [searchTerm, setSearchTerm] = useState("");
  // const [region, setRegion] = useState("");
  // const [error, setError] = useState(null);
  //  const [loading, setLoading] = useState(false);

  
// console.log(`${loading},\n,${error},\n,${countries}`)

  //  const handleSearchCountries = (searchValue) => {
  //   setSearchTerm(searchValue);
  //   if (!searchTerm) {
  //     setCountryList(CountryList);
  //   }else{
  //     const filteredCountries = CountryList.filter((country) =>
  //       country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  //     );
  //     setCountryList(filteredCountries);
  //   }
    
  //  }

  //  const handleSearchRegion = (searchValue) => {
  //   setRegion(searchValue);
  //   if (!region) {
  //     setCountryList(CountryList);
  //   }else{
  //     const filteredRegion = CountryList.filter((country) =>
  //       country.region.toLowerCase().includes(searchValue.toLowerCase())
  //     );
  //     setCountryList(filteredRegion);
  //   }
    
  //  }

  //  useEffect(()=>{
  //   let ignore=false;
 
  //   const fetchCountries= async () =>{
  //     setLoading(true);
  //     try {
  //         const response = await axios.get('https://restcountries.com/v3.1/all');
  //         if (!ignore) {
  //           setCountryList(response.data);
  //           setError(null);
  //           setLoading(false);
  //           }
  //     } catch (error) {
  //         setError(error);
  //     }finally{
  //         setLoading(false);
  //     }
  //   }
  //   fetchCountries();
    
  //   return () =>{
  //     ignore=true;
  //   }

  // },[])
  return (
    <main className=" text-very-dark-blue dark:text-white bg-very-light-grey dark:bg-very-dark-blue-dm ">
      <Header />
      <section className=" px-4">
       <div className=" md:flex justify-between">
       <Search />
        <RegionFilter setUrl={setUrl} />
       </div>
        <section className=" md:grid grid-cols-4">
          <CountriesList countries={countries} loading={loading} error={error}/>
        </section>
      </section>
    </main>
  );
};
export default Home;

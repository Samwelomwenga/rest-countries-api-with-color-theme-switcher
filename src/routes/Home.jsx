import { useState, useEffect,useRef,useCallback } from "react";
import axios from "axios";
import Header from "../components/Header";
import CountriesList from "../components/CountriesList";
import Search from "../components/Search";
import RegionFilter from "../components/RegionFilter";

export const Home = () => {
  const [CountryList, setCountryList]=useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
   const [hasMore, setHasMore] = useState(false);
   const [pageNumber, setPageNumber] = useState(1);

   const observer = useRef();
    const lastCountryElementRef = useCallback(node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    }, [loading, hasMore])


   const handleSearchCountries = (searchValue) => {
    setSearchTerm(searchValue);
    setPageNumber(1);
    if (!searchTerm) {
      setCountryList(CountryList);
    }else{
      const filteredCountries = CountryList.filter((country) =>
        country.name.common.toLowerCase().includes(searchValue.toLowerCase())
      );
      setCountryList(filteredCountries);
    }
    
   }

   const handleSearchRegion = (searchValue) => {
    setRegion(searchValue);
    if (!region) {
      setCountryList(CountryList);
    }else{
      const filteredRegion = CountryList.filter((country) =>
        country.region.toLowerCase().includes(searchValue.toLowerCase())
      );
      setCountryList(filteredRegion);
    }
    
   }

   useEffect(()=>{
    let ignore=false;
 
    const fetchCountries= async () =>{
      setLoading(true);
      try {
          const response = await axios.get('https://restcountries.com/v3.1/all');
          if (!ignore) {
            setCountryList(response.data);
            setError(null);
            setHasMore(response.data.length > 0);
            setLoading(false);
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

  },[hasMore])
  return (
    <main className=" text-very-dark-blue dark:text-white bg-very-light-grey dark:bg-very-dark-blue-dm ">
      <Header />
      <section className=" px-4">
       <div className=" md:flex justify-between">
       <Search handleSearchCountries={handleSearchCountries}  searchTerm={searchTerm}/>
        <RegionFilter region={region} handleSearchRegion={handleSearchRegion} />
       </div>
        <section className=" md:grid grid-cols-4">
          <CountriesList error={error} loading={loading} CountryList={CountryList} lastCountryElementRef={lastCountryElementRef} pageNumber={pageNumber}/>
        </section>
      </section>
    </main>
  );
};
export default Home;

import Header from "../components/Header";
import CountriesList from "../components/CountriesList";
import Search from "../components/Search";
import RegionFilter from "../components/RegionFilter";
import useFetch from "../utils/hooks/useFetch";

export const Home = () => {
const [{countries,loading,error},setUrl]=useFetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region');
console.log(countries)
  
  return (
    <main className=" text-very-dark-blue dark:text-white bg-very-light-grey dark:bg-very-dark-blue-dm ">
      <Header />
      <section className=" px-4">
       <div className=" md:flex justify-between">
       <Search setUrl={setUrl} />
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

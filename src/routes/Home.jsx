import React from 'react'
import Header from '../components/Header'
import RegionFilter from '../components/RegionFilter'
import CountriesList from '../components/CountriesList'
import Search from '../components/Search'
export const Home = ({countries,setCountries}) => {
  return (
    <div>
        <section className=" bg-very-dark-blue-dm px-4 text-white">
      <Header/>
    <Search countries={countries} setCountries={setCountries}/>
    <RegionFilter countries={countries} setCountries={setCountries}/>
    <CountriesList countries={countries}/>
    </section>
    </div>
  )
}
export default Home;
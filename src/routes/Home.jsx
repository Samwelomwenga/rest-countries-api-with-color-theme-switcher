import React from 'react'
import Header from '../components/Header'
import RegionFilter from '../components/RegionFilter'
import CountriesList from '../components/CountriesList'
import Search from '../components/Search'
export const Home = ({countries,setCountries}) => {
  return (
    <main  className=' text-white'>
      <Header/>
        <section className=" bg-very-dark-blue-dm px-4 text-white">
    <Search countries={countries} setCountries={setCountries}/>
    <RegionFilter countries={countries} setCountries={setCountries}/>
    <CountriesList countries={countries}/>
    </section>
    </main>
  )
}
export default Home;
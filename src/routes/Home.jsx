import React from 'react'
import Header from '../components/Header'
import RegionFilter from '../components/RegionFilter'
import CountriesList from '../components/CountriesList'
import Search from '../components/Search'
export const Home = ({countries,setCountries}) => {
  return (
    <main  className=' text-white bg-very-dark-blue-dm'>
      <Header/>
        <section className=" px-4">
    <Search countries={countries} setCountries={setCountries}/>
    <RegionFilter countries={countries} setCountries={setCountries}/>
    <CountriesList countries={countries}/>
    </section>
    </main>
  )
}
export default Home;
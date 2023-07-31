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
      <div className=' md:flex md:justify-between '>
    <Search countries={countries} setCountries={setCountries}/>
    <RegionFilter countries={countries} setCountries={setCountries}/>
      </div>
      <section className=' md:grid grid-cols-4'>
    <CountriesList countries={countries}/>
      </section>
    </section>
    </main>
  )
}
export default Home;
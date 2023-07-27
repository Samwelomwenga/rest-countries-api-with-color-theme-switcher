import Search from "./components/search"
import RegionFilter from "./components/RegionFilter"
import Header from "./components/Header"
import CountriesList from "./components/countriesList"
import CountryDetailes from "./components/CountryDetailes"
function App() {

  return (
    <>
    <section className=" bg-very-dark-blue-dm px-4 text-white">
      <Header/>
    <Search/>
    <RegionFilter/>
    <CountriesList/>
    {/* <CountryDetailes/>   */}

    </section>
    </>
  )
}

export default App

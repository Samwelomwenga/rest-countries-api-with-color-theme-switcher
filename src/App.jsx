import Search from "./components/search"
import RegionFilter from "./components/RegionFilter"
import Header from "./components/Header"
import CountriesList from "./components/countriesList"
function App() {

  return (
    <>
    <section className=" bg-very-dark-blue-dm px-4 text-white">
      <Header/>
    <Search/>
    <RegionFilter/>
    <CountriesList/>
    </section>
    </>
  )
}

export default App

import Search from "./components/search"
import RegionFilter from "./components/RegionFilter"
import Header from "./components/Header" 
function App() {

  return (
    <>
    <section className=" bg-very-dark-blue-dm px-4">
      <Header/>
    <Search/>
    <RegionFilter/>
    </section>
    </>
  )
}

export default App

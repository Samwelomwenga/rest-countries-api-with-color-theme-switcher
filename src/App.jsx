import Home from "./routes/Home";
import CountryDetailesPage from "./routes/CountryDetailesPage";
import { Route,Routes } from "react-router-dom";
// import CountryDetailes from "./components/CountryDetailes"
function App() {
 

  return (
    <>
    <Home/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:name" element={<CountryDetailesPage/>}/>
    </Routes>
    </>
  )
}

export default App

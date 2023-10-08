import Home from "./routes/Home";
import CountryDetailesPage from "./routes/CountryDetailesPage";
import { Route,Routes } from "react-router-dom";
function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:name" element={<CountryDetailesPage/>}/>
    </Routes>
    </>
  )
}

export default App

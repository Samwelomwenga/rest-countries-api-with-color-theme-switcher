// import React, { useState, useEffect } from "react";
// import FetchCountries from "./api/FetchCountries";
import Home from "./routes/Home";
// import CountryDetailesPage from "./routes/CountryDetailesPage";
// import { Route,Routes } from "react-router-dom";
// import CountryDetailes from "./components/CountryDetailes"
function App() {
 

  return (
    <>
    <Home/>
    {/* <Routes>
      <Route path="/" element={<Home countries={countries} setCountries={setCountries}/>}/>
      <Route path="/country" element={<CountryDetailesPage/>}/>
    </Routes> */}
    </>
  )
}

export default App

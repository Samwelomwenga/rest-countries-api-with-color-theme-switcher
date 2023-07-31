import React, { useState, useEffect } from "react";
function CountriesList({countries}) {




 
  return (
    <>
      {countries.map((country) => (
        <div className=" bg-dark-blue mb-7 rounded-md mx-10 shadow-md " key={country?.name?.common}>
          <img className=" rounded-t-md" src={country.flags.svg} alt={country.name} />
          <h2 className=" py-3 pl-5 font-extrabold">{country.name.common}</h2>
         <div className=" grid gap-0.5 pb-9 pl-5">
         <p>Population:{' '}<span className=" text-sm text-very-light-grey">{country?.population}</span></p>
          <p>Region:{' '}<span className=" text-sm text-very-light-grey">{country?.region}</span></p>
          <p>Capital:{' '}<span className=" text-sm text-very-light-grey">{country?.capital}</span></p>
         </div>
        </div>
      ))}
    </>
  );
}

export default CountriesList;

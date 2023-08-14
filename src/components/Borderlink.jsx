import { Link } from "react-router-dom";
import Propstypes from "prop-types";
import { useState,useEffect } from "react";
export const Borderlink = ({ index, item, border }) => {
    const [borderNames, setBorderNames] = useState([]);

  useEffect(() => {
    let ignore = false;
    const fetchBorder = async () => {   
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${border}?fields=name`
        );
        const borderData = await response.json();
        (!ignore)&& setBorderNames(borderData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBorder();
    return () => {
      ignore = true;
    };

  }, [border]);




  return (
    <>
      <li
        key={index}
        className=" bg-white dark:bg-dark-blue  whitespace-nowrap py-0.5 px-1 text-center shadow-md rounded md:py-1 md:px-5 md:my-0 md:mx-1"
      >
       {border&&( <Link to={`/${item.name.common}`}>{borderNames.name&&borderNames.name.common}</Link>)}
      </li>
    </>
  );
};
Borderlink.propTypes = {
  index: Propstypes.number,
  border: Propstypes.string,
  item: Propstypes.shape({
    name: Propstypes.shape({ common: Propstypes.string }),
  }),
};

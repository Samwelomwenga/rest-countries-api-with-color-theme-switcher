import { Link } from "react-router-dom";
import Propstypes from "prop-types";
import { useEffect,useState } from "react";
export const Borderlink = ({ index, item, border }) => {
    const [borderNames, setBorderNames] = useState([]);

    useEffect(()=>{
        let ignore=false;
        const fetchBorder = async (border) => {
          const res = await fetch(
            `https://restcountries.com/v3.1/alpha/${border}?fields=name`
          );
          const data = await res.json();
          (!ignore) &&setBorderNames(data);
        };
        fetchBorder(border);
        return () => {
          ignore = true;
        };
      },[border]
    );
  return (
    <>
      <li
        key={index}
        className=" bg-white dark:bg-dark-blue py-0.5 px-1 text-center shadow-md rounded md:py-1 md:px-5 md:my-0 md:mx-1"
      >
       {border&&( <Link to={`/${item.name.common}`}>{borderNames.name.common}</Link>)}
      </li>
      x
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

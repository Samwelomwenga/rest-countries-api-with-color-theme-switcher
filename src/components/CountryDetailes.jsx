import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const CountryDetailes = () => {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { name } = useParams();
  useEffect(() => {
    let ignore = false;
    const fetchCountry = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const countryData = await response.json();
        if (!ignore) {
          setCountry(countryData);
          console.log(countryData);
          setError(null);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountry();
    return () => {
      ignore = true;
    };
  }, [name]);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong: {error.message}</p>}
      {country.map((item) => (
        <div className=" px-6" key={item.name.common}>
          <button
            className=" bg-dark-blue py-1 px-4 rounded shadow-md text-center font-light my-8"
            onClick={handleButtonClick}
          >
            {" "}
            <FontAwesomeIcon className=" pr-2" icon={faArrowLeftLong} /> Back
          </button>
          <div>
            {" "}
            <img src={item.flags.svg} alt={item.name.common} />
          </div>
          <h2 className=" font-semibold text-xl my-5">{item.name.common}</h2>
          <ul className=" grid gap-1.5 mb-5">
            <li>
              Native Name:
              <span className="pl-1">{Object.values(item.name.nativeName)[0].common}</span>
            </li>
            <li>
              Population:<span className="pl-1">{item.population.toLocaleString()}</span>
            </li>
            <li>
              Region:<span className="pl-1">{item.region}</span>
            </li>
            <li>
              Sub Region:<span className="pl-1">{item.subregion}</span>
            </li>
            <li>
              Capital:<span className="pl-1">{item.capital}</span>
            </li>
          </ul>
          <ul className=" mb-7 grid gap-1.5">
            <li>
              Top Level Domain:<span className="pl-1">{item.tld[0]}</span>
            </li>
            <li>
              Currencies:<span className="pl-1">{Object.values(item.currencies)[0].name}</span>
            </li>
            <li>
              Languages:
              <span className="pl-1">
                {Object.values(item.languages).join(", ")}
              </span>
            </li>
          </ul>
          <p>Border Countries:</p>
          <ul className=" grid gap-3  pt-5 pb-8 grid-cols-4">
            {" "}
            {item.borders.map((border, index) => (
              <li
                key={index}
                className=" bg-dark-blue py-0.5 px-1 text-center shadow-md rounded"
              >
                <Link to={`/${item.name.common}`}>{border}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default CountryDetailes;

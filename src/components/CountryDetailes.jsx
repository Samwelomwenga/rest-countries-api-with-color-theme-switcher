import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Borderlink } from "./Borderlink";
import Spinner from "./Spinner";
// import useFetch from "../utils/hooks/useFetch";
import useFetchCountry from "../utils/hooks/useFetchCountry";


const CountryDetailes = () => {
  // const [country, setCountry] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { name } = useParams();
  // const [{countries,loading,error}] = useFetch(`https://restcountries.com/v3.1/name/${name}`);
  const [{countries,loading,error}]=useFetchCountry("https://restcountries.com/v3.1/name/",name);
  // useEffect(() => {
  //   let ignore = false;
  //   const fetchCountry = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch(
  //         `https://restcountries.com/v3.1/name/${name}`
  //       );
  //       const countryData = await response.json();
  //       if (!ignore) {
  //         setCountry(countryData);
  //         setError(null);
  //       }
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchCountry();
  //   return () => {
  //     ignore = true;
  //   };
  // }, [name]);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      {loading && <Spinner/>}
      {error && <p>Something went wrong: {error.message}</p>}
      {countries&&countries.map((item) => (
        <div className=" px-12  md:pt-8" key={item.name.common}>
          <button
            className="bg-white dark:bg-dark-blue py-1 px-4 rounded shadow-md text-center font-light my-8"
            onClick={handleButtonClick}
          >
            {" "}
            <FontAwesomeIcon className=" pr-2" icon={faArrowLeftLong} /> Back
          </button>
          <div className="md:flex md:gap-32">
            <div className=" md:w-1/3">
              {" "}
              <img src={item.flags.svg} alt={item.name.common} />
            </div>
            <div className="d">
              <h2 className=" font-semibold text-xl my-5">
                {item.name.common}
              </h2>
              <div className=" md:flex md:gap-20">
                <ul className=" grid gap-1.5 mb-5">
                  <li>
                    Native Name:
                    <span className="pl-1">
                      {Object.values(item.name.nativeName)[0].common}
                    </span>
                  </li>
                  <li>
                    Population:
                    <span className="pl-1">
                      {item.population.toLocaleString()}
                    </span>
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
                    Currencies:
                    <span className="pl-1">
                      {Object.values(item.currencies)[0].name}
                    </span>
                  </li>
                  <li>
                    Languages:
                    <span className="pl-1">
                      {Object.values(item.languages).join(", ")}
                    </span>
                  </li>
                </ul>
              </div>
              <div className=" md:flex md:items-center md:text-center md:gap-4">
                <p className=" md:text-center">Border Countries:</p>
                <ul className=" grid gap-3  pt-5 pb-8 grid-cols-4 md:gap-2">
                  {" "}
                  {item.borders
                    ? item.borders.map((border, index) => (
                        <Borderlink key={index}  border={border} />
                      ))
                    : "_"}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CountryDetailes;

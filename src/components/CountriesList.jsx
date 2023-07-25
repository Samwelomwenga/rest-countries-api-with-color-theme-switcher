import React,{useState,useEffect} from 'react'
import fetchcountries from '../api/fetchCountries'
function CountriesList() {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [countries]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await fetchcountries();
            setCountries(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    };
  return (
    <>
   { countries.map(country => (
        <div key={country.name}>
            <img src={country?.flag} alt={country.name} />
        </div>
        

))}
    </>
  )
}

export default CountriesList
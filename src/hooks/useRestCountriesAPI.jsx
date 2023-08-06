import  { useState} from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'https://restcountries.com/v3.1'
export const useRestCountriesAPI = (axiosParams) => {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
const fetchCountries= async () =>{
    setLoading(true);
    try {
        const response = await axios.request(axiosParams);
        setCountries(response.data);
        setError(null);
    } catch (error) {
        setError(error);
    }finally{
        setLoading(false);
    }
}

    fetchCountries();
  return{countries, error, loading,fetchCountries};
};

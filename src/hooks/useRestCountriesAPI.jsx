import  { useState, useEffect } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'https://restcountries.com/v3.1'
export const useRestCountriesAPI = (axiosParams) => {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
const fetchCountries= async () =>{
    try {
        const response = await axios.request(axiosParams);
        setCountries(response.data);
    } catch (error) {
        setError(error);
        setLoading(false);
    }finally{
        setLoading(false);
    };
    useEffect(()=>{
        fetchCountries();
    },[axiosParams]);
}
  return{countries, error, loading,fetchCountries};
};

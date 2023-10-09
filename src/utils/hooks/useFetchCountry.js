import { useReducer,useEffect, } from "react";
import axios from "axios";

import fetchCountriesReducer from "../functions/fetchCountriesReducer";

const initialState = {
    country: [],
    loading: false,
    error: null,
};
const useFetchCountry = (url,param) => {
    const [state, dispatch] = useReducer(fetchCountriesReducer, initialState);
    // const [url,setUrl]=useState(initialUrl);
    useEffect(() => {
        let ignore=false;
        const fetchData = async () => {
            dispatch({ type: "FETCH_COUNTRIES_REQUEST" });
            try {
                const response = await axios.get(url+param);
                if (!ignore) {
                    dispatch({
                        type: "FETCH_COUNTRIES_SUCCESS",
                        payload: response.data,
                    });
                }
            } catch (error) {
                if (!ignore) {
                    dispatch({
                        type: "FETCH_COUNTRIES_FAILURE",
                        payload: { error: error.message },
                    });
                }
            }
        };
        fetchData();
        return () => {
            ignore = true;
        };

        
    
    }, [url,param]);
    return [state];
}
export default useFetchCountry;
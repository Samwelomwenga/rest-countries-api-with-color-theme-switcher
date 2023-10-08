const fetchCountriesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES_REQUEST": {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case "FETCH_COUNTRIES_SUCCESS": {
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    }
    case "FETCH_COUNTRIES_FAILURE": {
      return {
        ...state,
        loading: false,
        countries: [],
        error: action.payload.error,
      };
    }
    default:{
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
export default fetchCountriesReducer;

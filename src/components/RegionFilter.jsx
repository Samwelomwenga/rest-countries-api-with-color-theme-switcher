import { useState } from "react";

function RegionFilter({setCountryList}) {
const [selectedRegion, setSelectedRegion] = useState('');

const handleRegionChange = (event) => {
  const selectedRegionValue = event.target.value;
setSelectedRegion(selectedRegionValue.toLowerCase());
}
// useEffect(()=>{
//   const fetchCountriesByRegion= async (selectedRegion) =>{
// const response = await axios.get(`https://restcountries.com/v3.1/region/${selectedRegion}`);
// setCountryList(response.data);
// }
// fetchCountriesByRegion(selectedRegion);
// },[selectedRegion])

  const regions = [{
    name: 'Africa',
    code: 'AF'
  },
  {
    name: 'Americas',
    code: 'AM'
  },
  {
    name: 'Asia',
    code: 'AS'
  },
  {
    name: 'Europe',
    code: 'EU'
  },
  {
    name: 'Oceania',
    code: 'OC'
  },];

  return (
    <div>
    <label>
        <select value={selectedRegion}  onChange={handleRegionChange} className=' bg-dark-blue mb-8 p-3 w-3/4 md:w-full md:mt-4'>
            <option value='' className=' hidden'>Filter by Region</option>
            {regions.map((region) => (
            <option key={region.code}  value={region.name}>{region.name}</option>

))}
          

        </select>
    </label>
    </div>
  )
}

export default RegionFilter
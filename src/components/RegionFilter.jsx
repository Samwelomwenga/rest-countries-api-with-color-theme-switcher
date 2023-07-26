import React from 'react'

function RegionFilter() {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  return (
    <div>
    <label className=' grid mb-8 bg-blue-900 font-Nunito'>
        
        <select className=' bg-dark-blue p-3 w-3/4'>
            <option  value=''>Filter by Region</option>
            {regions.map((region) => (
            <option  value={region}>{region}</option>

))}
          

        </select>
    </label>
    </div>
  )
}

export default RegionFilter
import React from 'react'

function RegionFilter() {
  return (
    <div>
    <label className=' grid bg-blue-900 font-Nunito'>
        <select className=' bg-dark-blue'>
            {/* <label> Filter by Region</label> */}
            <option value='Africa'>Africa</option>
            <option value='America'>America</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>

        </select>
    </label>
    </div>
  )
}

export default RegionFilter
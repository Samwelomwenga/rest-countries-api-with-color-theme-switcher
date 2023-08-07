import PropsType from 'prop-types';
function RegionFilter({region,handleSearchRegion}) {




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
    <div className='md:mr-10'>
    <label>
        <select value={region}  onChange={(event)=>handleSearchRegion(event.target.value)} className=' bg-dark-blue mb-8 p-3 w-3/4 md:w-full  md:mt-4'>
            <option value='' className=' hidden'>Filter by Region</option>
            {regions.map((Region) => (
            <option key={Region.code}  value={Region.name}>{Region.name}</option>

))}
          

        </select>
    </label>
    </div>
  )
}
RegionFilter.propTypes = {
  region: PropsType.string,
  handleSearchRegion: PropsType.func,
}
RegionFilter.defaultProps = {
  region: '',
  handleSearchRegion: () => {},
}

export default RegionFilter
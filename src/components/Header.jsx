import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <>
    <header className='flex justify-between bg-dark-blue w-full py-5 px-4 md:px-10'>
        <h1 className=' font-extrabold'>Where is the world?</h1>
        <div className='flex gap-3'><FontAwesomeIcon icon={faMoon} size="lg" /><p>Dark Mode</p></div>
    </header>
    </>
  )
}

export default Header
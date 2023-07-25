import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <>
    <header className='flex justify-between bg-dark-blue w-full py-5 text-white'>
        <h1>Where is the world?</h1>
        <div className='flex gap-3'><FontAwesomeIcon icon={faMoon} size="lg" /><p>Dark Mode</p></div>
    </header>
    </>
  )
}

export default Header
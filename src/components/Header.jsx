import ThemeSwitcher from "./ThemeSwitcher"
function Header() {
  return (
    <>
    <header className='flex justify-between bg-white shadow dark:bg-dark-blue w-full py-5 px-4 md:px-14 md:mb-7'>
        <h1 className=' font-extrabold'>Where is the world?</h1>
        <ThemeSwitcher />
    </header>
    </>
  )
}

export default Header
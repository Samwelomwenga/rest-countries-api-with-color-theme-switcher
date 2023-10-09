import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
const PageNotFound = () => {
  return (
    <div  className=" text-very-dark-blue dark:text-white bg-very-light-grey dark:bg-very-dark-blue-dm h-screen relative">
        <div className="absolute top-1/4  left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <FontAwesomeIcon icon={faCircleExclamation}  size="6x" />
            <h1 className=" text-8xl">404</h1>
            <h2 className=" text-2xl">Page Not Found</h2>
        </div>
    </div>
  )
}

export default PageNotFound
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
const Error = () => {
  return (
    <div className=" relative text-center">
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
        <FontAwesomeIcon icon={faTriangleExclamation} size="8x" />
        <h2 className=" text-2xl">Country Not Found</h2>
        </div>
    </div>
  )
}

export default Error
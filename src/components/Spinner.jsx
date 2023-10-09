import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Spinner = () => {
  return (
    <div className=" relative w-full h-screen">
      <FontAwesomeIcon
        icon={faSpinner}
        spinPulse
        size="10x"
        className="dark:text-white text-very-dark-blue-lm absolute top-40 left-1/3 md:left-96 translate-y-1/2 translate-x-1/2"
      />
    </div>
  );
};

export default Spinner;

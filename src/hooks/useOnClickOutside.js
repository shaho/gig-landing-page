// Custom hook in order to detect clicks outside of a specified element
import { useEffect } from "react";
// import PropTypes from "prop-types";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

// useOnClickOutside.propTypes = {
//   ref: PropTypes.oneOfType([
//     PropTypes.func,
//     PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
//   ]).isRequired,
//   handler: PropTypes.func.isRequired,
// };

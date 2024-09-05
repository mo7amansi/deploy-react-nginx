import { useRouteError } from "react-router-dom";

/**
 * Renders an error element.
 *
 * @returns {JSX.Element} The rendered error element.
 */
const ErrorElement = () => {
  const error = useRouteError();

  return <h1 className="text-4xl font-bold">There was an error...</h1>;
};

export default ErrorElement;

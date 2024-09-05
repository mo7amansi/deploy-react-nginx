import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <man className="grid h-screen px-8 place-items-center">
        <div>
          <h3 className="font-bold text-center text-secondary text-9xl">404</h3>
          <p className="my-4 text-3xl font-bold text-center sm:text-5xl">
            page not found
          </p>
          <p className="mt-6 mb-8 text-xl font-bold">
            Sorry, the page you tried cannot be found
          </p>
          <div className="flex items-center justify-center">
            <Link
              className="text-lg text-center text-white btn btn-secondary"
              to={"/"}
            >
              back home
            </Link>
          </div>
        </div>
      </man>
    );
  }

  return (
    <man className="grid h-screen px-8 place-items-center">
      <h2 className="text-5xl font-medium tracking-tight text-primary">
        There was an error...
      </h2>
    </man>
  );
};

export default Error;

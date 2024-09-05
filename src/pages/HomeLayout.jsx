import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, Nav } from "../components";

const HomeLayout = () => {
  const { state } = useNavigation();

  return (
    <>
      <Header />
      <Nav />

      {state === "loading" ? (
        <Loading />
      ) : (
        <div className="py-20 align-element">
          <Outlet />
        </div>
      )}
    </>
  );
};

export default HomeLayout;

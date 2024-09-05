import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/user/userSlice";
import { clearItems } from "../../features/cart/cartSlice";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearItems());
    queryClient.removeQueries();
    navigate("/");
  };

  return (
    <header className="py-2 bg-neutral text-neutral-content">
      <div className="flex justify-center align-element md:justify-end">
        {user.user ? (
          <div className="flex gap-x-2 md:gap-x-6">
            <p className="text-xs sm:text-sm">Hello, {user?.user?.username}</p>
            <button
              onClick={handleLogout}
              className="btn btn-secondary btn-xs btn-outline"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4 gap-x-4">
            <NavLink
              className={"link link-hover text-xs lg:text-sm"}
              to={"/login"}
            >
              Sign in / Guest
            </NavLink>
            <NavLink
              className={"link link-hover text-xs lg:text-sm"}
              to={"/register"}
            >
              Create Account
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

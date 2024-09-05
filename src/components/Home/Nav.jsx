import { IoIosMoon } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import NavLinks from "../UI/NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/user/userSlice";

const Nav = () => {
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        {/* LEFT */}
        <div className="navbar-start">
          <NavLink
            to={"/"}
            className="items-center hidden text-3xl font-semibold lg:flex btn btn-secondary"
          >
            C
          </NavLink>

          <div className="navbar-center dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <FaBarsStaggered className="w-6 h-6" />
            </label>

            <ul
              tabIndex={0}
              className="shadow dropdown-content z-[1] menu menu-sm bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        {/* CENTER */}
        <div className="navbar-center">
          <ul
            tabIndex={0}
            className="dropdown-content hidden lg:flex z-[1] menu-horizontal menu-md rounded-box"
          >
            <NavLinks />
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex navbar-end gap-x-2">
          <div className={"btn btn-ghost btn-circle"}>
            <label className="swap swap-rotate">
              <input type="checkbox" onChange={handleTheme} />
              <IoIosMoon className="w-6 h-6 swap-on" />
              <MdSunny className="w-6 h-6 swap-off" />
            </label>
          </div>
          <NavLink to={"/cart"} className={"btn btn-ghost btn-circle btn-md"}>
            <div className="indicator">
              <IoCartOutline className="w-6 h-6" />
              <div className="badge badge-secondary badge-sm indicator-item">
                {numItemsInCart}
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

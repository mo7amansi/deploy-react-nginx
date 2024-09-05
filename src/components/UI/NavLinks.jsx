import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = Object.freeze([
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "/about", text: "about" },
  { id: 3, url: "/products", text: "products" },
  { id: 4, url: "/cart", text: "cart" },
  { id: 5, url: "/checkout", text: "checkout" },
  { id: 6, url: "/orders", text: "orders" },
]);

const NavLinks = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;

        if ((url === "/checkout" || url === "/orders") && !user) return null;

        return (
          <NavLink className={"capitalize btn btn-ghost"} key={id} to={url}>
            {text}
          </NavLink>
        );
      })}
    </>
  );
};

export default NavLinks;

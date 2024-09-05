import { useSelector } from "react-redux";
import { CartItemsList, CartTotals, SectionTitle } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.user.user);
  const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);

  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Shopping Cart" />

      <div className="grid gap-8 mt-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>

        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link
              to={"/checkout"}
              className="mt-8 capitalize btn btn-secondary btn-block"
            >
              proceed to checkout
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="mt-8 capitalize btn btn-secondary btn-block"
            >
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

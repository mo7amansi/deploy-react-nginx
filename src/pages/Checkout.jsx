import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = (store) => {
  return () => {
    const user = store.getState().user.user;

    if (!user) {
      toast.warn("You must be logged in to checkout");
      return redirect("/login");
    }

    return null;
  };
};

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  if (cartItems.length === 0) {
    return <SectionTitle text="your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="place your order" />
      <div className="grid items-start gap-8 mt-8 md:grid-cols-2">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;

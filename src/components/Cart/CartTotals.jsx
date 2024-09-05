import { useSelector } from "react-redux";
import { formatPrice } from "../../utils";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cart
  );

  return (
    <>
      <div className="card bg-base-200">
        <div className="card-body">
          {/* SUBTOTAL */}
          <p className="flex items-center justify-between pb-2 text-xs border-b border-base-300">
            <span>Subtotal</span>
            <span className="font-medium">{formatPrice(cartTotal)}</span>
          </p>
          {/* SHIPPING */}
          <p className="flex items-center justify-between pb-2 text-xs border-b border-base-300">
            <span>Shipping</span>
            <span className="font-medium">{formatPrice(shipping)}</span>
          </p>
          {/* TAX */}
          <p className="flex items-center justify-between pb-2 text-xs border-b border-base-300">
            <span>Tax</span>
            <span className="font-medium">{formatPrice(tax)}</span>
          </p>
          {/* ORDER TOTAL */}
          <p className="flex items-center justify-between pb-2 text-sm">
            <span>Order Total</span>
            <span className="font-medium">{formatPrice(orderTotal)}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CartTotals;

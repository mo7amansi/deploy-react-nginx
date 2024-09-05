import { useDispatch } from "react-redux";
import { formatPrice, generateAmount } from "../../utils";
import { editItems, removeItems } from "../../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const { image, price, amount, title, company, productColor, cartID } = item;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItems({ cartID }));
  };

  const handleEdit = (e) => {
    dispatch(editItems({ cartID, amount: parseInt(e.target.value) }));
  };

  return (
    <article className="flex flex-col flex-wrap pb-6 mb-12 border-b gap-y-4 sm:flex-row border-base-300 last:border-b-0">
      <img
        className="object-cover w-24 h-24 rounded-lg sm:h-32 sm:w-32"
        src={image}
        alt={title}
      />

      <div className="sm:ml-16 sm:w-48">
        <h3 className="font-medium capitalize">{title}</h3>
        <h4 className="mt-2 text-sm capitalize text-neutral-content">
          {company}
        </h4>
        <p className="flex items-center mt-4 text-sm capitalize gap-x-2">
          Color:{" "}
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>

      <div className="sm:ml-12">
        <div className="max-w-xs form-control">
          <label htmlFor="amount" className="p-0 label">
            <span className="label-text">Amount</span>
          </label>

          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            onChange={handleEdit}
          >
            {generateAmount(amount + 10)}
          </select>
        </div>

        <button
          onClick={handleRemove}
          className="mt-2 text-sm link link-secondary link-hover"
        >
          remove
        </button>
      </div>

      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;

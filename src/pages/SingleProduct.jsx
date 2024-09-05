import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice, generateAmount } from "../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../features/cart/cartSlice";

const singleProductsQuery = (id) => {
  return {
    queryKey: ["singleProductsQuery", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductsQuery(params.id)
    );
    return { product: response.data.data };
  };

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { colors, company, description, image, price, title } =
    product.attributes;
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const [activeColor, setActiveColor] = useState(colors[0]);

  const productItem = {
    cartID: product.id + activeColor,
    productID: product.id,
    productColor: activeColor,
    title,
    image,
    company,
    amount,
    price,
  };

  const handleAddToCart = () => {
    dispatch(addItems({ productItem }));
  };

  return (
    <div>
      {/* BREAD CRUMBS LINKS */}
      <div className="breadcrumbs text-md">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      {/* SINGLE PRODUCT */}
      <section className="grid mt-6 gap-14 lg:grid-cols-2">
        <img
          src={image}
          alt={title}
          className="object-cover rounded-lg h-96 w-96 lg:w-full"
        />

        <div>
          <h2 className="text-3xl font-bold capitalize">{title}</h2>
          <h5 className="my-2 text-xl font-bold">{company}</h5>
          <h4 className="text-xl">{formatPrice(price)}</h4>
          <p className="my-6 leading-8">{description}</p>

          {/* COLORS */}
          <div className="">
            <p className="mb-2 text-lg font-medium">Colors</p>
            <div className="flex gap-2">
              {colors.map((color, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setActiveColor(color)}
                    className={`${
                      color === activeColor
                        ? "border-2 scale-110 opacity-100"
                        : "opacity-50"
                    }  w-6 h-6 transition-all duration-300 rounded-full`}
                    style={{ backgroundColor: `${color}` }}
                  ></button>
                );
              })}
            </div>
          </div>

          {/* AMOUNT */}
          <div className="mt-8">
            <p className="mb-2 text-lg font-medium">Amount</p>
            <select
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className="w-full max-w-xs select select-bordered select-secondary"
            >
              {generateAmount(20)}
            </select>
          </div>

          {/* ADD TO CART */}
          <div className="mt-8">
            <button className="btn btn-secondary" onClick={handleAddToCart}>
              <h3 className="font-semibold uppercase">Add to Cart</h3>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;

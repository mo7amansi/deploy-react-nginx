import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../../utils";

const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className="grid gap-4 pt-10 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, image, price } = product.attributes;
        const priceFormatted = formatPrice(price);

        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="w-full p-4 transition-all duration-300 shadow-xl hover:scale-[1.02] card bg-base-100 hover:shadow-2xl rounded-box"
          >
            <article>
              <figure>
                <img
                  src={image}
                  alt={title}
                  className="object-cover w-full h-48 md:h28 rounded-box"
                />
              </figure>
              <div className="flex flex-col items-center justify-between py-5 card-body">
                <h3 className="tracking-wider capitalize card-title">
                  {title}
                </h3>
                <p className="text-lg text-secondary">{priceFormatted}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;

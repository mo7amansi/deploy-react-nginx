import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../../utils";

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className="grid gap-4 pt-10">
      {products.map((product) => {
        const { title, image, price, company } = product.attributes;
        const priceFormatted = formatPrice(price);

        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="flex flex-col flex-wrap w-full p-4 transition-all duration-300 shadow-xl sm:flex-row card bg-base-100 hover:shadow-2xl rounded-box group"
          >
            <article className="flex justify-between w-full">
              <img
                src={image}
                alt={title}
                className="object-cover transition-all duration-300 w-36 h-36 md:h28 rounded-box group-hover:scale-105"
              />
              <div className="ml-0 sm:ml-16">
                <h3 className="text-lg tracking-wider capitalize card-title">
                  {title}
                </h3>
                <h4 className="tracking-wider capitalize text-neutral-content">
                  {company}
                </h4>
              </div>
              <p className="ml-0 text-lg text-secondary sm:ml-auto">
                {priceFormatted}
              </p>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;

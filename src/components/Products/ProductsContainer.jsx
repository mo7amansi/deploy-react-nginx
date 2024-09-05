import { useState } from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsList from "../UI/ProductsList";
import ProductsGrid from "../UI/ProductsGrid";
import { useLoaderData } from "react-router-dom";

const ProductsContainer = () => {
  const [layout, setLayout] = useState("grid");
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;

  const layoutActiveBtn = (layouting) => {
    return `${
      layouting === layout
        ? "btn-secondary text-secondary-content"
        : "btn-glass text-based-content"
    }`;
  };

  return (
    <div className="">
      <ProductsHeader
        totalProducts={totalProducts}
        layoutActiveBtn={layoutActiveBtn}
        setLayout={setLayout}
      />

      {totalProducts === 0 ? (
        <h5 className="mt-16 text-2xl text-center">
          Sorry, no products matched your search...
        </h5>
      ) : layout === "grid" ? (
        <ProductsGrid />
      ) : (
        <ProductsList />
      )}
    </div>
  );
};

export default ProductsContainer;

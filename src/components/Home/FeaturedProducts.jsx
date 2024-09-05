import ProductsGrid from "../UI/ProductsGrid";
import SectionTitle from "../UI/SectionTitle";

const FeaturedProducts = () => {
  return (
    <div className="mt-28">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </div>
  );
};

export default FeaturedProducts;

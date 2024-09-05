import { IoGrid } from "react-icons/io5";
import { BsList } from "react-icons/bs";

const ProductsHeader = ({ setLayout, totalProducts, layoutActiveBtn }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-b-base-300">
      <h2 className="font-semibold">
        {totalProducts} product{totalProducts > 1 && "s"}
      </h2>

      <div className="flex gap-x-2">
        <button
          onClick={() => setLayout("grid")}
          className={`${layoutActiveBtn(
            "grid"
          )} text-xl btn  btn-circle btn-sm`}
        >
          <IoGrid />
        </button>
        <button
          onClick={() => setLayout("list")}
          className={`${layoutActiveBtn(
            "list"
          )} text-xl btn  btn-circle btn-sm`}
        >
          <BsList />
        </button>
      </div>
    </div>
  );
};

export default ProductsHeader;

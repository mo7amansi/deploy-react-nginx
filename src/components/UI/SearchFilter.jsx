import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const SearchFilter = () => {
  const { meta, params } = useLoaderData();
  const { search, category, company, order, price, shipping } = params;

  return (
    <Form className="grid items-center p-6 my-4 rounded-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 bg-base-200">
      {/* SEARCH */}
      <FormInput
        label="Search Product"
        type="search"
        name="search"
        defaultValue={search}
        size="input-sm"
      />

      {/* CATEGORY */}
      <FormSelect
        label="select category"
        name="category"
        defaultValue={category}
        size="select-sm"
        list={meta.categories}
      />

      {/* COMPANY */}
      <FormSelect
        label="select company"
        name="company"
        defaultValue={company}
        size="select-sm"
        list={meta.companies}
      />

      {/* SORT BY */}
      <FormSelect
        label="sort by"
        name="order"
        defaultValue={order}
        size="select-sm"
        list={[
          "price (lowest)",
          "price (highest)",
          "name (a - z)",
          "name (z - a)",
        ]}
      />

      {/* PRICE RANGE */}
      <FormRange
        defaultValue={price}
        label={"select price"}
        name="price"
        size={"range-sm"}
      />

      {/* FREE SHIPPING CHECKBOX */}
      <FormCheckbox
        label={"free shipping"}
        name={"shipping"}
        size={"checkbox-sm"}
        defaultValue={shipping}
      />

      {/* ACTION BUTTONS */}
      <button className="uppercase btn btn-secondary text-secondary-content btn-sm">
        search
      </button>
      <Link
        to="/products"
        className="uppercase btn btn-primary text-primary-content btn-sm"
      >
        reset
      </Link>
    </Form>
  );
};

export default SearchFilter;

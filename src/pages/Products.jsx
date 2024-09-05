import { Pagination, ProductsContainer, SearchFilter } from "../components";
import { customFetch } from "../utils";

const pageUrl = "/products";

const productsQuery = (paramsQuery) => {
  const { search, category, company, sort, price, shipping, page } =
    paramsQuery;

  return {
    queryKey: [
      "productsQuery",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch(pageUrl, { params: paramsQuery }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await queryClient.ensureQueryData(productsQuery(params));

    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta, params };
  };

const Products = () => {
  return (
    <>
      <SearchFilter />
      <ProductsContainer />
      <Pagination />
    </>
  );
};

export default Products;

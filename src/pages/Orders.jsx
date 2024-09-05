import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { ComplexPagination, OrdersList, SectionTitle } from "../components";

const ordersQuery = (user, params) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader = (store, queryClient) => {
  return async ({ request }) => {
    const user = store.getState().user.user;

    if (!user) {
      toast.warn("You must logged in to view orders");
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(user, params)
      );

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const message =
        error?.response?.data?.error?.message ||
        "There was an error placing your orders";
      toast.error(message);

      if (error?.response?.status === 401 || error?.response?.status === 403)
        return redirect("/login");
      return null;
    }
  };
};

const Orders = () => {
  const { meta } = useLoaderData();

  if (meta.pagination.total < 1) {
    return <SectionTitle text="please make an order" />;
  }

  return (
    <>
      <SectionTitle text="your orders" />
      <OrdersList />
      <ComplexPagination />
    </>
  );
};

export default Orders;

import { Form, redirect } from "react-router-dom";
import FormInput from "../UI/FormInput";
import SubmitButton from "../UI/SubmitButton";
import { customFetch, formatPrice } from "../../utils";
import { clearItems } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const { user } = store.getState().user;
    const { orderTotal, cartItems, numItemsInCart } = store.getState().cart;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      cartItems,
      orderTotal: formatPrice(orderTotal),
      numItemsInCart,
    };

    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      queryClient.removeQueries("orders");
      store.dispatch(clearItems());
      toast.success("Order placed successfully");
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";
      toast.error(errorMessage);

      if (error?.response?.status === 401 || error?.response?.status === 403)
        return redirect("/login");
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h3 className="text-xl font-medium capitalize">shipping information</h3>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />

      <div className="mt-4">
        <SubmitButton text="place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;

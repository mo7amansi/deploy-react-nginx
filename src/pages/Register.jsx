import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("Account created successfully");
    return redirect("/login");
  } catch (error) {
    const err =
      error?.response?.data?.error?.message || "please check your credential";
    toast.error(err);

    return null;
  }
};

const Register = () => {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="POST"
        className="p-6 space-y-4 shadow-lg bg-base-100 card glass w-96"
      >
        <h4 className="text-3xl font-bold text-center text-primary">
          Register
        </h4>
        <FormInput type="text" name="username" label={"username"} />
        <FormInput type="email" name="email" label={"email"} />
        <FormInput type="password" name="password" label={"password"} />

        <div>
          <SubmitButton text={"Register"} />
        </div>

        <p className="text-center">
          Already a member
          <Link
            to={"/login"}
            className="ml-2 capitalize link link-hover link-primary"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;

import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";
import customFetch from "../utils/customFetch";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    return redirect("/login");
  } catch (error) {
    console.log(error);
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="Uzoma" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="Akpala"
        />
        <FormRow type="text" name="location" defaultValue="earth" />
        <FormRow
          type="email"
          name="email"
          defaultValue="francisakpala@yahoo.com"
        />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;

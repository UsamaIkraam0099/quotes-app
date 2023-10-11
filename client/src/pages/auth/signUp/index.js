import "./style.scss";
import { useState } from "react";

// Others
import { AuthCard } from "../../../components";
import { Input, Button } from "../../../components/core";

let initialState = {
  form: {
    firstName: {
      value: "",
      type: "INPUT",
      label: "First Name",
      placeholder: "Type your first name",
    },
    lastName: {
      value: "",
      type: "INPUT",
      label: "Last Name",
      placeholder: "Type your last name",
    },
    email: {
      value: "",
      type: "INPUT",
      label: "Email",
      placeholder: "Type your email",
    },
    password: {
      value: "",
      type: "INPUT",
      label: "Password",
      placeholder: "Type your password",
    },
  },
};

const SignUp = () => {
  const [{ form }, setState] = useState(initialState);

  const updateState = (state) =>
    setState((prevState) => ({ ...prevState, ...state }));

  const handleInputChange = (name, value) => {
    let formCopy = { ...form };
    formCopy[name].value = value;
    updateState({ form: formCopy });
  };

  const handleClick = () => {
    let data = {};

    for (let key in form) data[key] = form[key].value;

    console.log({ data });
  };

  return (
    <div className="container">
      <AuthCard style={{ padding: "5vh" }}>
        <h3 style={{ marginTop: 0 }}>Sign Up</h3>

        <form>
          <Input
            form={form}
            type="email"
            name="firstName"
            style={{ marginTop: "2rem" }}
            onChange={handleInputChange}
          />

          <Input
            form={form}
            type="email"
            name="lastName"
            onChange={handleInputChange}
          />

          <Input
            form={form}
            type="email"
            name="email"
            onChange={handleInputChange}
          />

          <Input
            form={form}
            type="password"
            name="password"
            onChange={handleInputChange}
          />
        </form>

        <Button
          label="Sign Up"
          style={{ marginTop: "1rem" }}
          onClick={() => handleClick()}
        />

        <p className="signup-label">
          Already have an account? <a href="/">Sign in</a>
        </p>
      </AuthCard>
    </div>
  );
};

export default SignUp;

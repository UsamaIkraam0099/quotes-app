import "./style.scss";
import { useState } from "react";

// Others
import { useNavigate } from "react-router-dom";
import { AuthCard } from "../../../components";
import { Input, Button } from "../../../components/core";

let initialState = {
  form: {
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

const SignIn = () => {
  const navigate = useNavigate();

  const [{ form }, setState] = useState(initialState);

  const updateState = (state) =>
    setState((prevState) => ({ ...prevState, ...state }));

  const handleInputChange = (name, value) => {
    let formCopy = { ...form };
    formCopy[name].value = value;
    updateState({ form: formCopy });
  };

  const handleSubmit = () => {
    let data = {};

    for (let key in form) data[key] = form[key].value;

    navigate("/dashboard");
  };

  return (
    <div className="container">
      <AuthCard>
        <h3>Sign In With</h3>

        <form onSubmit={handleSubmit}>
          <Input
            form={form}
            type="email"
            name="email"
            style={{ marginTop: "2rem" }}
            onChange={handleInputChange}
          />

          <Input
            form={form}
            type="password"
            name="password"
            onChange={handleInputChange}
          />

          <Button label="Sign In" style={{ marginTop: "1rem" }} />
        </form>

        <p className="signup-label">
          Dont have an account? <a href="/signup">Sign up</a>
        </p>
      </AuthCard>
    </div>
  );
};

export default SignIn;

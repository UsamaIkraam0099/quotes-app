import "./style.scss";
import { useState } from "react";

// Others
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { AuthCard } from "../../../components";
import { SIGN_IN } from "../../../graphql/mutations";
import { Input, Button } from "../../../components/core";

let initialState = {
  visible: false,
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

  const [{ form, visible }, setState] = useState(initialState);

  const updateState = (state) =>
    setState((prevState) => ({ ...prevState, ...state }));

  const [signIn] = useMutation(SIGN_IN, {
    onError: (error) => {
      updateState({ visible: false });
      alert(error.message);
    },
    onCompleted: (data) => {
      localStorage.setItem("@USER", JSON.stringify(data.user));
      localStorage.setItem("@TOKEN", JSON.stringify(data.user.token));
      updateState({ visible: false });

      navigate("/dashboard");
    },
  });

  const handleInputChange = (name, value) => {
    let formCopy = { ...form };
    formCopy[name].value = value;
    updateState({ form: formCopy });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateState({ visible: true });
    let data = {};

    for (let key in form) data[key] = form[key].value;

    setTimeout(() => {
      signIn({ variables: { email: data.email, password: data.password } });
    }, 3000);
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
            visible={visible}
            onChange={handleInputChange}
            style={{ marginTop: "2rem" }}
          />

          <Input
            form={form}
            type="password"
            name="password"
            visible={visible}
            onChange={handleInputChange}
          />

          <Button
            label="Sign In"
            visible={visible}
            style={{ marginTop: "1rem" }}
          />
        </form>

        <p className="signup-label">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </AuthCard>
    </div>
  );
};

export default SignIn;

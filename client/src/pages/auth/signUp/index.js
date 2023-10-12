import "./style.scss";
import { useState } from "react";

// Others
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { AuthCard } from "../../../components";
import { SIGN_UP } from "../../../graphql/mutations";
import { Input, Button } from "../../../components/core";

let initialState = {
  visible: false,
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
  const navigate = useNavigate();

  const [{ form, visible }, setState] = useState(initialState);

  const updateState = (state) =>
    setState((prevState) => ({ ...prevState, ...state }));

  const [signUp] = useMutation(SIGN_UP, {
    onError: (error) => {
      updateState({ visible: false });
      alert(error.message);
    },
    onCompleted: (data) => {
      console.log({ data });
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
      signUp({ variables: { user: data } });
    }, 3000);
  };

  return (
    <div className="container">
      <AuthCard style={{ padding: "5vh" }}>
        <h3 style={{ marginTop: 0 }}>Sign Up</h3>

        <form onSubmit={handleSubmit}>
          <Input
            form={form}
            type="text"
            name="firstName"
            visible={visible}
            style={{ marginTop: "2rem" }}
            onChange={handleInputChange}
          />

          <Input
            form={form}
            type="text"
            name="lastName"
            visible={visible}
            onChange={handleInputChange}
          />

          <Input
            form={form}
            type="email"
            name="email"
            visible={visible}
            onChange={handleInputChange}
          />

          <Input
            form={form}
            type="password"
            name="password"
            visible={visible}
            onChange={handleInputChange}
          />

          <Button
            label="Sign Up"
            visible={visible}
            style={{ marginTop: "1rem" }}
          />
        </form>

        <p className="signup-label">
          Already have an account? <a href="/">Sign in</a>
        </p>
      </AuthCard>
    </div>
  );
};

export default SignUp;

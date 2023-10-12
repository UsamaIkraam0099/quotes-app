import { createBrowserRouter } from "react-router-dom";

// Pages
import Protected from "./protected";
import { SignIn, SignUp, Dashboard } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "dashboard",
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
  },
]);

import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const _clearAll = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  const _authenticated = () => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    try {
      if (Date.now() >= token * 1000) {
        _clearAll();
        return false;
      }
    } catch (err) {
      _clearAll();
      return false;
    }

    return true;
  };

  if (!_authenticated()) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default Protected;

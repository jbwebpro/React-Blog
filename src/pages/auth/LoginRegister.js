import React from "react";
import Login from "./Login";
import Register from "./Register";

const LoginRegister = () => {
  return (
    <div className="login-register" style={{ marginTop: "150px" }}>
      <div className="container">
        <div className="row">
          <Login />
          <Register />
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;

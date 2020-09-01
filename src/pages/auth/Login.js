import React from "react";

import useFormValidation from "./useFormValidation";
import LoginValidation from "./LoginValidation";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const Login = ({ history }) => {
  /* */

  const {
    handleInputChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    isSubmit,
  } = useFormValidation(INITIAL_STATE, LoginValidation);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="login-page" style={{ marginTop: "100px" }}>
            <div className="card shadow-sm">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <h1>Login</h1>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className={`form-control ${errors.email && "is-invalid"}`}
                      placeholder="email"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <span className="text-danger">{errors.email}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className={`form-control ${
                        errors.password && "is-invalid"
                      }`}
                      placeholder="password"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleInputChange}
                    />
                    {errors.password && (
                      <span className="text-danger">{errors.password}</span>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import useFormValidation from "./useFormValidation";
import RegisterValidation from "./RegisterValidation";

const INITIAL_STATE = {
  email: "",
  password: "",
  passwordConfirm: "",
};

const Register = () => {
  /* */

  const {
    handleInputChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    isSubmit,
  } = useFormValidation(INITIAL_STATE, RegisterValidation);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="register-page" style={{ marginTop: "100px" }}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
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
                  <div className="form-group">
                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <input
                      type="password"
                      name="passwordConfirm"
                      id="passwordConfirm"
                      className={`form-control ${
                        errors.passwordConfirm && "is-invalid"
                      }`}
                      placeholder="Confirm your password"
                      onBlur={handleBlur}
                      value={values.passwordConfirm}
                      onChange={handleInputChange}
                    />
                    {errors.passwordConfirm && (
                      <span className="text-danger">
                        {errors.passwordConfirm}
                      </span>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
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

export default Register;

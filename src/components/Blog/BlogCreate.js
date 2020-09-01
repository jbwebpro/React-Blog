import React, { useRef, useState, useEffect } from "react";

import firebase, { storage } from "../../firebase";

import useFormValidation from "./useFormValidation";
import BlogValidation from "./BlogValidation";

const INITIAL_STATE = { title: "", body: "" };

const BlogCreate = () => {
  const {
    handleInputChange,
    handleSubmit,
    values,
    errors,
    isSubmit,
  } = useFormValidation(INITIAL_STATE, BlogValidation);

  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="blog-create" style={{ marginTop: "80px" }}>
            <h1>Add Blog</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className={`form-control ${errors.title && "is-invalid"}`}
                  placeholder="Your Title"
                  onChange={handleInputChange}
                  value={values.title}
                />
                {errors.title && (
                  <span className="text-danger">{errors.title}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea
                  rows="10"
                  id="body"
                  name="body"
                  placeholder="Your content"
                  value={values.body}
                  onChange={handleInputChange}
                  className={`form-control ${errors.body && "is-invalid"}`}
                />
                {errors.body && (
                  <span className="text-danger">{errors.body}</span>
                )}
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCreate;

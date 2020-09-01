import React from "react";
import BlogCreate from "../components/Blog/BlogCreate";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1>Blog</h1>
            <BlogCreate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

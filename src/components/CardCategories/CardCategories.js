import React from "react";
import { Link } from "react-router-dom";

const CardCategories = () => {
  return (
    <div className="card my-4">
      <h5 className="card-header">Categories</h5>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6">
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/">Web Design</Link>
              </li>
              <li>
                <Link to="/">HTML</Link>
              </li>
              <li>
                <Link to="/">Freebies</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/">JavaScript</Link>
              </li>
              <li>
                <Link to="/">CSS</Link>
              </li>
              <li>
                <Link to="/">Tutorials</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCategories;

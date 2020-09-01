import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <ul className="pagination justify-content-center mb-4">
      <li className="page-item">
        <Link className="page-link" to="#">
          &larr; Older
        </Link>
      </li>
      <li className="page-item disabled">
        <Link className="page-link" to="#">
          Newer &rarr;
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;

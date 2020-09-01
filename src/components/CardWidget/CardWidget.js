import React from "react";

const CardWidget = ({ header, body, ...others }) => {
  return (
    <div className="card my-4">
      <h5 className="card-header">{header}</h5>
      <div className="card-body">{body}</div>
    </div>
  );
};

export default CardWidget;

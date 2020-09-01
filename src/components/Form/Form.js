import React, { useState } from "react";
import firebase, { database } from "../../firebase";

const Form = () => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const createTodo = () => {
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title,
      complete: false,
    };
    todoRef.push(todo);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={title} />
      <button onClick={createTodo}>Submit</button>
    </div>
  );
};

export default Form;

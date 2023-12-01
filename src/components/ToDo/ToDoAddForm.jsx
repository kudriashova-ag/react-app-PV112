import { nanoid } from "nanoid";
import React, { useState } from "react";

const ToDoAddForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    if (title.length === 0) {
      setError('Title is required');
      return;
    }

    addTask({
      id: nanoid(),
      title: title,
      done: false,
    });
    setTitle("");
    setError(null);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {error && <div>{error}</div>}

      <button>add</button>
    </form>
  );
};

export default ToDoAddForm;

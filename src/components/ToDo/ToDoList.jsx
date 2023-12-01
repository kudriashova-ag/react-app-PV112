import React, { useEffect, useState } from "react";
import "./ToDoList.css";
import ToDoAddForm from "./ToDoAddForm";
import ToDoFilter from "./ToDoFilter";
import ToDoItem from "./ToDoItem";


const ToDoList = () => {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  const [toDoItems, setToDoItems] = useState(items);
  const [filter, setFilter] = useState("All");

  useEffect(() => { 
    localStorage.setItem("items", JSON.stringify(toDoItems));
  }, [toDoItems]);



  const addTask = (todoItem) => {
    const newItems = [...toDoItems, todoItem];
    setToDoItems(newItems);
  };

  const toggleTaskDone = (id) => {
    const newItems = toDoItems.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setToDoItems(newItems);
  };

  const deleteTask = (id) => {
    const newTasks = toDoItems.filter((item) => item.id !== id);
    setToDoItems(newTasks);
  };

  const editTask = (id, title) => {
    const newTasks = toDoItems.map((item) => {
      if (item.id === id) {
        return { ...item, title: title };
      }
      return item;
    });
    setToDoItems(newTasks);
  };

  const FILTER_MAP = {
    All: () => true,
    Done: (task) => task.done,
    ToDo: (task) => !task.done,
  };

  return (
    <div className="todo-list">
      <h1>ToDo List</h1>
      <ToDoAddForm addTask={addTask} />
      <div>
        <ToDoFilter FILTER_MAP={FILTER_MAP} setFilter={setFilter} filter={filter} />
        <div className="list">
          {toDoItems.filter(FILTER_MAP[filter]).map((item) => (
            <ToDoItem
              task={item}
              key={item.id}
              toggleTaskDone={toggleTaskDone}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;

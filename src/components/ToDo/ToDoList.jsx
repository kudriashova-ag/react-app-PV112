import React, { useState } from "react";
import './ToDoList.css';
import ToDoAddForm from "./ToDoAddForm";
import ToDoFilter from "./ToDoFilter";
import ToDoItem from "./ToDoItem";

const items = [
  {
    id: 1,
    title: "Eat",
    done: true,
  },
  {
    id: 2,
    title: "Work",
    done: true,
  },
  {
    id: 3,
    title: "Sport",
    done: false,
  },
];



const ToDoList = () => {
  const [toDoItems, setToDoItems] = useState(items);


  const addTask = (todoItem) => { 
    const newItems = [...toDoItems, todoItem];
    setToDoItems(newItems);
  }

  const toggleTaskDone = (id) => {
    const newItems = toDoItems.map(item => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setToDoItems(newItems);
  }

  const deleteTask = (id) => { 
    const newTasks = toDoItems.filter(item => item.id !== id);
    setToDoItems(newTasks);
  }

  const editTask = (id, title) => { 
    const newTasks = toDoItems.map(item => {
      if (item.id === id) {
        return { ...item, title: title }
      }
      return item;
    });
    setToDoItems(newTasks);
  }


  return (
    <div className="todo-list">
      <h1>ToDo List</h1>
      <ToDoAddForm addTask={addTask} />
      <div>
        <ToDoFilter />
        <div className="list">
          {toDoItems.map((item) => (
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




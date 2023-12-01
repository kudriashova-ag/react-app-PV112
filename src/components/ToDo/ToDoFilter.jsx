import React from 'react';
import Button from './Button';

const ToDoFilter = ({ FILTER_MAP, setFilter, filter }) => {
  const buttonNames = Object.keys(FILTER_MAP);

  return (
    <div className="filter">
      {buttonNames.map((name) => (
        <Button name={name} setFilter={setFilter} filter={filter} key={name} />
      ))}
    </div>
  );
};

export default ToDoFilter;

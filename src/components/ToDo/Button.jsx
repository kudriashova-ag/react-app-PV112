import classNames from "classnames";
import React from "react";

const Button = ({ name, setFilter, filter }) => {
    return <button onClick={() => setFilter(name)} className={classNames({active: filter === name})}>Show {name}</button>;
};

export default Button;

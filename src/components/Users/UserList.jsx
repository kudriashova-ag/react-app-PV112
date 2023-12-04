import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useSearchParams();
  const [textSearch, setTextSearch] = useState(search.get('s') ?? '');

  const getUsers = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const searchHandler = (e) => {
    setTextSearch(e.target.value);
    setSearch({ s: e.target.value });
  };

    const filterUsers = (user) => { 
        if (textSearch){
          // return user.name.toLowerCase().includes(textSearch.toLowerCase());
            return new RegExp(textSearch, "i").test(user.name);
        }
        return true;
    }

  return (
    <div>
      <input type="text" value={textSearch} onChange={searchHandler} />

      {users.filter(filterUsers).map((user) => (
        <p>
          <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
        </p>
      ))}

      <Outlet />
      {/* выводит дочерний компонент */}
    </div>
  );
};

export default UserList;

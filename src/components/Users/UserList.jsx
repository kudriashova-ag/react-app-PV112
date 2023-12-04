import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => { 
        const response = await axios("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
    }

    useEffect(() => {
        getUsers();
     }, []);

    return (
        <div>
            {users.map((user) => <p>
                <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
            </p>)}

            <Outlet />
            {/* выводит дочерний компонент */}
        </div>
    );
}

export default UserList;
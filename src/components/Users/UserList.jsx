import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

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
                <NavLink to={`/user/${user.id}`}>{user.name}</NavLink>
            </p>)}
        </div>
    );
}

export default UserList;
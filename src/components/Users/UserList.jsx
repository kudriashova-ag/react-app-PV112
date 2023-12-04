import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
            {users.map((user) => <p>{user.name}</p>)}
        </div>
    );
}

export default UserList;
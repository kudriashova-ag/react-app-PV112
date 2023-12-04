import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/users/" + id
      );
      setUser(response.data);
    } catch (err) {
      setError("User Not Found");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {error ? error : (
        <>
          <h1>{user.name}</h1>
          <div>{user.email}</div>
        </>
      )}
    </div>
  );
};

export default UserInfo;

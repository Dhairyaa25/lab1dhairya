import React, { useState, useEffect } from 'react';
import CountComponent from './CountComponent';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data.slice(0, 3)));
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <CountComponent />
        </div>
      ))}
    </div>
  );
};

export default UserList;

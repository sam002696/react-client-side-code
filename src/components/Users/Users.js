import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const handleDeleteItem = (id) => {
        const proceed = window.confirm("You sure you want to delete?")
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = users.filter(user => user._id !== id)
                        setUser(remainingUsers);
                    }
                })
        }
    }
    return (
        <div>
            <h2>This is Users</h2>
            <h2>Total Users : {users.length}</h2>
            {
                users.map(user => <li key={user._id}>{user.name} :: {user.email} <button onClick={() => handleDeleteItem(user._id)}>Delete</button> <Link to={`/users/update/${user._id}`}><button>Details</button></Link> </li>)
            }
        </div>
    );
};

export default Users;
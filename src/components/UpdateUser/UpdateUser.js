import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [])
    return (
        <div>
            <h2>This is Update User</h2>
            <h1>Update Name : {user.name}</h1>
        </div>
    );
};

export default UpdateUser;
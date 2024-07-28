import React, { useState } from "react";

const UserInfor = ({ onAddUser }) => {
    const [user, setUser] = useState({
        id: "",
        name: "",
        address: "",
        age: ""
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        onAddUser(user);
        setUser({
            id: "",
            name: "",
            address: "",
            age: ""
        });
    };

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    name="id"
                    placeholder="Id"
                    value={user.id}
                    onChange={handleOnChange}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={user.name}
                    onChange={handleOnChange}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={user.address}
                    onChange={handleOnChange}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={user.age}
                    onChange={handleOnChange}
                />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default UserInfor;

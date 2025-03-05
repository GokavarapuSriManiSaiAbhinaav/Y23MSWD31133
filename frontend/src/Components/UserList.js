import React, { useState, useEffect, useCallback } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001/api/users";

function UserList() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });

  // ✅ Wrap fetchUsers in useCallback to prevent infinite re-renders
  const fetchUsers = useCallback(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]); // ✅ Add fetchUsers to the dependency array

  // Handle input changes
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // Add a user
  const handleAddUser = () => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then(() => fetchUsers()) // ✅ Refresh users after adding
      .catch((error) => console.error("Error adding user:", error));
  };

  // Delete a user
  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => fetchUsers()) // ✅ Refresh users after deleting
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div>
      <h2>User List</h2>
      <input name="name" placeholder="User Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="role" placeholder="Role" onChange={handleChange} />
      <button onClick={handleAddUser}>Add User</button>

      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email} - {user.role}
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
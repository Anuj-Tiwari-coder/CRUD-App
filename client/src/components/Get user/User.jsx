import axios from "axios";
import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom';
import "./User.css";

const User = () => {
    const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL || "http://localhost:8000";
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseURL}/api/getall`);
                setUsers(response.data);
            } catch (err) {
                console.error("Error fetching users:", err);
                toast.error("Failed to fetch users", { position: "top-center" });
            }
        };
        fetchData();
    }, [baseURL]);

    const deleteUser = async (userId) => {
        try {
            const response = await axios.delete(`${baseURL}/api/delete/${userId}`);
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
            toast.success(response.data.msg, { position: "top-center" });
        } catch (err) {
            console.error("Delete failed:", err);
            toast.error("Error deleting user", { position: "top-center" });
        }
    };

    return (
        <div className='userTable'>
            <Link to="/add" className='addButton'>Add User</Link>
            <table border={2} cellPadding={8} cellSpacing={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.First_name || "N/A"}</td>
                            <td>{user.Last_name || "N/A"}</td>
                            <td>{user.Phone_number || "N/A"}</td>
                            <td>{user.Your_email || "N/A"}</td>
                            <td className='actionButton'>
                                <button onClick={() => deleteUser(user._id)}>
                                    <i className="fa-regular fa-trash-can"></i>
                                </button>
                                <Link to={`/edit/${user._id}`}>
                                    <i className="fa-solid fa-user-pen"></i>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;

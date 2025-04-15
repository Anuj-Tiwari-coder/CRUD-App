import axios from "axios";
import React, { useState } from 'react';
import toast from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom';
import "./Add.css";

const Adduser = () => {
    const users = {
        First_name: "",
        Last_name: "",
        Phone_number: "",
        Your_email: "",
    };

    const navigate = useNavigate();
    const [user, setUser] = useState(users);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/create", user);
            toast.success(response.data.msg, { position: "top-center" });
            navigate("/");
        } catch (err) {
            console.error("Error:", err.response ? err.response.data : err.message);
            toast.error("Something went wrong. Please try again.", { position: "top-center" });
        }
    };

    return (
        <div className='adduser'>
            <Link to={"/"} className="backLink">Back</Link>
            <h3>Add New User</h3>
            <form className='adduserform' onSubmit={submitHandler}>
                <div className="inputGroup">
                    <label htmlFor="First_name">First Name:</label>
                    <input
                        type="text"
                        name="First_name"
                        id="First_name"
                        value={user.First_name}
                        onChange={inputHandler}
                        placeholder="Enter your name"
                        autoComplete="on"
                        required
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="Last_name">Last Name:</label>
                    <input
                        type="text"
                        name="Last_name"
                        id="Last_name"
                        value={user.Last_name}
                        onChange={inputHandler}
                        placeholder="Enter your surname"
                        autoComplete="on"
                        required
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="Phone_number">Phone Number:</label>
                    <input
                        type="text"
                        name="Phone_number"
                        id="Phone_number"
                        value={user.Phone_number}
                        onChange={inputHandler}
                        placeholder="Enter your phone number"
                        autoComplete="on"
                        required
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="Your_email">Email:</label>
                    <input
                        type="email"
                        name="Your_email"
                        id="Your_email"
                        value={user.Your_email}
                        onChange={inputHandler}
                        placeholder="Forexample1234@gmail.com"
                        autoComplete="on"
                        required
                    />
                </div>
                <div className="inputGroup">
                    <button type="submit">Confirm Your User</button>
                </div>
            </form>
        </div>
    );
};

export default Adduser;

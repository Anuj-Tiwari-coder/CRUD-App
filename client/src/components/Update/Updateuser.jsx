import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../Add user/Add.css";

const Updateuser = () => {
    // const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
    const { id } = useParams();
    const navigate = useNavigate();

    const initialUser = {
        First_name: "",
        Last_name: "",
        Phone_number: "",
        Your_email: "",
    };

    const [user, setUser] = useState(initialUser);

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getone/${id}`)
            .then((response) => {
                setUser(response.data);
            })
            .catch((err) => {
                console.log("Fetch error:", err);
            });
    }, [id]);

    const submitForm = async (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/update/${id}`, user)
            .then((response) => {
                toast.success(response.data.msg, { position: "top-center" });
                navigate("/");
            })
            .catch((err) => {
                console.error("Update error:", err.response ? err.response.data : err.message);
            });
    };

    return (
        <div className='adduser'>
            <Link to={"/"}>Back</Link>
            <h3>Update User</h3>
            <form className='adduserform' onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="First_name">First Name: </label>
                    <input
                        type="text"
                        name="First_name"
                        value={user.First_name}
                        onChange={inputChangeHandler}
                        placeholder="Enter Your Name"
                        autoComplete="on"
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="Last_name">Last Name: </label>
                    <input
                        type="text"
                        name="Last_name"
                        value={user.Last_name}
                        onChange={inputChangeHandler}
                        placeholder="Enter Your Surname"
                        autoComplete="on"
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="Phone_number">Phone Number: </label>
                    <input
                        type="text"
                        name="Phone_number"
                        value={user.Phone_number}
                        onChange={inputChangeHandler}
                        placeholder="+91 123456789"
                        autoComplete="on"
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="Your_email">Email: </label>
                    <input
                        type="email"
                        name="Your_email"
                        value={user.Your_email}
                        onChange={inputChangeHandler}
                        placeholder="example@gmail.com"
                        autoComplete="on"
                    />
                </div>
                <div className="inputGroup">
                    <button type="submit">Update User</button>
                </div>
            </form>
        </div>
    );
};

export default Updateuser;

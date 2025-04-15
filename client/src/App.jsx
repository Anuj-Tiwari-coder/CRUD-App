import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router"
import './App.css'
import Adduser from './components/Add user/adduser'
import User from './components/Get user/User'
import Updateuser from './components/Update/updateuser'


console.log(import.meta.env.Vite_DOCUMENTATION_LINK)


function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <Adduser />,
    },
    {
      path: "/edit/:id",
      element: <Updateuser />,
    }
  ])
  const [count, setCount] = useState(0)

  return (
    <>
      <h4> Creating a CRUD (Create, Read, Update, Delete) app using React.js for the frontend and Express.js for the backend involves building a full-stack web application where users can interact with data dynamically.
        <h3>
          Overview:
          Frontend (React.js): Provides a responsive UI for users to create, view, edit, and delete data. Uses Axios or Fetch API to communicate with the backend.
          Backend (Express.js + Node.js): Handles API requests, processes data, and interacts with a database (MongoDB/MySQL) to perform CRUD operations.</h3>
      </h4>
      <RouterProvider router={route} />
    </>
  )
}

export default App

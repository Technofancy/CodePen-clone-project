import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./container/Home";
import Pen from "./container/Pen";
import Signup from "./container/Signup";
import Login from "./container/Login";

function App() {

  useEffect(() => {
    // Fetch data from the backend
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
    <Routes>
      <Route path="/home/*" element={<Home />} />
      {/* If route not matching */}
      <Route path="*" element={<Navigate to="/home" />} />
      {/* other pages */}
      <Route path="/pen" element={<Pen />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App;
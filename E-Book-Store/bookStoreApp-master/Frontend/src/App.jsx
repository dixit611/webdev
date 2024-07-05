// src/App.jsx
import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import ContactForm from './ContactForm';
import About from './About'; 
import './index.css';
import Jobs from "./Jobs";
import PressKit from "./PressKit";
import Payment from "./Payment";

function App() {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/presskit" element={<PressKit />} /> 
          <Route path="/payment/:id" element={<Payment />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;

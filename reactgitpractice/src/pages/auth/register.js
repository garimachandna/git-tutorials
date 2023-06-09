import React, { useState } from "react";
import Layout from "../../components/layout";
import "../../styles/AuthStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/register`, {
        name,
        email,
        password,
      });

      if (res.data.success) {
        console.log(res);
        toast.success("Registration Successful");
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Registration Failed");
    }
  };

  return (
    <Layout>
      <div className="container">
        <h1>Register</h1>
        <p>Enter your details to register</p>
        <form onSubmit={handleSubmit}>
          <div className="box">
            <i className="fa-solid fa-envelope" />
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
            />
          </div>
          <div className="box">
            <i className="fa-solid fa-envelope" />
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="box">
            <i className="fa-solid fa-key" />
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
            />
          </div>
          <button className="btn">Sign Up</button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;

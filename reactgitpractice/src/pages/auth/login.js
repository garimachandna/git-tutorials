import React, { useState } from "react";
import Layout from "../../components/layout";
import "../../styles/AuthStyles.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
// import { useAuth } from "../../context/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [auth, setAuth] = useAuth();

  //form functionality
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/login`, {
        email,
        password,
      });

      if (res.data.success) {
        console.log(res);
        toast.success("Login Successful");
        // setAuth({
        //   ...auth,
        //   user: res.data.user,
        //   token: res.data.token,
        // });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Login Failed");
    }
  };

  return (
    <Layout>
      <div className="container">
        <h1>Login</h1>
        <p>Enter your email and password to sign in</p>
        <form onSubmit={handleSubmit}>
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
          <button className="btn">Sign In</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;

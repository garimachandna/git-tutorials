import React from "react";
import Layout from "../../components/layout";
import "../../styles/AuthStyles.css";

const Register = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Register</h1>
        <p>Enter your email and password to register</p>
        <form action method="post">
          <div className="box">
            <i className="fa-solid fa-envelope" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="box">
            <i className="fa-solid fa-key" />
            <input
              type="password"
              name="password"
              id="password"
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

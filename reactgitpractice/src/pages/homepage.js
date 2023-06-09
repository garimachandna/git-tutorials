import React from "react";
import Layout from "../components/layout";
import "../styles/homepage.css";

const Homepage = () => {
  console.log("Homepage");
  return (
    <>
      <Layout classname="body">
        <div className="main">
          <h1 className="heading">Welcome to our shopping complex</h1>
          <small className="subhead">
            One Stop Solution for all your shopping needs
          </small>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            officia repellat temporibus laudantium eos tempora molestias, quam,
            reiciendis officiis aliquid sunt. Odio suscipit voluptate error
            consequuntur ea explicabo, ab earum qui reprehenderit fugit quod
            minus unde accusantium possimus, dolor, doloremque porro dolore
            asperiores.
          </p>
        </div>
        <div className="section">
          <div className="card" id="card1">
            <div className="card-body">
              <h3 className="card-title">Card 1</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </div>
          <div className="card" id="card2">
            <div className="card-body">
              <h3 className="card-title">Card 2</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </div>
          <div className="card" id="card3">
            <div className="card-body">
              <h3 className="card-title">Card 3</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Homepage;

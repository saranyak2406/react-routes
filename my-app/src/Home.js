// Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // optional, for styling

const Home = () => {
  return (
    <section className="home-hero">
      <div className="home-container">
        <h1>Welcome to Lomaa App!</h1>
        <p className="home-description">
          Explore machine learning features, update your settings, and manage your account easily.
        </p>

        <div className="home-buttons">
          <Link to="/app/machine-learning" className="home-btn">
            Go to Machine Learning
          </Link>
          <Link to="/app/settings" className="home-btn settings-btn">
            Settings
          </Link>
        </div>

        <div className="home-cards">
          <div className="card">
            <h3>Machine Learning</h3>
            <p>Access ML models and analytics tools.</p>
          </div>
          <div className="card">
            <h3>Settings</h3>
            <p>Update your profile, brightness, and logout.</p>
          </div>
          <div className="card">
            <h3>Support</h3>
            <p>Get help and documentation for Lomaa App.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

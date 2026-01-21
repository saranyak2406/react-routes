import React from "react";
import { Link } from "react-router-dom";

function MachineLearning() {
  return (
    <div>
      {/* Hero Section only */}
      <section
        style={{
          padding: "80px 60px",
          background: "#f0f8ff",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "#555", marginBottom: "10px" }}>
          Welcome to Machine Learning
        </h3>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#007bff",
          }}
        >
          Machine Learning Solutions
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            maxWidth: "700px",
            margin: "20px auto",
          }}
        >
          Explore our AI and machine learning services including predictive
          modeling, data analytics, and automation solutions to make your
          business smarter.
        </p>

        <Link
          to="/app/home"
          style={{
            marginTop: "30px",
            display: "inline-block",
            background: "#007bff",
            color: "white",
            padding: "12px 26px",
            borderRadius: "25px",
            textDecoration: "none",
          }}
        >
          Back to Home
        </Link>
      </section>
    </div>
  );
}

export default MachineLearning;

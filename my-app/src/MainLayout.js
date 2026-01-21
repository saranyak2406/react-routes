import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import FooterRun from "./FooterRun";

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          background: "#007bff",
          color: "#fff",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div className="logo" style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#fff" }}>
          Lomaa
        </div>

        <div className="nav-links" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link to="/app/home" style={{ textDecoration: "none", color: "#fff" }}>Home</Link>
          <Link to="/app/machine-learning" style={{ textDecoration: "none", color: "#fff" }}>Machine Learning</Link>
          <span style={{ cursor: "pointer", color: "#fff" }}>Services</span>
          <span style={{ cursor: "pointer", color: "#fff" }}>Company</span>

          {/* Settings button */}
          <button
            onClick={() => navigate("/app/settings")}
            style={{
              marginLeft: "20px",
              padding: "5px 10px",
              cursor: "pointer",
              background: "#0056b3",
              border: "1px solid #004080",
              borderRadius: "5px",
              color: "#fff",
            }}
          >
            Settings ⚙️
          </button>
        </div>
      </nav>

      {/* Page content */}
      <main>
        <Outlet />
      </main>

      <FooterRun />
    </>
  );
};

export default MainLayout;

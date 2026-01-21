    import React from "react";
import { Link, Outlet } from "react-router-dom";
import FooterRun from "./FooterRun";

const SuperMainLayout = () => {
  return (
    <>
      <nav className="navbar" style={{background: "red"}}>
        <div className="logo">Login/Register</div>
      </nav>

      <main>
        <Outlet />
      </main>

      <FooterRun />
    </>
  );
};

export default SuperMainLayout;

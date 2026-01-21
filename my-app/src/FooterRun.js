import React from "react";

const FooterRun = () => {
  return (
    <footer
      style={{
        background: "#007bff",
        color: "white",
        textAlign: "center",
        padding: "20px 0",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      &copy; {new Date().getFullYear()} Lomaa. All rights reserved.
    </footer>
  );
};

export default FooterRun;

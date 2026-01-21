// Settings.js
import React, { useState } from "react";

const Settings = () => {
  const [brightness, setBrightness] = useState(100);

  const handleLogout = () => {
    alert("You have been logged out!");
    // Add your logout logic here (redirect to login, clear tokens, etc.)
  };

  return (
    <section style={{ padding: "20px" }}>
      <h1>Settings</h1>

      {/* Brightness */}
      <div style={{ marginTop: "20px" }}>
        <h3>Brightness</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
        />
        <span style={{ marginLeft: "10px" }}>{brightness}%</span>
      </div>

      {/* Logout */}
      <div style={{ marginTop: "20px" }}>
        <h3>Account</h3>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            background: "#dc3545",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default Settings;

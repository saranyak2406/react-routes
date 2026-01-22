import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@admin.com" && password === "admin1234") {
      setError("");
      navigate("/app/home");
    } else {
      setError("Incorrect email or password");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-content">
        <div className="auth-box">
          <h2>Login</h2>

          <form className="auth-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="error-text">{error}</p>}

            <button type="submit">Login</button>
          </form>

          <p className="auth-switch">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>

      <footer>FooterRun</footer>
    </div>
  );
};

export default Login;

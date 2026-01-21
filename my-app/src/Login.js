import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/app/home");
  };

  return (
    <div className="auth-page">
      <div className="auth-content">
        <div className="auth-box">
          <h2>Login</h2>

          <form className="auth-form" onSubmit={handleLogin}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>

          <p className="auth-switch">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>

      <footer>
        FooterRun
      </footer>
    </div>
  );
};

export default Login;

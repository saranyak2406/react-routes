import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-content">
        <div className="auth-box">
          <h2>Register</h2>

          <form className="auth-form" onSubmit={handleRegister}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </div>

      <footer>
        FooterRun
      </footer>
    </div>
  );
};

export default Register;

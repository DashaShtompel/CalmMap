import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('This field is required');
      return;
    }
    setError('');
    alert('Logged in successfully');
  };

  const handleCreateClick = () => {
    navigate('/create');  // Переход на страницу CreatePage
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Hello</h2>
        <h3>Sign In to your account</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="username">Username</label>
            {error && <p id="errorMessage">{error}</p>}
            <i className="bx bx-user icon"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <i className="bx bx-lock-alt icon"></i>
          </div>
          <div className="remember-forgot">
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                className="custom-checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">Sign In</button>
            <div className="text-button-container">
              <span className="info-text">Don’t have an account?</span>
              <button type="button" onClick={handleCreateClick} className="create-button">Create</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

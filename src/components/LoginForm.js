import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let formIsValid = true;
    const newError = { username: '', password: '' };

    if (!username) {
      formIsValid = false;
      newError.username = 'This field is required';
    }

    if (!password) {
      formIsValid = false;
      newError.password = 'Please enter a password';
    }

    setError(newError);

    if (formIsValid) {
      alert('Logged in successfully');
    }
  };

  const handleCreateClick = () => {
    navigate('/create');
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (error.username) {
      setError((prevState) => ({ ...prevState, username: '' }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error.password) {
      setError((prevState) => ({ ...prevState, password: '' }));
    }
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
              onChange={handleUsernameChange}
              className={error.username ? 'error' : ''}
              id="username"
              placeholder=" "
            />
            <label htmlFor="username">Username</label>
            {error.username && <p id="errorMessage">{error.username}</p>}
            <i className={`bx bx-user icon ${username ? 'filled' : ''}`}></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className={error.password ? 'error' : ''}
              id="password"
              placeholder=" "
            />
            <label htmlFor="password">Password</label>
            {error.password && <p id="errorMessage">{error.password}</p>}
            <i className={`bx bx-lock-alt icon ${password ? 'filled' : ''}`}></i>
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

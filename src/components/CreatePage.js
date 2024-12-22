import React, { useState } from 'react';
import '../styles/CreatePage.css';

function CreateAccountPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ username: '', email: '', password: '' });

    const handleCreateClick = (event) => {
        event.preventDefault(); // Предотвращаем отправку формы
        let formIsValid = true;
        const newError = { username: '', email: '', password: '' };

        // Проверка на обязательные поля
        if (!username) {
            formIsValid = false;
            newError.username = 'This field is required';
        }

        if (!email) {
            formIsValid = false;
            newError.email = 'This field is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formIsValid = false;
            newError.email = 'Please enter a valid email address';
        }

        if (!password) {
            formIsValid = false;
            newError.password = 'Please enter a password';
        }

        setError(newError);

        if (formIsValid) {
            alert('Account created successfully');
        }
    };

    const handleInputChange = (e, field) => {
        const { value } = e.target;
        
        // Обновление значений и очистка ошибок
        if (field === 'username') {
            setUsername(value);
            setError((prevError) => ({ ...prevError, username: '' }));
        } else if (field === 'email') {
            setEmail(value);
            setError((prevError) => ({ ...prevError, email: '' }));
        } else if (field === 'password') {
            setPassword(value);
            setError((prevError) => ({ ...prevError, password: '' }));
        }
    };

    return (
        <div>
            <img src="grad1.png" alt="First Background" className="image1" />
            <img src="grad2.png" alt="Second Background" className="image2" />
            <div className="container1">
                <div className="login-box1">
                    <form>
                        <div className="ellipse-group">
                            <div className="ellipse1"></div>
                            <div className="ellipse2"></div>
                            <div className="ellipse3"></div>
                        </div>
                        <div className="input-group">
                            <h3>Welcome to CalmMap</h3>
                            <div className="input-box1">
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => handleInputChange(e, 'username')}
                                    className={error.username ? 'error' : ''}
                                    required
                                />
                                <label>Username</label>
                                <i className="bx bx-user icon"></i>
                                {error.username && <div className="error-message">{error.username}</div>}
                            </div>
                            <div className="input-box1">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => handleInputChange(e, 'email')}
                                    className={error.email ? 'error' : ''}
                                    required
                                />
                                <label>Email Address</label>
                                <i className="bx bx-mail-send icon"></i>
                                {error.email && <div className="error-message">{error.email}</div>}
                            </div>
                            <div className="input-box1">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => handleInputChange(e, 'password')}
                                    className={error.password ? 'error' : ''}
                                    required
                                />
                                <label>Password</label>
                                <i className="bx bx-lock-alt icon"></i>
                                {error.password && <div className="error-message">{error.password}</div>}
                            </div>
                            <div className="remember-me">
                                <input type="checkbox" id="remember" className="custom-checkbox" />
                                <label htmlFor="remember">I accept all terms and conditions</label>
                            </div>
                            <button type="button" onClick={handleCreateClick} className="btn">Create Account</button>
                            <p className="text1">Or create account using social media</p>
                            <div className="ellipse4"></div>
                            <div className="icon-gmail">
                                <img src="icon_gmail.svg" alt="Gmail Icon" className="gmail-icon" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAccountPage;
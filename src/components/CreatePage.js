import React from 'react';
import '../styles/CreatePage.css';

const CreateAccountPage = () => {
    return (
        <div>
            <img src="grad1.png" alt="First Background" className="image1" />
            <img src="grad2.png" alt="Second Background" className="image2" />
            <div className="container">
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
                                <input type="text" required />
                                <label>Username</label>
                                <i className="bx bx-user icon"></i>
                                <div className="error-message" id="user-error">This field is required</div>
                            </div>
                            <div className="input-box1">
                                <input type="email" required />
                                <label>Email Address</label>
                                <i className="bx bx-mail-send icon"></i>
                            </div>
                            <div className="input-box1">
                                <input type="password" required />
                                <label>Password</label>
                                <i className="bx bx-lock-alt icon"></i>
                                <div id="password-error" className="error-message">Please enter a password</div>
                            </div>
                            <div className="remember-me">
                                <input type="checkbox" id="remember" className="custom-checkbox" />
                                <label htmlFor="remember">I accept all terms and conditions</label>
                            </div>
                            <button type="submit" className="btn">Create Account</button>
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

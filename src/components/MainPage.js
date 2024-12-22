import React from 'react';
import '../styles/MainPage.css';
import { Link } from 'react-router-dom';


function MainPage() {
  return (
    <div className="homepage">
      <header className="header">
  <div className="logo">CalmMap</div>
  <nav className="nav">
  <Link to="/login"><button className="nav-button">Sign in</button></Link>
  <Link to="/create"><button className="nav-button primary">Get CalmMap</button></Link>
  </nav>
</header>
      <main className="main-content">
        
      <section className="workspace">
      <div className="content">
        <h1 className="title">The happier workspace</h1>
        <p className="subtitle">
          Think. Collaborate. Thrive. <br />
          Design your day, your way
        </p>
        <div className="buttons">
        </div>
      </div>
      <div className="image">
        <img src="/MP0.png" alt="Collaboration" />
      </div>
    </section>

        <blockquote className="quote">
        “It does not matter how slowly you go so long as you do not stop.”
        </blockquote>


        <section className="features">
          <div className="feature">
            <img src="/MP1.png" alt="Feature 1" />
            <p>Consider everyone's opinion: create surveys about your plans</p>
          </div>
          <div className="feature">
            <img src="/MP2.png" alt="Feature 2" />
            <p>Plan your time correctly: the application includes a timer, stopwatch, and pomodoro counter</p>
          </div>
          <div className="feature">
            <img src="/MP3.png" alt="Feature 3" />
            <p>Plan events and connect with friends and colleagues without leaving home</p>
          </div>
        </section>

        <section className="workflow">
          <h2>Your workflow. Your way.</h2>
          <p>All your projects, goals, calendars, and more — in one tool personalized to you and your team.</p>
          <div className="workflow-details">
            <div>
              <h3>Custom views</h3>
              <p>Visualize work in any format, from calendars to boards.</p>
            </div>
            <div>
              <h3>Automations</h3>
              <p>Put tedious tasks on autopilot.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 CalmMap</p>
        <div className="footer-links">
          <a href="#about-us">About us</a>
          <a href="#feedback">Feedback</a>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import CreateAccountPage from './components/CreatePage';
import './styles/LoginPage.css';

function App() {
  return (
    <Router>
      <div>
        <img src={`${process.env.PUBLIC_URL}/grad1.png`} alt="First Image" className="image1" />
        <img src={`${process.env.PUBLIC_URL}/grad2.png`} alt="Second Image" className="image2" />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/create" element={<CreateAccountPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

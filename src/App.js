import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import CreateAccountPage from './components/CreatePage';
import ChatSupport from './components/ChatSupport';
import MainPage from './components/MainPage';  // Импортируем компонент MainPage
import './styles/MainPage.css';
import PersonalAccount from './components/PersonalAccount';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<MainPage />} />
        {/* Страница входа */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/create" element={<CreateAccountPage />} />
      </Routes>
    </Router>
  );
};

export default App;

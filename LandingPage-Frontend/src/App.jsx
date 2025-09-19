import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/headerfotter/Header';
import LandingPage from './component/landingpage/LandingPage';
import Registration from './component/auth/Registration';
import Login from './component/auth/Login';
import ForgotPassword from "./component/auth/ForgotPassword";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;

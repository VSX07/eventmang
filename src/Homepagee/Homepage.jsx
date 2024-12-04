import React from 'react';
import Nnavbar from '../components/Nnavbar.jsx';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  
return (
<div className="home-page">
    <div className="hero-background">
     
      <div className="hero-content">
        <h1>Welcome to Our Event Management</h1>
        <p>Creating Unforgettable Events, Just for You</p>
        {/* <button className="cta-button">Get Started</button> */}\
        <button onClick={() => navigate('/Register')} className="cta-button">Get Started</button>
      </div>
    </div>
    <footer className="footer">
      <p>© 2024 Event Management Inc. All rights reserved.</p>
    </footer>
  </div>
);
  
};

export default Homepage;

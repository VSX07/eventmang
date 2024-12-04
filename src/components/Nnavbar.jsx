import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/apiActions';
import './Navbar.css';

const Nnavbar = () => {
  const { Loginuser } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatch the logout action
    navigate('/'); // Navigate to the homepage or another route
  };

  // Redirect to the About Us page
  const goToAbout = () => {
    navigate('/about');
  };

  // Redirect to the Contact Us page
  const goToContact = () => {
    navigate('/contact');
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Event Management</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a onClick={goToAbout} >About Us</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a onClick={goToContact} >Contact</a></li>
        {!Loginuser ? (
          <>
            <li>
              <button onClick={() => navigate('/Register')} className="auth-button">Register</button>
            </li>
            <li>
              <button onClick={() => navigate('/login')} className="auth-button">Login</button>
            </li>
          </>
        ) : (
          <li>
            <button onClick={handleLogout} className="auth-button">Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nnavbar;

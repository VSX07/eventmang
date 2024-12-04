import React, { useState } from 'react';
import './RegistrationForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/actions/apiActions';

function RegistrationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Registerloading, Registererror, Registeruser } = useSelector((state) => state.api);  // Accessing Redux state

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the register action with the form data
    dispatch(registerUser(formData));
  };

  // If registration is successful, navigate to login page
  if (Registeruser) {
    navigate('/login');
  }
  if(Registererror){
    alert("not called");
  }

  return (
    <div className="home-page">
    <div className="hero-background">
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
          {Registerloading ? 'Registering...' : 'Register'}
        </button>
      </form>

      {Registererror && <p className="error">{Registererror}</p>}
    </div>
    </div>
    </div>
  );
}

export default RegistrationForm;

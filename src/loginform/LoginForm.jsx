import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './LoginForm.css';
import { loginUser } from '../redux/actions/apiActions';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Loginloading, Loginerror, Loginuser } = useSelector((state) => state.api); 


  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (Loginuser) {
      console.log('User logged in:', Loginuser);
      navigate('/EventList');
      // alert('Logged in successfully');
      // navigate('/EventList'); // Uncomment if needed
    }
  }, [Loginuser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
    console.log('Login Data:1234', Loginuser);

    // navigate('/EventList');
  };
  // console.log("Loginuser---")
  // if(Loginuser)
  // {
  //   alert("logged in successfully")
  // }

  return (
    <div className="home-page">
    <div className="hero-background">
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default LoginForm;

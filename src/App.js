import React from 'react';
import './App.css';
import RegistrationForm from './Registration/RegistrationForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './loginform/LoginForm';
import Homepage from './Homepagee/Homepage';
import store from '../src/redux/ store'; // Corrected path
import { Provider } from 'react-redux';
import Nnavbar from './components/Nnavbar';
import EventList from './Listofevents/EventList';
import EventForm from './Listofevents/EventForm';
import AboutUs from './navbarcomponents/aboutus';
import ContactUs from './navbarcomponents/contactus';

function App() {
  return (
    <Provider store={store}>
      <Router>

        <>
          <Nnavbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
            <Route path="/Register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/EventList" element={<EventList />} />
            <Route path="/add-event" element={<EventForm />} />
          </Routes>
        </>
      </Router>
    </Provider>
  );
}

export default App;


import './EventCard.css'; // Add your custom styling here
import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { enroll } from '../redux/actions/apiActions';

const EventCard = ({ id,title, image, description, date }) => {
    const [isEnrolled, setIsEnrolled] = useState(false);

    const { Loginuser } = useSelector((state) => state.api);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      if (Loginuser.events && Loginuser.events.includes(id)) {
          setIsEnrolled(true); // Set as enrolled if the event id exists in user's events
      }
  }, [Loginuser, id]); 

    const handleEnroll = () => {
      setIsEnrolled(true); // Update the state to "enrolled"
      console.log('Login Data:1234', Loginuser);
      let req={
        userId:Loginuser._id,
        eventId:id
      }
      dispatch(enroll(req));
    };
  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-image" />
      <div className="event-content">
        <h2 className="event-title">{title}</h2>
        <p className="event-description">{description}</p>
        <p className="event-date">{date}</p>
        <button
          className={`enroll-button ${isEnrolled ? 'enrolled' : ''}`}
          onClick={handleEnroll}
          disabled={isEnrolled} // Disable the button once enrolled
        >
          {isEnrolled ? 'Enrolled' : 'Enroll Now'}
        </button>
      </div>
    </div>
  );
};

export default EventCard;

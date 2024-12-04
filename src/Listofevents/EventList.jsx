import React, { useEffect,useState } from 'react';
import EventCard from './EventCard';
import './EventList.css'; // Add styling for the layout
import { useNavigate } from 'react-router-dom';
import { loginUser,event } from '../redux/actions/apiActions';
import { useDispatch, useSelector } from 'react-redux';



const EventList = () => {
    const navigate = useNavigate();
    const { Loginloading, Loginerror, Loginuser } = useSelector((state) => state.api); 
    const { Eventloading, Eventerror, Event } = useSelector((state) => state.api); 
    const [isAdmin, setIsAdmin] = useState(false);
    const dispatch = useDispatch();

    const handleNavigate = () => {
        navigate('/add-event'); // Path to the form page
    };

    const events = [
        {
          title: 'Music Concert',
          image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
          description: 'Join us for an unforgettable night of live music.',
          date: '2024-12-01',
        },
        {
          title: 'Art Exhibition',
          image: 'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
          description: 'Explore the stunning artworks from local artists.',
          date: '2024-12-15',
        },
        {
          title: 'Tech Conference',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
          description: 'Discover the latest trends in technology and innovation.',
          date: '2024-12-20',
        },
        {
            title: 'Tech Conference-2',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
            description: 'Discover the latest trends in technology and innovation.',
            date: '2024-12-20',
          },
        
      ];

      useEffect(()=>{
        dispatch(event());
         if(Loginuser.role &&Loginuser.role==='admin' ){
          setIsAdmin(true);
         }
      },[Loginuser])

  return (
    <div className="home-page">
    <div className="hero-background">
    <div className="event-list">
      {Event && Event.map((event, index) => (
        <EventCard
          key={index}
          id={event._id}
          title={event.title}
          image={event.image}
          description={event.description}
          date={event.date}
        />
        
      ))}
     { isAdmin && <button onClick={handleNavigate}>Add New Event</button>
     }
    </div>
    </div>
    </div>
  );
};

export default EventList;

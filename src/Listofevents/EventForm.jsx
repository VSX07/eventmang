import React, { useState } from 'react';
import './EventForm.css';
import { useDispatch } from 'react-redux';
import { addevent } from '../redux/actions/apiActions';

const EventForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        place: '',
        date: '',
        description: '',
        image: '', // URL input for the image
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addevent(formData));
        console.log('Form Data:', formData);
        // Send data to backend if needed
    };

    return (
        <div className="home-page">
            <div className="hero-background">
                <div className="form-container">
                    <h1>Add New Event</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Event Name</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Venue</label>
                            <input
                                type="text"
                                name="place"
                                value={formData.place}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Event Type</label>
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Image URL</label>
                            <input
                                type="url"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                required
                                placeholder="Enter image URL"
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventForm;


import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
function Admin() {
    const [task, setTask] = useState({ title: '', description: '', assignedTo: '' });

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/tasks', task);
            alert('Task assigned successfully!');
        } catch (err) {
            console.error(err);
        }
    };

    

    return (
        <div className="container">
            <h2>Assign a Task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
                <textarea name="description" placeholder="Description" onChange={handleChange} required></textarea>
                <input type="text" name="assignedTo" placeholder="Assign to" onChange={handleChange} required />
                <button type="submit" className="btn btn-primary">Assign Task</button>
            </form>
        </div>
    );
}

export default Admin;
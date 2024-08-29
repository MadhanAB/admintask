import React from 'react';
import axios from 'axios';

function Tasklist({ tasks, setTasks }) {
    const handleStart = async (id) => {
        try {
            const res = await axios.put(`http://localhost:5000/api/tasks/start/${id}`);
            setTasks(tasks.map(task => (task._id === id ? res.data : task)));
        } catch (err) {
            console.error(err);
        }
    };

    const handleStop = async (id) => {
        try {
            const res = await axios.put(`http://localhost:5000/api/tasks/stop/${id}`);
            setTasks(tasks.map(task => (task._id === id ? res.data : task)));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="list-group">
            {tasks.map(task => (
                <div key={task._id} className="list-group-item">
                    <h5>{task.title}</h5>
                    <p>{task.description}</p>
                    <p>Status: {task.status}</p>
                    <button
                        className="btn btn-success"
                        onClick={() => handleStart(task._id)}
                        disabled={task.status !== 'assigned'}
                    >
                        Start Task
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => handleStop(task._id)}
                        disabled={task.status !== 'in-progress'}
                    >
                        Stop Task
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Tasklist;
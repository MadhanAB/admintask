
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './Tasklist';


function Employee() {
      
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/tasks/demos`);
                setTasks(res.data);
            } catch (err) {
                console.error('Error fetching tasks:', err);
            }
        };
        fetchTasks();
    }, );

    return (
        <div className="cont">
            <h2>Tasks for </h2>
            {tasks.length > 0 ? (
                <TaskList tasks={tasks} setTasks={setTasks} />
            ) : (
                <p>No tasks assigned.</p>
            )}
        </div>
    );
}

export default Employee;
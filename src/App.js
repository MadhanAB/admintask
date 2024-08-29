

import React from 'react';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import Employee from './Employee';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
       <>
            <div className="content">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/admin">Admin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/employee/john">Employee</a> 
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container mt-4">
                    <Routes>
                        
                        <Route path="/admin" element={<Admin />} />

                        <Route path="/employee/:name" element={<Employee />} />
                    </Routes>
                </div>
            </div>
            </>
    );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Screens/SLogin';
import Signup from './Screens/SSignUp';
import SConfigurationDashboard from './Screens/SConfigurationDashboard';

//function App() {
//    return (
//        <Router>
//            <Routes>
//                <Route path="/login" element={<Login />} />
//                <Route path="/signup" element={<Signup />} />
//                <Route path="/dashboard" element={<SConfigurationDashboard />} />
//                <Route path="/" element={<Navigate to="/login" />} />
//            </Routes>
//        </Router>
//    );
//}

function App() {
    return (
        <SConfigurationDashboard/>
    );
}

export default App;

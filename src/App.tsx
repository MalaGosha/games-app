import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
    return (
        <Routes>
            <Route path="/login-page" element={<LoginPage />} />
            <Route path="/main-page" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default App;

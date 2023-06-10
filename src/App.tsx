import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import LoginPage from './pages/LoginPage/LoginPage';
import ContextProvider from './context/ContextProvider';

function App() {
    return (
        <>
        <ContextProvider>
            <Routes>
                <Route path="/login-page" element={<LoginPage />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </ContextProvider>
        </>
    );
}

export default App;

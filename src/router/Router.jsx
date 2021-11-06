import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Contact from '../pages/contact/Contact';
import Home from '../pages/Home/Home';

const mainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<h1>Hello About</h1>}/>
            <Route path="/services" element={<h1>Hello Services</h1>}/>
        </Routes>
    );
};

export default mainRouter;
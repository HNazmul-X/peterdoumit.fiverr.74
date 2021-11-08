import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Contact from '../pages/contact/Contact';
import FaqPage from '../pages/FAQPage/FaqPage';
import Home from '../pages/Home/Home';
import Services from '../pages/Services/Services';

const mainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/faq" element={<FaqPage/>}/>
            <Route path="/services" element={<Services/>}/>
        </Routes>
    );
};

export default mainRouter;
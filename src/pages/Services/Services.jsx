import React from 'react';
import Header from "../../Components/Header/Header"
import ServicesSection from './OurServices';

const Services = () => {
    return (
        <main id="services-page">
            <Header titleLg={true}  title="Our Services"/>
            <ServicesSection/>
        </main>
    );
};

export default Services;
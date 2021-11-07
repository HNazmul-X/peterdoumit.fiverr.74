import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import ContactUsForm1 from './ContactUsForm';
import WorkedWith from "../Home/WorkedWith"

const Contact = () => {

    useEffect(()=> {
        const header = document.querySelector("#contact-page .header__text-wrapper .header__text h1")
        window.addEventListener("scroll", function(e) {
            const moving = this.window.scrollY
            header.style.cssText = `transform:translateY(-${(0.9*moving)/3}px)`

        })
    },[])


    return (
        <main id="contact-page">
            <Header title="About Us"/>
            <ContactUsForm1/>
            <WorkedWith/>
        </main>
    );
};

export default Contact;
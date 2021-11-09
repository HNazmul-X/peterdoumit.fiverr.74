import React from "react";
import Header from "../../Components/Header/Header";
import Business from "./Business";
import Testimonials from "./Testomonitals";
import WhatWeDo from "./WhatWeDo";

const Home = () => {
    return (
        <>
            <Header title={<span>WE BUILD UNIQUE <br /> DIGITAL INSTRUMENTS <br /> FOR YOUR BUSINESS.</span>}></Header>
            <WhatWeDo></WhatWeDo>
            <Testimonials />
            <Business />
        </>
    );
};

export default Home;

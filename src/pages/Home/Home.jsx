import React from "react";
import Header from "../../Components/Header/Header";
import Business from "./Business";
import Testimonials from "./Testomonitals";
import WhatWeDo from "./WhatWeDo";

const Home = () => {
    return (
        <>
            <Header
                title="WE BUILD UNIQUE DIGITAL INSTRUMENTS FOR YOUR BUSINESS."></Header>
            <WhatWeDo></WhatWeDo>
            <Testimonials/>
            <Business/>
        </>
    );
};

export default Home;

import React from "react";
import Header from "../../Components/Header/Header";
import FeaturedWork from "./FeaturedWork";
import WhatWeDo from "./WhatWeDo";
import WorkedWith from "./WorkedWith";

const Home = () => {
    return (
        <>
            <Header></Header>
            <WhatWeDo></WhatWeDo>
            <FeaturedWork/>
            <WorkedWith/>
        </>
    );
};

export default Home;

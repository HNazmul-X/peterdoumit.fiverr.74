import React from "react";
import Header from "../../Components/Header/Header";
import FeaturedWork from "./FeaturedWork";
import WhatWeDo from "./WhatWeDo";

const Home = () => {
    return (
        <>
            <Header></Header>
            <WhatWeDo></WhatWeDo>
            <FeaturedWork/>
        </>
    );
};

export default Home;

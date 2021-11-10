import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import WhatWeDoCard from "../../Components/whatWeDoCard/WhatWeDoCard";
import {ServicesIconAndTextData} from "../../Data/homeData"

const WhatWeDo = () => {
    

    return (
        <section id="what-we-do">
            <div className="container-xxl">
                <SectionTitle className={"mb-5 text-center text-uppercase"} title="What We do">
                </SectionTitle>
                
                <div className="row row-cols-1 col-12 col-lg-10 row-cols-sm-2 col-12 mx-auto row-cols-lg-2">
                    {ServicesIconAndTextData?.map((data,index) => (
                        <div key={index} className="col mb-4 my-aos-animation fade-up"> 
                            <WhatWeDoCard data={data}/>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhatWeDo;

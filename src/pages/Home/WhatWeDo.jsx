import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ServiceTypeIconText from "../../Components/ServiceTypeIconText/ServiceTypeIconText";
import {ServicesIconAndTextData} from "../../Data/homeData"

const WhatWeDo = () => {
    

    return (
        <section id="what-we-do">
            <div className="container-xxl">
                <SectionTitle title="Our services">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, dicta. <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat eligendi est?
                </SectionTitle>
                
                <div className="row row-cols-1 row-cols-sm-2 col-12 col-md-8 col-lg-12 mx-auto row-cols-lg-5">
                    {ServicesIconAndTextData?.map(data => (
                        <div className="col"> 
                            <ServiceTypeIconText services={data}/>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhatWeDo;

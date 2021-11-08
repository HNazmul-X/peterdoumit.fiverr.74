import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import WhatWeDoCard from "../../Components/whatWeDoCard/WhatWeDoCard";
import {ServicesIconAndTextData} from "../../Data/homeData"

const WhatWeDo = () => {
    

    return (
        <section id="what-we-do">
            <div className="container-xxl">
                <SectionTitle title="What we do">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, dicta. <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat eligendi est?
                </SectionTitle>
                
                <div className="row row-cols-1 row-cols-sm-2 col-12 mx-auto row-cols-lg-3">
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

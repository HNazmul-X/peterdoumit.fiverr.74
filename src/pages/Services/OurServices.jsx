import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";

const ServicesSection = () => {
    return (
        <section id="services_section">
            <div className="container-xxl">
                <SectionTitle title="Our Services"/>
                <div className="row">
                    <div className="left-site col-12 col-md-7 col-lg-5 mx-auto">
                        {[...new Array(3)].map((item,index) => (
                            <ServicesCard serial={index} />
                        ))}
                    </div>
                    {<div className="right-site col-12 col-md-7 col-lg-5 mx-auto mt-0 mt-lg-5 pt-0 pt-lg-5">
                        {[...new Array(3)].map((item,index) => (
                            <ServicesCard serial={index} />
                        ))}
                    </div>}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

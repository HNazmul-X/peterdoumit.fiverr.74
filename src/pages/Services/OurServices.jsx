import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import { serviePageDataFirst, serviePageDataSecond } from "../../Data/homeData";

const ServicesSection = () => {

    console.log(serviePageDataFirst, serviePageDataSecond)

    return (
        <section id="services_section">
            <div className="container-xxl">
                <SectionTitle title="Our Services"/>
                <div className="row">
                    <div className="left-site col-12 col-md-7 col-lg-5 mx-auto">
                        {
                            serviePageDataFirst.map((item,index) => <ServicesCard data={item} serial={index} /> )
                        }

                    </div>


                    <div className="right-site col-12 col-md-7 col-lg-5 mx-auto">
                        {
                            serviePageDataSecond.map((item,index) => <ServicesCard data={item} serial={index} /> )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";

const ServicesSection = () => {
    const sliders = 5;

    /* useEffect(() => {
        setSliderHeight(document.getElementById("services-animation-card-slider").clientHeight);
    }) */

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
                    {<div className="right-site col-12 col-md-7 col-lg-5 mx-auto">
                        {[...new Array(3)].map((item,index) => (
                            <ServicesCard serial={index} />
                        ))}
                    </div>}
                </div>

                {/* <div className="slider-wrapper">
                    <section id="services-animation-card-slider" className="slider-pages">
                        {[...new Array(sliders)].map((el, i) => (
                            <article className={`js-scrolling__page js-scrolling__page-${i+1} ${i===0?"js-scrolling--active":""}`}>
                                <div className="services-card">{i+1}</div>
                            </article>
                        ))}
                    </section>
                </div> */}
            </div>
        </section>
    );
};

export default ServicesSection;

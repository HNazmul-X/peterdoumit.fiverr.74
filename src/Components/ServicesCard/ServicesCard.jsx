import React, { useRef } from "react";

const ServicesCard = (props) => {

    const {data} = props;
    const servicesCard = useRef(null);


    return (
        <div ref={servicesCard} id="services-card" className="my-aos-animation fade-up">
            <div className="services-card__thumbnail">
                <img src={data.image} alt="" />
            </div>
            <div className="services-card__details">
                <h4>{data.title}</h4>
                <p></p>
                <div className="text-center">
                    <button className="btn mt-2 btn-outline-light fs-5 border-2">{data.description}</button>
                </div>
            </div>

            <div className="circle"></div>
        </div>
    );
};

export default ServicesCard;

import React, { useRef } from "react";

const ServicesCard = ({serial}) => {
    const animationCircle = useRef(null);
    const servicesCard = useRef(null);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         const { top } = servicesCard.current.getBoundingClientRect();
    //         console.log(serial,top);
    //     });
    // }, [serial]);

    return (
        <div ref={servicesCard} id="services-card">
            <div className="services-card__thumbnail">
                <img src="https://www.creative-tim.com/blog/content/images/wordpress/2019/07/opt_pk_react_thumbnail.jpg" alt="" />
            </div>
            <div className="services-card__details">
                <h4>I'd like more conversions</h4>
                <p>We help invent your company’s digital presence with extraordinary and impactful frameworks, designed to captivate and engage a prospective demographic.</p>
                <div className="text-center">
                    <button className="btn mt-2 btn-outline-light fs-5 border-2">Contact Us Now</button>
                </div>
            </div>

            <div ref={animationCircle} className="animation-circle"></div>
        </div>
    );
};

export default ServicesCard;

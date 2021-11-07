import React from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import TestimonialsCard from '../../Components/TestimonialsCard/TestimonialsCard';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Testomonitals = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section id="testimonials">
            <div className="container-xxl">
            <SectionTitle title="Testimonials">What Our Client Says</SectionTitle>
                <Slider {...settings}>
                    {[...new Array(5)].map((data) => (
                        <TestimonialsCard />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testomonitals;

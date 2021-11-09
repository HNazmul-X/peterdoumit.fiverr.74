import React from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import TestimonialsCard from '../../Components/TestimonialsCard/TestimonialsCard';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { TestimonialData } from '../../Data/homeData';

const Testomonitals = () => {
    
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
    };
    return (
        <section id="testimonials">
            <div className="container-xxl">
                <SectionTitle title="Testimonials.">HERE'S WHAT OUR CLIENTS HAVE TO SAY ABOUT US.</SectionTitle>
                <Slider {...settings}>
                    {/* {[...new Array(5)].map((data) => (
                        <TestimonialsCard />
                    ))} */}

                    {TestimonialData.map((el) => (
                        <TestimonialsCard data={el} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testomonitals;

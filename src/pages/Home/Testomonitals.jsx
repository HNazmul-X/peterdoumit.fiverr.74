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
    };
    return (
        <section id="testimonials">
            <div className="container-xxl">
                <span style={{textAlign: 'center', fontWeight: '600', color: 'rgba(0, 0, 0, 0.6)', display: 'block', marginBottom: '-30px', marginTop: '30px'}}><b>TESTIMONIALS</b></span>
            <SectionTitle title="HERE'S WHAT OUR CLIENTS HAVE TO SAY ABOUT US.">What Our Client Says</SectionTitle>
                <Slider {...settings}>

                    {/* {[...new Array(5)].map((data) => (
                        <TestimonialsCard />
                    ))} */}

                    {
                        TestimonialData.map(el => <TestimonialsCard data={el} />)
                    }


                </Slider>
            </div>
        </section>
    );
};

export default Testomonitals;

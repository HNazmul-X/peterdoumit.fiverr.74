import React from 'react';
// import TESTIMONIALS_PROFILE from "../../Images/testimonials-profile.png";
import FILL_STAR from "../../Images/icon/fillstar.svg"
import UNFILL_STAR from "../../Images/icon/unfill-star.svg"


const TestimonialsCard = (props) => {

    const testimonialData = props.data;
    const review = 5;
    
    return (
        <div id="testimonials-card">
            <div className="testimonials-card__container">
                <div className="testimonials-card__review-text">
                    <p>
                       {
                           testimonialData.review
                       }
                    </p>
                </div>

                <div className="d-flex justify-content-center my-3 testimonials-card__review-stars">
                    {[...new Array(review)].map((item, index) => (
                        <img className="star unfill-star" style={{ "--delay": `${800 + index * 100}ms` }} width={40} src={FILL_STAR} alt="" />
                    ))}
                    {[...new Array(5-review)].map((item, index) => (
                        <img className="star fill-star" style={{ "--delay": `${800 + (index * 100)+(review*100)}ms` }} width={40} src={UNFILL_STAR} alt="" />
                    ))}
                </div>
                <div className="testimonials-card__user-info">
                    <h4 className="name">{testimonialData.name }</h4>
                    <p className="title">{testimonialData.proffesion}</p>
                    <img src={testimonialData.image} className="profile" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCard;
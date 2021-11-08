import React from "react";

const ContactUsForm1 = () => {
    return (
        <section id="contact-us-form">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-6 text-light px-1 px-md-2 px-lg-4">
                        <h1 className="display-1 fw-bolder text-light">Say Hello</h1>
                        <p className="pt-2 fs-5">
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, assumenda. consectetur adipisicing elit. Labore, autem?
                        </p>
                    </div>

                    <div className="col-md-6 text-light px-1 px-md-2 form-area px-lg-4">
                        <div className="contact-form-input_wrapper">
                            <input placeholder={"Enter Your Email"} type="email" name="" id="" className="form-control contact-form-input" />
                        </div>
                        <div className="contact-form-input_wrapper">
                            <input placeholder={"Enter Your Name"} type="email" name="" id="" className="form-control contact-form-input" />
                        </div>
                        <div className="contact-form-input_wrapper">
                            <input placeholder={"Enter Your Mobile Number"} type="email" name="" id="" className="form-control contact-form-input" />
                        </div>
                        <div className="contact-form-input_wrapper">
                            <input placeholder={"Enter Your Organization Name"} type="email" name="" id="" className="form-control contact-form-input" />
                        </div>
                        <div className="contact-form-input_wrapper">
                            <textarea name="massage" id="massage" rows="7" placeholder="Write Your massage" className="form-control contact-form-input"></textarea>
                        </div>
                        <div className="text-center">
                            <button className="btn mt-3 btn-outline-light border-3 fs-5 col-10 col-md-8 col-lg-6">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsForm1;

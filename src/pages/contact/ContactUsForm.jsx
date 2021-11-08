import React from "react";
import './contactUs.css';

const ContactUsForm1 = () => {
    return (
        <section id="contact-us-form">
                        <section class="contact-form-section">
                    <div class="container">
                        <div class="container px-5">    
                            <div class="the-form">
                                <div class="title">
                                    <h2>SAY HELLO!  </h2>
                                </div>
                                <div class="after"></div>
                                <div class="description">
                                    <p>Introduce yourself and your business <br /> and we'll get back to you shortly.</p>
                                </div>
                                <form action="hello@doumitdigital.com.au">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control" id="floatingInput" placeholder="Your Name" />
                                                <label for="floatingInput">Your Name</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control" id="floatingPassword" placeholder="Your Email" />
                                                <label for="floatingPassword">Your Email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name=""  cols="30" rows="6"></textarea>
                                        <label for="floatingTextarea2">Comments</label>
                                    </div>
                                    <div class="submit">
                                        <input type="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
        </section>
    );
};

export default ContactUsForm1;

import React from 'react';

const ContactUsForm1 = () => {
    return (
        <section id="contact-us-form">
            <div className="container-xxl">
                <div className="form-area">
                    <h1 className="display-1 headline text-center fw-bolder">CONTACT</h1>
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col mb-3 mb-lg-4 px-3">
                            <input placeholder="Enter Your Email" type="text" className="cm-form-field form-control fst-italic fs-5 fw-bold" />
                        </div>
                        <div className="col mb-3 mb-lg-4 px-3">
                            <input placeholder="Enter Your Email" type="text" className="cm-form-field form-control fst-italic fs-5 fw-bold" />
                        </div>
                        <div className="col mb-3 mb-lg-4 px-3">
                            <input placeholder="Enter Your Email" type="text" className="cm-form-field form-control fst-italic fs-5 fw-bold" />
                        </div>
                        <div className="col mb-3 mb-lg-4 px-3">
                            <input placeholder="Enter Your Email" type="text" className="cm-form-field form-control fst-italic fs-5 fw-bold" />
                        </div>
                    </div>

                    <textarea name="" id="" cols="30" rows="7" className="cm-form-field form-control fst-italic fs-5 fw-bold"></textarea>
                </div>
            </div>
        </section>
    );
};

export default ContactUsForm1;
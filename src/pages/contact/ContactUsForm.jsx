import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const ContactUsForm1 = () => {
    return (
        <section id="contact-us-form">
            <div className="container-xxl">
                <SectionTitle className="mb-3" title={"Contact us"}>Introduce yourself and your business and we'll get back to you shortly.</SectionTitle>
                <div className="form-area col-12 col-md-11 col-lg-9 mx-auto col-xxl-8">
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <input type="text" placeholder="Name" className="cm-input-field" />{" "}
                        </div>
                        <div className="col-md-6 mb-2">
                            <input type="text" placeholder="Email" className="cm-input-field" />{" "}
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6 mb-2">
                            <input type="text" placeholder="Company" className="cm-input-field" />{" "}
                        </div>
                        <div className="col-md-6 mb-2">
                            <input type="text" placeholder="Phone" className="cm-input-field" />{" "}
                        </div>
                    </div>
                    <textarea name="" placeholder="Write your massage" id="" cols="30" rows="7" className="cm-input-field mt-2"></textarea>

                    <div className="text-center mt-3">
                        <button type="submit" className="">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsForm1;

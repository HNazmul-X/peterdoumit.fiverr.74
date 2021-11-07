import React from "react";
import "./Faq.css";

const Faq = () => {
    return (
        <>
            <div className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 mb-2">
                            <div className="CustomFaq" id="accordion">
                                <div className="card">
                                    <div className="card-header" id="faqHeading-1">
                                        <div className="mb-0">
                                            <h5 className="faq-title" data-bs-toggle="collapse" data-bs-target="#faqCollapse-1">
                                                What is Lorem Ipsum?
                                            </h5>
                                        </div>
                                    </div>

                                    <div id="faqCollapse-1" className="collapse faq-content-body" aria-labelledby="faqHeading-1" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesettingen an unknown printer took a galley of type and scrambled it to make a type specimen
                                                book.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 offset-md-2 mb-2">
                            <div className="CustomFaq" id="accordion">
                                <div className="card">
                                    <div className="card-header" id="faqHeading-2">
                                        <div className="mb-0">
                                            <h5 className="faq-title" data-bs-toggle="collapse" data-bs-target="#faqCollapse-2" aria-expanded="true" aria-controls="faqCollapse-2">
                                                What is Lorem Ipsum?
                                            </h5>
                                        </div>
                                    </div>

                                    <div id="faqCollapse-2" className="collapse faq-content-body" aria-labelledby="faqHeading-2" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesettingen an unknown printer took a galley of type and scrambled it to make a type specimen
                                                book.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 offset-md-2 mb-2">
                            <div className="CustomFaq" id="accordion">
                                <div className="card">
                                    <div className="card-header" id="faqHeading-2">
                                        <div className="mb-0">
                                            <h5 className="faq-title" data-bs-toggle="collapse" data-bs-target="#faqCollapse-3" aria-expanded="true" aria-controls="faqCollapse-3">
                                                What is Lorem Ipsum?
                                            </h5>
                                        </div>
                                    </div>

                                    <div id="faqCollapse-3" className="collapse faq-content-body" aria-labelledby="faqHeading-3" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesettingen an unknown printer took a galley of type and scrambled it to make a type specimen
                                                book.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 offset-md-2 mb-2">
                            <div className="CustomFaq" id="accordion">
                                <div className="card">
                                    <div className="card-header" id="faqHeading-2">
                                        <div className="mb-0">
                                            <h5 className="faq-title" data-bs-toggle="collapse" data-bs-target="#faqCollapse-4" aria-expanded="true" aria-controls="faqCollapse-4">
                                                What is Lorem Ipsum?
                                            </h5>
                                        </div>
                                    </div>

                                    <div id="faqCollapse-4" className="collapse faq-content-body" aria-labelledby="faqHeading-4" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesettingen an unknown printer took a galley of type and scrambled it to make a type specimen
                                                book.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 offset-md-3 mt-5">
                            <div className="faq-title text-center">
                                <h2>Still Have Any Question ?</h2>
                            </div>

                            <div className="faq-button text-center mt-2">
                                <button>Contact Us Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;

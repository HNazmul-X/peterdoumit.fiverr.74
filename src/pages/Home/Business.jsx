import React from 'react';
import SECTION_BG from "../../Images/handshake.jpg";

const Business = () => {

    return (
        <section id="business">
            <div className="container-xxl text-center">
                <h1 className="display-1 fw-bold text-light">LET'S BUILD SOMETHING GREAT TOGETHER!</h1>
                <button className="mt-4 btn btn-outline-light border-3 fs-4">Call 1300 763 007</button>
            </div>

            <img src={SECTION_BG} alt="" className="section-bg" />
        </section>
    );
};

export default Business;
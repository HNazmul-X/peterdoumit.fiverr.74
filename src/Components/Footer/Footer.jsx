import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    useEffect(()=> {
        const footerStaticUpper = document.querySelector("#footer .footer-static-upper");
        const footerParallax = document.querySelector("#footer .footer-fixed-parallax")
        window.addEventListener("scroll",function(e){
            const windowHeight = window.innerHeight
            const {top:elementfromtop} = footerStaticUpper.getBoundingClientRect()
            if((windowHeight - footerStaticUpper.clientHeight)>elementfromtop){
                footerParallax.style.cssText = "z-index:4"
            } else {
                footerParallax.style.cssText = "x-index:0"
            }
            
        })

        

    },[])

    return (
        <footer id="footer">
            <div className="footer-static-upper">
                <div className="container-xxl">
                    <h2 className="text-center">Business Address: 45 Simmat Ave, Condell Park NSW 2200</h2>
                </div>
            </div>

            <div className="footer-fixed-parallax">
                ``
                <div className="container-xxl text-center">
                    <h1 className="display-1 fw-bolder text-light">Say Hello</h1>
                    <p className="mt-3 fs-5 text-light col-12 col-lg-9 mx-auto">
                    Have a new project in mind? Schedule a 30 minute discovery call with our experts and we will at the very least give you some great advice.
                    </p>

                    <div className="col-12 mt-3 mx-auto col-md-8 col-lg-6">
                        <div className="input-group ">
                            <input type="text" placeholder="Enter Your Email" className="form-control fs-5 fw-bold fst-italic" />
                            <button className="input-group-text fs-5 fw-bold theme-bg-primary border-0 text-light">Submit</button>
                        </div>
                    </div>

                    <h1 className="display-4 mt-3 fw-bolder text-light">OR</h1>
                    <button className="p-2 px-lg-5 px-3 p-lg-3 fs-5 btn btn-outline-light border-3"><Link style={{ color: '#fff' }} to="/contact">Contact Us</Link></button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
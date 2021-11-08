import React, { useEffect } from 'react';

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
                    <div className="row">
                        <div className="col-md-6 text-start mb-5 mb-md-0">
                            <p>Lorem ipsum dolor sit adipisicing elit. Suscipit, deserunt.</p>
                            <p>Lorem ipsum dolor sit adipisicing elit. Suscipit, deserunt.</p>
                            <p>Lorem ipsum dolor adipisicing elit. Suscipit, deserunt.</p>
                        </div>
                        <div className="col-md-6 text-end">
                            <p>Lorem ipsum dolor sit amet consectetur, elit. Suscipit, deserunt.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, elit. Suscipit, deserunt.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, elit. Suscipit, deserunt.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-fixed-parallax">
                ``
                <div className="container-xxl text-center">
                    <h1 className="display-1 fw-bolder text-light">Say Hello</h1>
                    <p className="mt-3 fs-5 text-light col-12 col-lg-9 mx-auto">
                        Lorem ipsum dolor sit amet consectetur,psum dolor sit amet consectetur,psum dolor sit amet consectetur, adipisicing elit. Obcaecati provident enim tempora neque dicta voluptate
                        molestiae culpa quidem libero excepturi!
                    </p>

                    <div className="col-12 mt-3 mx-auto col-md-8 col-lg-6">
                        <div className="input-group ">
                            <input type="text" className="form-control fs-5 fw-bold fst-italic" />
                            <button className="input-group-text fs-5 fw-bold theme-bg-primary border-0 text-light">Submit</button>
                        </div>
                    </div>

                    <h1 className="display-4 mt-3 fw-bolder text-light">OR</h1>
                    <button className="p-2 px-lg-5 px-3 p-lg-3 fs-5 btn btn-outline-light border-3">Contact Us</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
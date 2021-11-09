import React, { useEffect, useState } from "react";
import NAV_LOGO  from "../../Images/nav-logo.png"
import { Link } from "react-router-dom";

const Nav = () => {
    const [isIconClicked, setIsIconClicked] = useState(false);

    useEffect(() => {
        const navitems = document.querySelectorAll("#navbar .navbar__navbar-link");
        navitems.forEach((element, index) => {
            element.style.cssText = `transition-delay:${100 * index}ms`;
        });
    }, []);
    const routes = [
        {
            path: "/",
            text: "Home",
        },
        {
            path: "/faq",
            text: "FAQ",
        },
        {
            path: "/services",
            text: "Services",
        },
        {
            path: "/contact",
            text: "Contact Us",
        },
    ];
    return (
        <nav id="navbar">
            <div className="container-xxl">
                <div className="content-wrapper">
                    <div className="navbar-brand">
                        <img src={NAV_LOGO} alt="" />
                    </div>
                    <div onClick={() => setIsIconClicked(!isIconClicked)} className={`${isIconClicked ? "clicked" : ""} navbar-icon`}>
                        <div className="icon-line line-1"></div>
                        <div className="icon-line line-2"></div>
                    </div>
                </div>
            </div>

            <div className={`${isIconClicked ? "clicked" : ""}  navbar-hidden-items `}>
                <div className="navbar__navbar-items_container container">
                    {routes.map((route) => (
                        <div className="navbar__navbar-items">
                            <Link to={route.path} onClick={()=> setIsIconClicked(!isIconClicked)}  className="navbar__navbar-link">
                                <h1>{route.text}</h1>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Nav;

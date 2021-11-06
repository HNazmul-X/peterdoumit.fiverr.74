import React, { useEffect, useState } from "react";

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
            path: "/about",
            text: "About",
        },
        {
            path: "/services",
            text: "Services",
        },
        {
            path: "/contact",
            text: "Contact",
        },
    ];
    return (
        <nav id="navbar">
            <div className="container-xxl">
                <div className="content-wrapper">
                    <div className="navbar-brand">
                        <h1 className="fw-bold">Bright</h1>
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
                            <a href={route.path} className="navbar__navbar-link">
                                <h1>{route.text}</h1>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Nav;

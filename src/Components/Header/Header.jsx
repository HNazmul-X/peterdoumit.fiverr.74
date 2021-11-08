import React, { useEffect } from "react";

const Header = ({ children, title, subtitle, titleLg }) => {
    useEffect(function () {
        const circle = document.querySelector("header .header-animation-circle");
        const header = document.querySelector("#header-header #header .header__text-wrapper .header__text h1");

        window.addEventListener("scroll", () => {
            const scrollingToTop = window.scrollY;
            circle.style.cssText = `clip-path:circle(${scrollingToTop / 4 + 10}% at 1% 99%)`;
            header.style.cssText = `transform:translateY(-${(0.9 * scrollingToTop) / 3}px)`;
        });
    }, []);

    return (
        <header id="header-header">
            <section id="header">
                <div className="video-container"></div>
                <div className="header__text-wrapper container-xxl">
                    <div className="header__text">
                        <h1 className={`${titleLg ? "text-c-lg" : ""}`}>{title}</h1>
                        <h4 className="mt-4">{subtitle && subtitle}</h4>
                        <div className="scroll-down">Scroll Down</div>
                    </div>
                </div>
            </section>

            <div className="header-spacer"></div>

            <svg width="100" id="header-svg" height="369" viewBox="0 0 100 369" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_48:201" fill="white">
                    <path d="M100 184.5C100 286.397 12.6955 369 -95 369C-202.696 369 -290 286.397 -290 184.5C-290 82.6035 -202.696 0 -95 0C12.6955 0 100 82.6035 100 184.5ZM-260.184 184.5C-260.184 270.816 -186.229 340.79 -95 340.79C-3.77118 340.79 70.1844 270.816 70.1844 184.5C70.1844 98.1835 -3.77118 28.2102 -95 28.2102C-186.229 28.2102 -260.184 98.1835 -260.184 184.5Z" />
                </mask>
                <path
                    d="M100 184.5C100 286.397 12.6955 369 -95 369C-202.696 369 -290 286.397 -290 184.5C-290 82.6035 -202.696 0 -95 0C12.6955 0 100 82.6035 100 184.5ZM-260.184 184.5C-260.184 270.816 -186.229 340.79 -95 340.79C-3.77118 340.79 70.1844 270.816 70.1844 184.5C70.1844 98.1835 -3.77118 28.2102 -95 28.2102C-186.229 28.2102 -260.184 98.1835 -260.184 184.5Z"
                    stroke="var(--primary-light)"
                    stroke-width="18"
                    mask="url(#path-1-inside-1_48:201)"
                />
            </svg>

            <div className="header-animation-circle"></div>
        </header>
    );
};

export default Header;

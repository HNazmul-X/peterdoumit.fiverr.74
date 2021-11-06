import React from 'react';

const Header = ({children}) => {
    return (
        <header>
            <section id="header">
                <div className="video-container"></div>
                <div className="header__text-wrapper container-xxl">
                    <div className="header__text">
                        <h1>
                            Design For <br /> impact
                        </h1>
                        <h4 className="mt-4">We're a design agency working with organizations that make a difference</h4>
                    </div>
                </div>
            </section>

            <div className="header-spacer"></div>
        </header>
    );
};

export default Header;
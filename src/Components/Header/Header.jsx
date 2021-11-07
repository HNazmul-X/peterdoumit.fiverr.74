import React from 'react';

const Header = ({children,title,subtitle}) => {
    return (
        <header>
            <section id="header">
                <div className="video-container"></div>
                <div className="header__text-wrapper container-xxl">
                    <div className="header__text">
                        <h1>
                            {title}
                        </h1>
                        <h4 className="mt-4">{subtitle&&subtitle}</h4>
                    </div>
                </div>
            </section>

            <div className="header-spacer"></div>
        </header>
    );
};

export default Header;
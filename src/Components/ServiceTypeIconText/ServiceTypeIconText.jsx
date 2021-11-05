import React from 'react';

const ServiceTypeIconText = ({services}) => {
    const {icon,text} = services
    return (
        <div className="services-type-icon-text">
            <div className="services-type-icon-text__icon">
                <img src={icon} alt="" />
            </div>
            <div className="services-type-icon-text__text">
                <h3>{text}</h3>
            </div>
        </div>
    );
};

export default ServiceTypeIconText;
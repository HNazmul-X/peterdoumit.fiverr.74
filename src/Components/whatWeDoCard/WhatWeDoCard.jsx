import React from 'react';

const WhatWeDoCard = ({data}) => {
    const {icon,title,desc} = data
    return (
        <div className="what-we-do-card">
            <div className="icon">
                <img src={icon} alt={`${icon}'s`} />
            </div>
            <div className="text">
                <h5>{title}</h5>
                <p className="">{desc}</p>
            </div>
            
        </div>
    );
};

export default WhatWeDoCard;
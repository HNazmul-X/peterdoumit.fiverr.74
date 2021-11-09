import React from 'react';

const SectionTitle = ({title,children,className}) => {
    return (
        <div className={className} id="sectionTitle">
            <h1 className="">{title}</h1>
            <div className="sectionTitle__text">{children}</div>
            <div className="line"></div>
        </div>
    );
};

export default SectionTitle;
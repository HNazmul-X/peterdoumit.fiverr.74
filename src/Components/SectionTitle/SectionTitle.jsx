import React from 'react';

const SectionTitle = ({title,children}) => {
    return (
        <div id="sectionTitle">
            <h1>{title}</h1>
            <div className="sectionTitle__text">{children}</div>
            <div className="line"></div>
        </div>
    );
};

export default SectionTitle;
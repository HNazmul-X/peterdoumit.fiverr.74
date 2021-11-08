import React from 'react';

const SectionTitle = ({title,children}) => {
    return (
        <div id="sectionTitle">
            <h1 className="text-center">{title}</h1>
            <div className="sectionTitle__text">{children}</div>
            <div className="line mx-auto"></div>
        </div>
    );
};

export default SectionTitle;
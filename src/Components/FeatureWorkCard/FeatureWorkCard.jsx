import { InlineIcon } from '@iconify/react';
import React from 'react';


const FeatureWorkCard = ({data}) => {
    return (
        <div className="feature-work-card-area">
            <div className="feature-work-card__image">
                <div className="image_overlay"></div>
                <img className="img-fluid" src={data?.image} alt="" />
            </div>

            <div className="feature-work-card__text">
                <h3 className="text__title">{data?.project_title}</h3>
                <h5 className="category__text">{data?.category}</h5>
                <InlineIcon className="iconify" icon="fluent:arrow-right-12-filled"/>
            </div>
            
        </div>
    );
};

export default FeatureWorkCard;
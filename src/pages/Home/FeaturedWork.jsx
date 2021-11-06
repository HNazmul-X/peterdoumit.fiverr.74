import React from 'react';
import FeatureWorkCard from '../../Components/FeatureWorkCard/FeatureWorkCard';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { featureWorkCardData } from '../../Data/featureWorkData';

const FeaturedWork = () => {
    return (
        <section id="featured-work">
            <div className="container-xxl">
                <SectionTitle></SectionTitle>
                <div className="row row-cols-1 col-sm-8 col-md-12 row-cols-md-2 row-cols-lg-3 mx-auto mt-3">
                    {featureWorkCardData.map((data) => (
                        <div className="col">
                            <FeatureWorkCard data={data} />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-3">
                    <button className="theme-bg-primary fs-5 theme-white-color border-0 p-3 px-5">View All Work</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
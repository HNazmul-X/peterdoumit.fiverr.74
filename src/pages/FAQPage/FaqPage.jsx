import React from 'react';
import Header from '../../Components/Header/Header';
import AnswerQuestion from './AnswerQuestion';

const FaqPage = () => {
    return (
        <main id="faq-page">
            <Header titleLg={true} title="Frequently Asked Question."></Header>
            <AnswerQuestion/>
        </main>
    );
};

export default FaqPage;
import React from 'react';

const Faqcard = ({data,index}) => {
    const {question,answer}  = data
    const id = "FAQ" + Math.round(Math.random()*1000) + index
    return (
        <div className="faq-card">
                <button className="faq-question-label" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls="collapseExample">
                    {question}
                </button>
            <div className="collapse faq-answer" id={id}>
                <div className="faq-answer-body">{answer}</div>
            </div>
        </div>
    );
};

export default Faqcard;
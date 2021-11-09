import React, { useRef, useState } from "react";

const Faqcard = ({ data, index, activeFaq, setActiveFaq }) => {
    const { question, answer, id } = data;
    const [faqAnswerHeight, setFaqAnswerHeight] = useState(null)
    const [isActive, setIsActive] = useState(false);
    const FaqBody = useRef("")

    const faqActivation = (cardId) => {
        setIsActive(!isActive);
        setActiveFaq(cardId);
        
        setFaqAnswerHeight(FaqBody.current.scrollHeight)
        
    };


    return (
        <div onClick={() => faqActivation(id)} className={`${isActive && activeFaq === id ? "active" : ""} faq-card`}>
            <button className="faq-question-label" type="button">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="">{question.toUpperCase()}</div>
                    <div className="flex-shrink-0 collapse-symbol">
                        <div className="line line-one"></div>
                        <div className="line line-tow"></div>
                    </div>
                </div>

            </button>
            <div ref={FaqBody} style={{ maxHeight: activeFaq === id && isActive ? faqAnswerHeight : 0 }} className={`${activeFaq === id ? "active" : ""} faq-answer`} id={id}>
                <div className="faq-answer-body">{answer}</div>
            </div>
        </div>
    );
};

export default Faqcard;

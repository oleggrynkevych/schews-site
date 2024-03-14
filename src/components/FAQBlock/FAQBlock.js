import './FAQBlock.scss';
import { useState } from 'react';
import faqData from './faq-data';
import FAQItem from './FAQItem/FAQItem';

function FAQBlock() {
    const [activeIndex, setActiveIndex] = useState();

    return(
        <div className='faq-block' id='faq'>
            <div className='faq-block-container'>
                <h4>FAQ</h4>
                <div className='faq-box'>
                    {
                        faqData.map((faqItem, index) => (
                            <FAQItem
                                key={index}
                                question={faqItem.question}
                                answer={faqItem.answer}
                                isActiveIndex={index === activeIndex}
                                setActiveIndex={setActiveIndex}
                                faqItemIndex={index}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQBlock;
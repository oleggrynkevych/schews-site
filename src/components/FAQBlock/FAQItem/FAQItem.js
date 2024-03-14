import './FAQItem.scss';
import ArrowIcon from '../../../images/icon-arrow.svg';
import classNames from 'classnames';


function FAQItem(props) {

    const toggleSection = () => {
        const nextIndex = props.isActiveIndex ? null : props.faqItemIndex;
        props.setActiveIndex(nextIndex);
    };

    const arrowClasses = classNames('arrow-icon', {
        open: props.isActiveIndex 
    });

    const answerClasses = classNames('faq-item-answer', {
        open: props.isActiveIndex
    });

    return (
        <div className='faq-item'>
            <div className='faq-item-question' onClick={toggleSection}>
                <span>{props.question}</span>
                <img className={arrowClasses} src={ArrowIcon} alt={'Arrow Icon'}/>
            </div>

    
            <div className={answerClasses}>
                {props.answer}
            </div>
            
        </div>
    )
}

export default FAQItem;
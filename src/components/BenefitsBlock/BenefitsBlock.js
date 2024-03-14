import './BenefitsBlock.scss';
import BenefitCard from './BenefitCard/BenefitCard';
import benefitCards from './benefitcard-data';

function BenefitsBlock() {
    return (
        <div className='benefits-block' id='benefits'>
            <div className='benefits-block-container'> 
                <h4>Benefits</h4>
                <div className='benefits-cards-block'>
                    {benefitCards.map((card, index) => (
                        <BenefitCard
                            key={index}
                            image={card.image}
                            title={card.title}
                            text={card.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BenefitsBlock;
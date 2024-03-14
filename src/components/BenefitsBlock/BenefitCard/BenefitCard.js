import './BenefitCard.scss';

function BenefitCard(props) {
    return (
        <div className='benefit-card'>
            <img src={props.image} alt={props.title}/>
            <h5>{props.title}</h5>
            <p>{props.text}</p>
        </div>
    )
}

export default BenefitCard;